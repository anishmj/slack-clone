import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Alert,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";

// Email validation utility
const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Input errors
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Form validity and success message
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  // Alert management
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState(null);

  // Toggle between login and sign-up
  const [formType, setFormType] = useState('login'); // 'login' or 'signup'

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // Validation for onBlur Username
  const handleUsername = () => {
    if (!usernameInput) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
  };

  // Validation for onBlur Email
  const handleEmail = () => {
    if (!isEmailValid(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    if (!passwordInput || passwordInput.length < 8 || passwordInput.length > 20) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleFormSubmit = () => {
    // Validation
    handleUsername();
    handleEmail();
    handlePassword();

    if (usernameError || emailError || passwordError) {
      setAlertSeverity('error');
      setAlertMessage('Please correct the errors and try again.');
      setShowAlert(true);
      return;
    }

    // Store data in local storage
    if (formType === 'signup') {
      localStorage.setItem('username', usernameInput);
      localStorage.setItem('email', emailInput);
      localStorage.setItem('password', passwordInput);
    }

    if (formType === 'signup') {
      if (!usernameInput || !emailInput || !passwordInput) {
        setAlertSeverity('error');
        setAlertMessage('All fields are required for sign-up.');
        setShowAlert(true);
        return;
      }
      setAlertSeverity('success');
      setAlertMessage('Sign-up successful! Redirecting...');
    } else {
      if (!emailInput || !passwordInput) {
        setAlertSeverity('error');
        setAlertMessage('Email and password are required for login.');
        setShowAlert(true);
        return;
      }
      setAlertSeverity('success');
      setAlertMessage('Login successful! Redirecting...');
    }

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      navigate('/Dashboard');
    }, 500);
  };

  return (
    <div className="auth-container">
      <ToggleButtonGroup
        value={formType}
        exclusive
        onChange={(e, newFormType) => setFormType(newFormType)}
        aria-label="auth form type"
        sx={{ marginBottom: "10px" }}
      >
        <ToggleButton value="login" aria-label="login">
          Login
        </ToggleButton>
        <ToggleButton value="signup" aria-label="signup">
          Sign Up
        </ToggleButton>
      </ToggleButtonGroup>
      <Stack sx={{ width: '100%' }} spacing={2} className="alert-stack">
        {showAlert && (
          <Alert severity={alertSeverity} onClose={() => setShowAlert(false)}>
            {alertMessage}
          </Alert>
        )}
      </Stack>
      {formType === 'signup' && (
        <p>
          <TextField
            id="username"
            label="Username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            onBlur={handleUsername}
            variant="standard"
            fullWidth
            size="small"
            error={usernameError}
            helperText={usernameError && "Username is required."}
          />
        </p>
      )}
      <p>
        <TextField
          id="email"
          inputMode="email"
          label="Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          onBlur={handleEmail}
          variant="standard"
          fullWidth
          size="small"
          error={emailError}
          helperText={emailError && "Please enter a valid email."}
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
            onBlur={handlePassword}
            error={passwordError}
            helperText={passwordError && "Password must be 8-20 characters long."}
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
      <Button onClick={handleFormSubmit} fullWidth variant="contained">
        {formType === 'signup' ? 'SIGN UP' : 'LOGIN'}
      </Button>
      <br /><br />
      <Button onClick={handleFormSubmit} fullWidth variant="outlined" startIcon={<GoogleIcon />}>
        Continue with Google
      </Button>
      <br /><br />
      <Button onClick={handleFormSubmit} fullWidth variant="outlined" startIcon={<AppleIcon />}>
        Continue with Apple
      </Button>
    </div>
  );
}

export default Auth;
