import React from "react";
import Navbar from "./components/navbar/Navbar";
import css from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/authorization/Registration";
import Login from "./components/authorization/Login";

function App() {
  return (
    <BrowserRouter>
      <div className={css.app}>
        <Navbar />
        <div className={css.wrap}>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
