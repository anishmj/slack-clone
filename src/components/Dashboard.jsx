import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Button as BootstrapButton, Dropdown } from 'react-bootstrap';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChevronDownIcon from '@mui/icons-material/ExpandMore';
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GestureIcon from '@mui/icons-material/Gesture';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [muiAnchorEl, setMuiAnchorEl] = useState(null); // Changed from `false` to `null`
  const muiOpen = Boolean(muiAnchorEl);
  const navigate = useNavigate(); // Initialize the `useNavigate` hook

  const handleMuiClick = (event) => {
    setMuiAnchorEl(event.currentTarget);
  };

  const handleMuiClose = () => {
    setMuiAnchorEl(null); // Changed from `false` to `null`
  };

  const handleAddChannelClick = () => {
    navigate('/addchannel'); // Navigate to the Addchannel component
  };

  return (
    <div>
      <div className='sidebar'>
        <div className='des-side'>
          <Button variant="secondary" endIcon={<DragHandleIcon />}></Button>
        </div>
        <div className='user-side'>
          <Button variant="secondary" endIcon={<AccountCircleIcon />}></Button>
        </div>
        <div className='home-side'>
          <Button variant="secondary" endIcon={<HomeIcon />}></Button>
        </div>
        <div className='more-side'>
          <Button variant="secondary" endIcon={<MoreHorizIcon />}></Button>
        </div>
      </div>
      <div className='content'>
        <div className='newChannel'>
          <Button variant="contained" endIcon={<RocketLaunchIcon />}>
            UPDATE PLAN
          </Button>
        </div>
        <div className='threads'>
          <BootstrapButton variant='secondary'>
            <GestureIcon />Threads
          </BootstrapButton>
        </div>
        <div className='draftssent'>
          <BootstrapButton variant="secondary">
            <SendIcon /> Drafts & Sent
          </BootstrapButton>
        </div>
        <div className='opt-button'>
          <Button
            variant="contained"
            endIcon={<ChevronDownIcon />}
            onClick={handleMuiClick}
          >
            Channels
          </Button>
          <Menu
            anchorEl={muiAnchorEl}
            open={muiOpen}
            onClose={handleMuiClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleMuiClose}>Create</MenuItem>
            <MenuItem onClick={handleMuiClose}>Manage</MenuItem>
          </Menu>
          <div className='general'>
            <BootstrapButton variant="secondary">
              <TagIcon /> general
            </BootstrapButton>
          </div>
          <div className='random'>
            <BootstrapButton variant="secondary">
              <TagIcon /> random
            </BootstrapButton>
          </div>
          <div className='addchannel'>
            <BootstrapButton
              variant="secondary"
              onClick={handleAddChannelClick} // Use the handler for navigation
            >
              <AddIcon /> Add Channel
            </BootstrapButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
