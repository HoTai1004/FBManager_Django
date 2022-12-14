import React from "react";
import { ModalServiceProvider } from "./Components/Modal/ModalService";
import { UserContextProvider } from "./contexts/userContext";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { BookingList } from "./routes/BookingList/BookingList";
import { Login } from "./routes/Login/Login";
import { Signup } from "./routes/Signup/Signup";
import { TurfList } from "./routes/TurfList/TurfList";
import { Turf } from "./routes/TurfList/Turf/Turf";
import { Home } from "./routes/Home/Home";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <ModalServiceProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/booking-list" element={<BookingList />} />
            <Route path="/turflist">
              <Route element={<ProtectedRoute />}>
                <Route index element={<TurfList />} />
                <Route path=":turfId" element={<Turf />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </UserContextProvider>
      </ModalServiceProvider>
    </div>
  );
};