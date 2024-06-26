import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './Addchannel.css';

export default function Addchannel({ onAddChannel, onBack }) {
  const CHARACTER_LIMIT = 20;
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCreateChannel = () => {
    if (name.trim()) {
      onAddChannel(name.trim());
    } else {
      alert("Channel name is required.");
    }
  };

  return (
    <div className='add-channel'>
      <Paper elevation={0} className="paper-container">
        <TextField
          id="channel-name"
          label="Channel Name"
          inputProps={{ maxLength: CHARACTER_LIMIT }}
          variant="standard"
          value={name}
          onChange={handleNameChange}
          className="form-field"
        />
        <TextField
          id="channel-desc"
          label="Channel Description"
          variant="standard"
          value={description}
          onChange={handleDescriptionChange}
          className="form-field"
        />
        <FormControl className="form-control">
          <InputLabel id="channel-type-label">Channel Type</InputLabel>
          <Select
            labelId="channel-type-label"
            id="channel-type"
            value={type}
            label="Channel Type"
            onChange={handleTypeChange}
            className="form-field"
          >
            <MenuItem value="Public">Public</MenuItem>
            <MenuItem value="Private">Private</MenuItem>
          </Select>
        </FormControl>
        <div className="button-container">
          <Button
            onClick={handleCreateChannel}
            fullWidth
            variant="contained"
            className="form-field"
          >
            Create Channel
          </Button>
        </div>
        <div className="button-container">
          <Button
            onClick={onBack}
            fullWidth
            variant="outlined"
            className="form-field"
          >
            Back
          </Button>
        </div>
      </Paper>
    </div>
  );
}
