import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Button, Container, Grid } from '@mui/material';
import TodoList from './TodoList';
import Admin from './pages/admin/Admin';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.module.css'; // Importa la hoja de estilos

import { deleteKeyStorage, getStorage } from "./utils/storage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDirector, setIsDirector] = useState(false);
  const [isPm, setIsPm] = useState(false);
  const [isWorker, setIsWorker] = useState(false);
  const [isAssistantManager, setIsAssistantManager] = useState(false);

  const setPermissions = () => {
    const role =  getStorage("Role");
    console.log("role", role);
    switch (role) {
      case "Director":
        setIsDirector(true);
        break;      
      case "Project manager":
        console.log("Get into project manager");
        setIsPm(true)
        break;
      
      case "Worker":
        console.log("Get into project manager");
        setIsWorker(true)
        break;
      
      case "Assistant manager":
        setIsAssistantManager(true);
        break;
    
      default:
        deleteKeyStorage("Token");
        deleteKeyStorage("Role");
        break;
    }
  };

  window.addEventListener("storage", () => {
    setPermissions();
  });

  useEffect(() => {
    setPermissions();
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    deleteKeyStorage("Token");
    deleteKeyStorage("Role");
    window.location.href = "/";
  };

  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', backgroundColor: 'rgba(0, 0, 255, 0.5)', marginBottom: '20px' }}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>
                Notly
              </Link>
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {isAuthenticated ? (
                <>
                  { isDirector ?
                  (<Link to="/admin" style={{ marginRight: '10px' }}>
                  <Button variant="contained" color="primary">
                    Admin
                  </Button>
                </Link>): (<></>) }

                { isPm ?
                  (<Link to="/todolist" style={{ marginRight: '10px' }}>
                  <Button variant="contained" color="primary">
                    Projects
                  </Button>
                </Link>): (<></>) }
                { isWorker ? 
                  (<Link to="/todolist" style={{ marginRight: '10px' }}>
                    <Button variant="contained" color="primary">
                      Todo List
                    </Button>
                  </Link>) : (<></>)}
                  { isAssistantManager ? 
                  (<Link to="/todolist" style={{ marginRight: '10px' }}>
                    <Button variant="contained" color="primary">
                      Admin Assistant
                    </Button>
                  </Link>) : (<></>)}
                  <Button variant="contained" color="secondary" onClick={() => handleLogout()}>
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
            <Route
              path="/admin"
              element={
                isAuthenticated && isDirector ? <Admin /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

