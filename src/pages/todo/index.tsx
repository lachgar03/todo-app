import React, { useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import { useTodoContext } from "../../contexts/todo/TodoContext";
import TodoInput from "../../shared/components/todos/TodoInput";
import TodoList from "../../shared/components/todos/TodoList";

const TodosPage: React.FC = () => {
  const { todos, addTodo, toggleTodoComplete, deleteTodo } = useTodoContext();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          📝 Todo List
        </Typography>
        <TodoInput value={input} onChange={setInput} onAdd={handleAddTodo} />
        <TodoList 
          todos={todos} 
          onToggleComplete={toggleTodoComplete}
          onDelete={deleteTodo}
        />
      </Paper>
    </Container>
  );
};

export default TodosPage;
