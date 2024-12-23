import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LangComponent from "../page/LangComponent";
import ThemeToggler from "../page/ThemeToggler";
import { ThemeContext } from "../page/ThemeContext";
import { Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <Navbar expand="lg" className={theme === "dark" ? "navbar-dark" : "navbar-light"} style={{ backgroundColor: theme === "dark" ? "rgba(17, 14, 14, 0.84)" : "rgba(245, 73, 12)" }}>
      <Container>
  
        {/* Hamburger Menu Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="button">Home</Nav.Link>
            <Nav.Link as={Link} to="/profiles" className="button">Profiles</Nav.Link>
            <Nav.Link as={Link} to="/calculator" className="button">Calculator</Nav.Link>
            <Nav.Link as={Link} to="/world-flags" className="button">World Geography</Nav.Link>
            <Nav.Link as={Link} to="/todo-app" className="button">DoneDeal</Nav.Link>

            {/* Extra components included in the collapsed menu */}
            <div className="extra-components">
              <LangComponent />
              <ThemeToggler />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Inline Styles for Button */}
      <style>
        {`
          #basic-navbar-nav {
            margin-left: 20%;            
          }
          .button {
            font-size: 1rem;
            font-weight: 500;
            text-decoration: none;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            margin-right: 1rem;
            transition: all 0.3s ease;
          }

          .button:hover {
            transform: translateY(-2px);
            background-color: rgba(255, 255, 255, 0.2);
          }

          .navbar {
            padding: 0.5rem 1rem;
            }

          .extra-components {
            display: flex;
            gap: 1rem;
            align-items: center;
          }
        `}
      </style>
    </Navbar>
  );
};

export default NavBar;
