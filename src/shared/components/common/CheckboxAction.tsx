import React from "react";
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

type Props = {
    completed: boolean;
    onToggle: () => void;
    color?: "default" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
};

const CheckboxAction: React.FC<Props> = ({ completed, onToggle, color = "default" }) => {
    return (
        <IconButton
            onClick={onToggle}
            color={completed ? "success" : color}
            size="small"
        >
            {completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
    );
};

export default CheckboxAction; 