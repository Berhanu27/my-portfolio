import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={Styles.navbar}>
      <a className={Styles.title} href="/">Portfolio</a>

      <div className={Styles.menu}>
        {/* MOBILE TOGGLE BUTTON */}
        <div className={Styles.menuBtn} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU ITEMS */}
        <ul
          className={`${Styles.menuItems} ${menuOpen ? Styles.menuOpen : ""}`}
          onClick={closeMenu}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
