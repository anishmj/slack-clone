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
import { useNavigate } from "react-router-dom";
function Signuser(){
    //password field
    const [showPassword, setShowPassword] = React.useState(false);

    //inputs

    const[usernameInput,setUsernameInput] = useState()
    const[emailInput,setEmailInput] = useState()
    const[passwordInput,setPasswordInput] = useState()

    

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();

    
  };

  const navigate = useNavigate()
    const handleLoginClick = ()=>{
        navigate('/Dashboard')
    }
    return(
        <div> 
             <p><TextField id="standard-basic" label="Username" 
             value={usernameInput}
             variant="standard" 
             
             fullWidth size="small"/></p>
             <p><TextField id="standard-basic" inputMode="email" label="Gmail" variant="standard" fullWidth size="small"/></p>
             <p>
             <FormControl sx={{  width: '100% ' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input fullWidth
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
             <Button onClick={handleLoginClick} fullWidth variant="contained">SIGN UP</Button>

        </div>
    )
}

export default Signuser

