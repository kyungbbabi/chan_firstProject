import React, { useEffect, useContext } from "react";
import { store } from "./store/store";
import { userApi } from "./api/user";
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
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";




function App() {

  const [state, dispatch] = useContext(store);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token && !state.user.id) {
        try {
          const response = await userApi.getProfile();
          dispatch({
            type: 'user',
            payload: response.data
          });
        } catch (e) {
          localStorage.removeItem("token");
          console.log('토큰 검증 실패', e);
        }
      }
    };
    checkAuth();
  }, []);

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
        <Route path={"/dashboard"} element={<Dashboard />}></Route>
        <Route path={"/profile"} element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;