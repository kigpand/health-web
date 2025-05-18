import { ErrorBoundary } from "react-error-boundary";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Error from "./pages/Error";
import LoadingLayout from "./common/layout/LoadingLayout";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary
          onReset={() => console.log("test")}
          FallbackComponent={Error}
        >
          <LoadingLayout />
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
