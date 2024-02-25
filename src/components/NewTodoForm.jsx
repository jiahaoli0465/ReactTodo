import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const NewTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ text: inputValue, completed: false });
    setInputValue('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1 }}>
      <TextField
        variant="outlined"
        placeholder="Add new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default NewTodoForm;
