import "utils/axiosSetting";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return <ErrorBoundary fallback={<div>error</div>}></ErrorBoundary>;
}

export default App;
