import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="nav justify-content-end">
          <li className="nav-item ">
            <NavLink className="nav-link active" aria-current="page" to="/">
              HOME
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/service">
              SERVICES
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">
              PORTFOLIO
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              MENTIONS LÉGALES
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
