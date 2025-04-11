import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)