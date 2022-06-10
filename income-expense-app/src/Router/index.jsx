import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AuthScreen from "Features/AuthScreen/index";
import Login from "Features/AuthScreen/Login";
import Dashboard from "Features/Dashboard";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { Income } from "Features/Income/Income";
import Private from "./Private";
const index = ({ isUserLogged }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<AuthScreen />} />
      <Route
        path="/dashboard"
        element={
          // <Private>
            <Dashboard />
          // </Private>
        }
      />
      <Route path="/income" element={<Income />} />
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default index;
