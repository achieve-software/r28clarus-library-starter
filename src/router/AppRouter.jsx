import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { GlobalStyle } from "../styles/Global.styles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />{" "}
        {/* <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />}></Route>
        </Route>{" "}
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />}></Route>
        </Route>{" "} */}
        <Route element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;