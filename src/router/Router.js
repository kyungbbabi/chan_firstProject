import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Protfolio from "../pages/Portfolio";
import Register from "../pages/Register";

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/Main" Component={Main} />
        <Route path="/Portfolio" Component={Protfolio} />
        <Route path="/Blog" Component={Blog} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;