import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="head">
      <div className="container">
        <h1>Multi App</h1>
        <ul>
          <li>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Weather
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/calculator");
              }}
            >
              Calculater
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/notes");
              }}
            >
              Sticky Notes
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
