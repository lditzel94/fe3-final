import React from "react";
import {routes} from "../utils/Routes";
import "bootstrap-icons/font/bootstrap-icons.css";
import {useNavbar} from "./useNavbar";
import {
    Ball,
    Checkbox,
    CheckboxLabel,
    LinksContainer,
    LogoContainer,
    NavbarContainer,
    StyledLink,
    ThemeToggleContainer
} from "./styles";

const Navbar = () => {
    const {handleThemeToggle, getLogoIcon, isDarkMode} = useNavbar();

    console.log("is dark mode: ", isDarkMode)
    return (
        <NavbarContainer $isDarkMode={isDarkMode}>
            <LogoContainer>{getLogoIcon()}</LogoContainer>
            <LinksContainer>
                <StyledLink $isDarkMode={isDarkMode} to={routes.home}>Home</StyledLink>
                <StyledLink $isDarkMode={isDarkMode} to={routes.favs}>Favs</StyledLink>
                <StyledLink $isDarkMode={isDarkMode} to={routes.contact}>Contact</StyledLink>
            </LinksContainer>
            <ThemeToggleContainer>
                <Checkbox id="checkbox" type="checkbox" onChange={handleThemeToggle}/>
                <CheckboxLabel htmlFor="checkbox" $isDarkMode={isDarkMode}>
                    <i className="fas fa-moon" style={{color: "black"}}></i>
                    <i className="bi bi-sun" style={{color: "white"}}></i>
                    <Ball $isDarkMode={isDarkMode}/>
                </CheckboxLabel>
            </ThemeToggleContainer>
        </NavbarContainer>
    );
};

export default Navbar;
