import { useState } from "react";
import { Container, Paper, TextField, Button, Typography, Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === "admin" && password === "admin") {
            // Store login state
            localStorage.setItem("isLoggedIn", "true");
            // Redirect to todos page
            navigate("/todos");
        } else {
            alert("Login failed");
        }
    };

    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Login
                </Typography>
                <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        variant="outlined"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        onClick={handleLogin}
                        startIcon={<LoginIcon />}
                        size="large"
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}