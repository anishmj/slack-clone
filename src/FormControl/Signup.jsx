import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";


function Signuser() {
  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  // Input fields
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Alert management
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (usernameInput && emailInput && passwordInput) {
      // Simulate successful sign-up
      setAlertSeverity('success');
      setAlertMessage('Sign-up successful! Redirecting...');
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        navigate('/Dashboard');
      }, 500);
    } else {
      // Show error if inputs are missing
      setAlertSeverity('error');
      setAlertMessage('Please fill in all fields.');
      setShowAlert(true);
    }
  };

  return (
    <div className="signuser-container">
      <Stack sx={{ width: '100%' }} spacing={2} className="alert-stack">
        {showAlert && (
          <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
            {alertMessage}
          </Alert>
        )}
      </Stack>
      <p>
        <TextField 
          id="username" 
          label="Username" 
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          variant="standard" 
          fullWidth 
          size="small" 
        />
      </p>
      <p>
        <TextField 
          id="email" 
          inputMode="email" 
          label="Email" 
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          variant="standard" 
          fullWidth 
          size="small" 
        />
      </p>
      <p>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            fullWidth
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </p>
      <Button onClick={handleLoginClick} fullWidth variant="contained">
        SIGN UP
      </Button>
      <br /><br />
      <Button onClick={handleLoginClick} fullWidth variant="outlined" startIcon={<GoogleIcon />}>
        Continue with Google
      </Button>
      <br /><br />
      <Button onClick={handleLoginClick} fullWidth variant="outlined" startIcon={<AppleIcon />}>
        Continue with Apple
      </Button>
    </div>
  );
}

export default Signuser;
