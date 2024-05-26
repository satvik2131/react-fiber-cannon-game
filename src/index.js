import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import fallbackRender from "./components/utils/errorFallback";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
