import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModeContextProvider } from "./components/context/backgroundcontext";
import { CreatePreviewProvider } from "./components/context/sitePreviewContext";
import { CreatePreviewMovieProvider } from "./components/context/moviePreviewContext";
import { CreatePreviewProvider_2 } from "./components/context/sitePreviewContext_2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModeContextProvider>
      <CreatePreviewMovieProvider>
        <CreatePreviewProvider>
          <CreatePreviewProvider_2>
            <App />
          </CreatePreviewProvider_2>
        </CreatePreviewProvider>
      </CreatePreviewMovieProvider>
    </ModeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
