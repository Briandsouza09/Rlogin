import React, { useState } from "react";
import GoogleButton from 'react-google-button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import img1 from "./IImage.jpg";
import "./Login.css"; // Import separate CSS file

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the submit logic here
    console.log("Form submitted!");
    console.log("Email:", email);
  };

  return (
    <div className="container">
      <div className="box box-left">
        <div className="image-container">
          <img src={img1} alt="" style={{ width: '100%', height: 'auto' }} />
          <div className="image-text">
            <span style={{ color: '#bdebf7',fontWeight: 'bold', fontFamily: 'sans-serif',padding:'0px', fontSize: '27px' }}>SIGN IN TO YOUR</span> <br /><br /> <span style={{ color: 'white',fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: '27px' }}>HEALTHY & HAPPY LIFE!</span>
          </div>
        </div>
      </div>
      <div className="box box-right">
        <div className="nested-box">
          <div style={{ textAlign: 'center', margin: '0px' }}>
            <span style={{ display: 'inline-block', padding: '0px', color: '#003e75', fontSize: '50px', margin: '30px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Welcome</span>
          </div>
          {/* New Email TextField (OutlinedInput) */}
          <div style={{ textAlign: 'start', marginLeft: '60px' }}>
            <span style={{ display: 'inline-block', padding: '0px', color: 'black', fontSize: '15px' }}>Email</span>
          </div>
          <FormControl sx={{ m: 1, width: '80%', marginTop: '10px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Enter your email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              label="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>

          {/* Password TextField (OutlinedInput) */}
          <div style={{ textAlign: 'start', marginLeft: '60px' }}>
            <span style={{ display: 'inline-block', padding: '0px', color: 'black', fontSize: '15px' }}>Password</span>
          </div>
          <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Enter your password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          {/* Checkbox and Button in a straight line */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
                style={{ color: 'black', marginLeft: '50px' }}
              />
            </FormGroup>
            <Button
              variant="text"
              color="primary"
              style={{ marginRight: 'end' }}
            >
              Forgot Password?
            </Button>
          </div>

          {/* Submit Button */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            sx={{
              width: '80%',
              padding: '10px',
              margin: '5px',
              marginTop: '30px',
              backgroundColor: 'aqua',
              color: 'black',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            Submit
          </Button>

          {/* OR Text */}
          <div style={{ textAlign: 'center', margin: '0px' }}>
            <span style={{ display: 'inline-block', padding: '0px', color: 'black', fontSize: '20px' }}>OR</span>
          </div>

          {/* Login with Google Button */}
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <GoogleButton
              onClick={() => console.log("Sign in with Google clicked")}
              style={{ justifyContent: 'center', width: '80%', padding: '0px', margin: '0 auto' ,backgroundColor:'transparent', color: 'black',borderRadius:'5px'}}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
