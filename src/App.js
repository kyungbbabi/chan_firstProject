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




function App() {
  
  return (
    // <Login />
    // <Home />
    // <Main />
    // <Blog />
    // <Protfolio />
    // <Header />


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

    //    <ScrollTop />
  )

}

export default App;