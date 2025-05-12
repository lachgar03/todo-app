import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
    onDelete: () => void;
    color?: "default" | "primary" | "secondary" | "error";
};

const DeleteAction: React.FC<Props> = ({ onDelete, color = "error" }) => {
    return (
        <IconButton
            onClick={onDelete}
            color={color}
            size="small"
        >
            <DeleteIcon />
        </IconButton>
    );
};

export default DeleteAction; 