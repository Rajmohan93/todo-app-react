/**
 * ? @description : Index Component
 */

// Dependencies
import React from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
