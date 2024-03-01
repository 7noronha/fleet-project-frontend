import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ToastProvider } from "@inovaetech/components-react";
import ThemeProvider from "@inovaetech/components-react/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ToastProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ToastProvider>
        </BrowserRouter>
    </React.StrictMode>
);
