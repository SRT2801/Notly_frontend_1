import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';



import { post } from "./../../utils/http";
import CONFIG from "./../../utils/config";

import { setStorage } from "../../utils/storage";
import { successAlert, errorAlert } from "./../../utils/toast"; 

function Register({ setIsAuthenticated }) {
  const [companyName, setCompanyName] = useState('');
  const [companyNit, setCompanyNit] = useState('');
  const [companyCellPhone, setCompanyCellPhone] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  
  const [directorName, setDirectorName] = useState('');
  const [directorLastName, setDirectorLastName] = useState('');
  const [directorEmail, setDirectorEmail] = useState('');
  const [directorPhoneNumber, setDirectorPhoneNumber] = useState('');
  const [directorPassword, setDirectorPassword] = useState('');
  const [directorActive, setDirectorActive] = useState(false);
  // const [directorRole, setDirectorRole] = useState('');
  
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
    const registrationData = {
      companyData: {
        name: companyName,
        nit: companyNit,
        phoneNumber: companyCellPhone,
        email: companyEmail
      },
      directorData: {
        name: directorName,
        last_name: directorLastName,
        email: directorEmail,
        phoneNumber: directorPhoneNumber,
        password: directorPassword,
        active: directorActive,
        role: "Director"
      }
    };
    console.log(registrationData);
    const url = `${CONFIG.URL.BACKEND_USER}/company`;
    const result = await post(url, registrationData);
    console.log(result);
    successAlert("Registrado con exito");
    // setIsAuthenticated(true);
    navigate('/login'); // Redirige al usuario a la página de TodoList después de registrarse
    } catch (error) {
      console.log(error);
      errorAlert(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <h2>Company Information</h2>
        <TextField
          label="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 50, minLength: 3 }}
        />
        <TextField
          label="NIT"
          value={companyNit}
          onChange={(e) => setCompanyNit(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 9, minLength: 9 }}
        />
        <TextField
          label="Cell Phone"
          value={companyCellPhone}
          onChange={(e) => setCompanyCellPhone(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 15, minLength: 9 }}
        />
        <TextField
          label="Company Email"
          type="email"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 30, minLength: 6 }}
        />
        
        <h2>Director Information</h2>
        <TextField
          label="First Name"
          value={directorName}
          onChange={(e) => setDirectorName(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 50, minLength: 3 }}
        />
        <TextField
          label="Last Name"
          value={directorLastName}
          onChange={(e) => setDirectorLastName(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 50, minLength: 3 }}
        />
        <TextField
          label="Director Email"
          type="email"
          value={directorEmail}
          onChange={(e) => setDirectorEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 30, minLength: 6 }}
        />
        <TextField
          label="Phone Number"
          value={directorPhoneNumber}
          onChange={(e) => setDirectorPhoneNumber(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 15, minLength: 9 }}
        />
        <TextField
          label="Password"
          type="password"
          value={directorPassword}
          onChange={(e) => setDirectorPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
          inputProps={{ maxLength: 16, minLength: 6 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={directorActive}
              onChange={(e) => setDirectorActive(e.target.checked)}
            />
          }
          label="Active"
        />
        {/* <TextField
          label="Role"
          value={directorRole}
          onChange={(e) => setDirectorRole(e.target.value)}
          fullWidth
          required
          margin="normal"
        /> */}
        
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
}

export default Register;
