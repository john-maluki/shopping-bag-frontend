import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import Register from "../registration/RegistrationForm";

const Home = () => {
  let navigate = useNavigate();

  const [showPane, setShowPane] = useState(true);

  const togglePane = () => {
    setShowPane(!showPane);
  };

  const moveToProducts = () => {
    navigate("/products");
  };

  return (
    <main>
      <div className="grid">
        <div className="showcase-text">
          <h1>Easier window shopping</h1>
          <p>Your best window shopping shops available</p>
          <span className="btn btn-outline" onClick={moveToProducts}>
            View Products
          </span>
        </div>
        {showPane ? (
          <LoginForm togglePane={togglePane} />
        ) : (
          <Register togglePane={togglePane} />
        )}
      </div>
    </main>
  );
};

export default Home;
