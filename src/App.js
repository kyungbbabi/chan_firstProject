import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Login2 from "./pages/Login2"
import Main from "./pages/Main";
import Register from "./pages/Register";
import Protfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BackgroundImage from "./component/BackgroundImage";




function App() {
  
  return (
    <Login />
    // <Login2 />

    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" Component={Home} />
    //   <Route path="/Login" Component={Login} />
    //   <Route path="/Register" Component={Register} />
    //   <Route path="/Main" Component={Main} />
    //   <Route path="/Portfolio" Component={Protfolio} />
    //   <Route path="/Blog" Component={Blog} />
    // </Routes>
    // </BrowserRouter>
  )

}

export default App;