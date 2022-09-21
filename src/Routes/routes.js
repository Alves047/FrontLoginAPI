import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route component={Login} path="/" element={<Login/>}></Route>
        <Route component={Register} path="/register"element={<Register/>} ></Route> 
      </Router>
    </BrowserRouter>
  );
}
export default Routes;
