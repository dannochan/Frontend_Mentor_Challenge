import React, { useState } from "react";
import "./Navbar.scss";
import menu from "../../assets/icon-menu.svg";
import close from "../../assets/icon-menu-close.svg";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const toggleMenu = (
    <motion.div
      whileInView={{ x: [300, 0] }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <img src={close} alt="closeMenu" onClick={toggleHandler} />
      <nav>
        <ul>
          {["home", "new", "popular", "trending", "categories"].map((item) => (
            <li key={{ item }}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );

  return (
    <div className="app__navbar">
      <div className="app__navbar_logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="app__navbar-mobile">
        <img src={menu} alt="menu" onClick={toggleHandler} />
        {toggle && toggleMenu}
      </div>
    </div>
  );
};

export default Navbar;
