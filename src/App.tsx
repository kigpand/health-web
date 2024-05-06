import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddRoutine from "./pages/AddRoutine";
import { PATH } from "./enum/path";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary fallback={<div>error</div>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path={PATH.home} element={<Main />} />
              <Route path={PATH.login} element={<Login />} />
              <Route path={PATH.addRoutine} element={<AddRoutine />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
