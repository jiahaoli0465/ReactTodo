import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NewTodoForm from './NewTodoForm'; 

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <Box>
      <NewTodoForm addTodo={addTodo} />
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              onChange={() => toggleCompletion(todo.id)}
            />
            <ListItemText primary={todo.text} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
