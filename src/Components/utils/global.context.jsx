import {createContext, useEffect, useMemo, useState} from "react";
import {useFetch} from "../../Hooks/useFetch";
import {THEME} from "./constants";

export const initialState = {theme: THEME.LIGHT, data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [theme, setTheme] = useState(initialState.theme);
    const users = useFetch("https://jsonplaceholder.typicode.com/users");

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
    };

    const contextValue = useMemo(() => ({
        ...initialState,
        theme,
        data: users.data,
        toggleTheme,
    }), [theme, users.data, toggleTheme]);

    return (
        <ContextGlobal.Provider value={contextValue}>
            {children}
        </ContextGlobal.Provider>
    );
};
