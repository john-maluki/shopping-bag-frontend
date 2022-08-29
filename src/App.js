import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { obtainUser } from "./services/userService";

const App = () => {
  const [userData, setUserData] = useState({});
  const getUserData = () => {
    const user = obtainUser();
    setUserData(user);
  };

  useEffect(getUserData, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Header user={userData} />
        <Content user={userData} />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
