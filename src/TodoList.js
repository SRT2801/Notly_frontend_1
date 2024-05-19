import React, { useState } from 'react';
import { Container, TextField, Button, Select, MenuItem, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './App.module.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [assignee, setAssignee] = useState('');
  const [role, setRole] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText && assignee && role) {
      const newTask = { text: taskText, assignee, role };
      setTasks([...tasks, newTask]);
      setTaskText('');
      setAssignee('');
      setRole('');
    }
  };

  const handleEditTask = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setTaskText(tasks[index].text);
    setAssignee(tasks[index].assignee);
    setRole(tasks[index].role);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task, index) =>
      index === currentTaskIndex ? { ...task, text: taskText, assignee, role } : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTaskIndex(null);
    setTaskText('');
    setAssignee('');
    setRole('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTaskIndex(null);
    setTaskText('');
    setAssignee('');
    setRole('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <h2>Crea y Asigna las tareas!</h2>
      <form onSubmit={isEditing ? handleSaveTask : handleAddTask} className={styles.form}>
        <TextField
          variant="outlined"
          label="Nueva tarea"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
        <Select
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          displayEmpty
          required
          variant="outlined"
        >
          <MenuItem value="" disabled>Asignar a</MenuItem>
          <MenuItem value="Persona 1">Persona 1</MenuItem>
          <MenuItem value="Persona 2">Persona 2</MenuItem>
          <MenuItem value="Persona 3">Persona 3</MenuItem>
        </Select>
        <TextField
          variant="outlined"
          label="Rol"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          {isEditing ? 'Guardar' : 'Agregar'}
        </Button>
        {isEditing && (
          <Button variant="contained" color="secondary" onClick={handleCancelEdit}>
            Cancelar
          </Button>
        )}
      </form>
      <List className={styles.list}>
        {tasks.map((task, index) => (
          <ListItem key={index} className={styles.task}>
            <ListItemText primary={`${task.text} - Asignado a: ${task.assignee} - Rol: ${task.role}`} className={styles.taskText} />
            <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(index)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default TodoList;
