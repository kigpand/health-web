import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Error from "./pages/Error";
import LoadingLayout from "./common/layout/LoadingLayout";

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
      <ErrorBoundary
        onReset={() => console.log("test")}
        FallbackComponent={Error}
      >
        <LoadingLayout />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
