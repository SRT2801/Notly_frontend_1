import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button } from '@mui/material';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí deberías agregar la lógica de autenticación
    setIsAuthenticated(true);
    navigate('/todolist'); // Redirige al usuario a la página de TodoList después de iniciar sesión
  };

  return (
    <Container maxWidth="sm">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
          margin="normal"
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
