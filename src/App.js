// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@mui/material';
import TodoList from './TodoList';
import About from './About';
import Login from './Login';
import Register from './Register';
import './App.module.css'; // Importa la hoja de estilos

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', backgroundColor: 'rgba(0, 0, 255, 0.5)', marginBottom: '20px' }}>
          <Grid container alignItems="center">
            <Grid item xs={3}>
            <Link to="./About" variant="h" style={{ color: 'white' }}>Home</Link>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <Typography variant="h4" style={{ color: 'white' }}>N O T L Y</Typography>
            </Grid>
            <Grid item xs={3} style={{ textAlign: 'right' }}>
              {isAuthenticated ? (
                <>
                  <Link to="/todolist" style={{ marginRight: '10px' }}>
                    <Button variant="contained" color="primary">
                      Todo List
                    </Button>
                  </Link>
                  <Button variant="contained" color="secondary" onClick={() => setIsAuthenticated(false)}>
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </Link>
              )}
            </Grid>
          </Grid>
        </nav>
        <Container>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            <Route
              path="/todolist"
              element={
                isAuthenticated ? <TodoList /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
