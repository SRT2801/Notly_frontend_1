import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button } from '@mui/material';

import { post } from "./../../utils/http";
import CONFIG from "./../../utils/config";

import { setStorage, getStorage } from "../../utils/storage";
import { successAlert, errorAlert } from "./../../utils/toast";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = getStorage("Token");
    console.log(isAuth);
    if (typeof isAuth === "string") {
      navigate("/");
      setIsAuthenticated(true)
    }
  }, []);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const url = `${CONFIG.URL.BACKEND_USER}/employee/login`;
      const data = { email, password };
      const login = await post(url, data);
      console.log(login);
      setStorage("Token", login.token);
      setStorage("Role", login.role);
      setIsAuthenticated(true);
      successAlert("Exito");
      navigate('/');
    } catch (error) {
      console.log(error);
      errorAlert(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
          type='email'
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <p>No tienes cuenta? <Link to="/register" style={{ color: 'blue' }}>Regístrate aquí</Link></p>
    </Container>
  );
}

export default Login;
