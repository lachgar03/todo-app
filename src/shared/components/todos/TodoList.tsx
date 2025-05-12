import React from "react";
import { List, ListItem, ListItemText, Paper, Box } from "@mui/material";
import type { Todo } from "../../../types/todo";
import CheckboxAction from "../common/CheckboxAction";
import DeleteAction from "../common/DeleteAction";

type Props = {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          component={Paper}
          sx={{
            mb: 1,
            borderRadius: 1,
            "&:hover": {
              bgcolor: "action.hover",
            },
            opacity: todo.completed ? 0.7 : 1,
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          <ListItemText
            primary={todo.text}
            sx={{
              color: todo.completed ? "text.secondary" : "text.primary",
            }}
          />
          <Box sx={{ ml: 1, display: "flex", gap: 1 }}>
            <CheckboxAction
              completed={todo.completed}
              onToggle={() => onToggleComplete(todo.id)}
            />
            <DeleteAction onDelete={() => onDelete(todo.id)} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
