import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./routes/Login/Login";
import { Signup } from "./routes/Signup/Signup";
import { TurfList } from "./routes/TurfList/TurfList";
import { Turf } from "./routes/TurfList/Turf/Turf";
import { Home } from "./routes/Home/Home";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/turflist">
          <Route index element={<TurfList />} />
          <Route path=":turfId" element={<Turf />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};
