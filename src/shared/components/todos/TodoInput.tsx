import React from "react";
import { TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
};

const TodoInput: React.FC<Props> = ({ value, onChange, onAdd }) => {
  return (
    <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onAdd()}
        placeholder="Add a new todo..."
        variant="outlined"
        size="small"
      />
      <Button
        variant="contained"
        onClick={onAdd}
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
