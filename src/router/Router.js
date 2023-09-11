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
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/Login"} element={<Login />}></Route>
        <Route path={"/Register"} element={<Register />}></Route>
        <Route path={"/Main"} element={<Main />}></Route>
        <Route path={"/Portfolio"} element={<Protfolio />}></Route>
        <Route path={"/Blog"} element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;