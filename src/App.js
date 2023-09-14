import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Protfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import style from "./style.css"
import Header from "./component/header/Header";
import ScrollTop from "./component/ScrollTop";
import BlogDetail from "./pages/BlogDetail";
import PortfolioDetail from "./pages/PortfolioDetail";




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/main"} element={<Main />}></Route>
        <Route path={"/blog"} element={<Blog />}></Route>
        <Route path={"/blogdetail"} element={<BlogDetail />}></Route>
        <Route path={"/portfolio"} element={<Protfolio />}></Route>
        <Route paht={"/portfoliodetail"} element={<PortfolioDetail />}></Route>
      </Routes>
    </BrowserRouter>

    //    <ScrollTop />
  )

}

export default App;