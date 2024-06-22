import React, { useState } from 'react';
import './loginpage.css';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import LockIcon from '@mui/icons-material/Lock';
import FaceIcon from '@mui/icons-material/Face';
import Switch from '@mui/material/Switch';
import Loguser from './FormControl/Login';
import Signuser from './FormControl/Signup';

function Login() {
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(event.target.checked); // Toggle the checked state
    };

    return (
        <div className='loginuser'>
           <Paper elevation={5} style={{ padding: "10px" }}>
                {checked ? <Signuser /> : <Loguser />}
                <br />
                <Chip
                    icon={checked ? <FaceIcon /> : <LockIcon/>}
                    label={checked ? "Signup" : "Login"}
                    color="primary"
                    variant="outlined"
                />
                <br />
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Paper>
        </div>
    );
}

export default Login;
