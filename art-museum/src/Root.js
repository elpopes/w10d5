import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
