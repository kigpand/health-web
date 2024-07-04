import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddRoutine from "./pages/AddRoutine";
import { PATH } from "./enum/path";
import RoutineDetail from "./pages/RoutineDetail";
import Error from "./pages/Error";
import RoutinePlay from "./pages/RoutinePlay";
import RoutineFinish from "./pages/RoutineFinish";
import Home from "@/pages/Home";
import CheckRoutine from "./pages/CheckRoutine";
import RoutineEdit from "./pages/RoutineEdit";
import Category from "@/pages/Category";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path={PATH.home} element={<Home />} />
              <Route path={PATH.login} element={<Login />} />
              <Route path={PATH.addRoutine} element={<AddRoutine />} />
              <Route path={PATH.routineMain} element={<Main />} />
              <Route path={PATH.routineDetail} element={<RoutineDetail />} />
              <Route path={PATH.routinePlay} element={<RoutinePlay />} />
              <Route path={PATH.routineFinish} element={<RoutineFinish />} />
              <Route path={PATH.checkRoutine} element={<CheckRoutine />} />
              <Route path={PATH.routineEdit} element={<RoutineEdit />} />
              <Route path={PATH.category} element={<Category />} />
              <Route path={PATH.error} element={<Error />} />
              <Route path="*" element={<Main />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
