import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import { persistor, store } from "./store/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/posts" element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
    </PersistGate>
  </Provider>
);
