import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/globalstyles.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
