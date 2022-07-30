import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/posts" element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);
