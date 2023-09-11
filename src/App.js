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
    <Login />
    // <Home />
    // <Header />

    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" Component={Home} />
    //   <Route path="/Login" Component={Login} />
    //   <Route path="/Register" Component={Register} />
    //   <Route path="/Main" Component={Main} />
    //   <Route path="/Portfolio" Component={Protfolio} />
    //   <Route path="/Blog" Component={Blog} />
    // </Routes>

    //    <ScrollTop />
    // </BrowserRouter>
  )

}

export default App;