import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/Routes";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavbar } from "./useNavbar";
import { NavbarContainer, LogoContainer, LinksContainer, ThemeToggleContainer, Checkbox, CheckboxLabel, Ball } from "./styles";

const Navbar = () => {
  const { handleThemeToggle, getLogoIcon, isDarkMode } = useNavbar();

  return (
    <NavbarContainer isDarkMode={isDarkMode}>
      <LogoContainer>{getLogoIcon()}</LogoContainer>
      <LinksContainer>
        <Link isDarkMode={isDarkMode} to={routes.home}>Home</Link>
        <Link isDarkMode={isDarkMode} to={routes.favs}>Favs</Link>
        <Link isDarkMode={isDarkMode} to={routes.contact}>Contact</Link>
      </LinksContainer>
      <ThemeToggleContainer>
        <Checkbox type="checkbox" onChange={handleThemeToggle}/>
        <CheckboxLabel htmlFor="checkbox">
          {!isDarkMode && <i className="fas fa-moon" style={{ color: "black" }}></i>}
          {isDarkMode && <i className="bi bi-sun" style={{ color: "white" }}></i>}
          <Ball isDarkMode={isDarkMode}></Ball>
        </CheckboxLabel>
        </ThemeToggleContainer>
    </NavbarContainer>
  );
};

export default Navbar;
