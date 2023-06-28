import { styled,css } from "styled-components";

export const NavbarContainer = styled.div `
    display:flex;
    alignItems: center;
    justify-content:space-between;
    padding: 1rem 2rem 1rem 2rem;
    margin-bottom:2rem;
    width: 100vw;
    background-color:var(--color-nav-fondo);
    border-bottom: 1px solid var(--color-secundario);
    transition:var(color-nav-dark) 0.5s;

    ${({ isDarkMode }) =>
    isDarkMode && css`
        background-color:var(--color-nav-dark);
        color:var(--color-texto-dark);
        `}
`

export const LogoContainer = styled.div `
    margin-right: 2rem;
`

export const LinksContainer = styled.div `
    color: var(--color-secundario);
    display: flex;
    flex-direction: row;
    gap: 2rem;
    transition: color 0.5s;
`
export const Link = styled.a `
    
    cursor: pointer;
    text-decoration:"none";
    margin:0.8rem;
    transition: color 0.5s;

    &:hover{
        color: red;
        transition: 1s;
    }
    
    ${({ isDarkMode }) =>
    isDarkMode && css`
        color:var(--color-fondo);
        `}
`
export const ThemeToggleContainer = styled.div `
    margin-left:auto;
`

export const Checkbox = styled.input`
    opacity: 0;
    position: absolute;
`

export const CheckboxLabel = styled.label`
    background-color:#111;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:black;

    ${({ isDarkMode }) =>
    isDarkMode && css`
        color:white;
        `}

`

export const Ball = styled.span`
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;

  ${({ isDarkMode }) => isDarkMode && css`
    transform:translateX(24px);
  `} 

`