import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/theme";
import { Router } from "@/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
