import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LangComponent from "../page/LangComponent";
import ThemeToggler from "../page/ThemeToggler";
import { ThemeContext } from "../page/ThemeContext";

const NavBar = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <nav>
      {/* Navigation Links */}
      <Link className="button" to="/">
        Home
      </Link>
      <Link className="button" to="/profiles">
        Profiles
      </Link>
      <Link className="button" to="/calculator">
        Calculator
      </Link>
      <Link className="button" to="/world-flags">
        World Geography
      </Link>
      <Link className="button" to="/todo-app">
        DoneDeal
      </Link>
      <div className="extra-components">
        <LangComponent />
        <ThemeToggler />
      </div>
    

      {/* Inline Styles */}
      <style>
        {`
        nav{
          display: flex;
          justify-content: space-arround;
          align-items: center;
          padding: 0 7em;
          height: 60px;
          width: 100%;
          position:sticky;
          top: 0;
          z-index: 1000;
          background-color: ${theme === "dark" ? "rgba(26, 20, 20, 0.84)" : "rgba(245, 73, 12)"};
          // color: ${theme === "dark" ? "white" : "#000"};
          box-shadow: ${theme === "dark" ? "rgba(0, 0, 0, 0.35) 0px 5px 15px,rgba(0, 0, 0, 0.5) 5px 10px 15px":"rgba(0, 0, 0, 0.35) 0px 5px 15px,rgba(0, 0, 0, 0.5) 5px 10px 15px"};
        }
        nav .button{
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          margin: 0 70px;
          }
        .button {
          outline: 0 !important;
          border: 0 !important;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: all ease-in-out 0.3s;
          cursor: pointer;
        }

        .button:hover {
          transform: translateY(-4px);
          background-color: rgba(255, 255, 255, 0.2);
        }

        .extra-components {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left: auto;
        }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
