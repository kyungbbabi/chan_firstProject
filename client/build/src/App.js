import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import PortfolioDetail from "./pages/PortfolioDetail";
import PostWrite from "./component/PostWrite";
import BlogDetail from "./pages/BlogDetail";
import Header from "./component/header/Header";




function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/main"} element={<Main />}></Route>
        <Route path={"/blog"} element={<Blog />}></Route>
        <Route path={"/blogdetail"} element={<BlogDetail />}></Route>
        <Route path={"/portfolio"} element={<Portfolio />}></Route>
        <Route path={"/portfoliodetail"} element={<PortfolioDetail />}></Route>
        <Route path={"/postwrite"} element={<PostWrite />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;