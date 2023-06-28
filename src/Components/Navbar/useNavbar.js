import {useGlobalContext} from "../utils/global.context";
import {THEME} from "../utils/constants";
import React from "react";

export const useNavbar = () => {
    const {globalState: {theme, data}, dispatchGlobalState} = useGlobalContext()

    const handleThemeToggle = () => {
        // document.body.classList.toggle('dark');
        dispatchGlobalState({
            type: "SWITCH_THEME",
            payload: theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
        })
    };

    const getLogoIcon = () => {
        if (theme === 'light') {
            return (
                <div>
                    <i className="bi bi-caret-right-square-fill"></i>
                    <i className="bi bi-h-square"></i>
                </div>
            );
        } else if (theme === 'dark') {
            return (
                <div>
                    <i className="bi bi-caret-right-square"></i>
                    <i className="bi bi-h-square-fill"></i>
                </div>
            );
        }
        return null;
    };

    const isDarkMode = theme === THEME.DARK ? true : false

    return {handleThemeToggle, getLogoIcon, isDarkMode}
}