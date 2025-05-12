import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes";
import { TodoProvider } from "./contexts/todo/TodoContext";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoProvider>
        <AppRoutes />
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>
);
