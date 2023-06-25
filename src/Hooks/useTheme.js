import {useReducer} from "react";
import {THEME} from "../Components/utils/constants";

const initialState = {
    theme: THEME.LIGHT
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case THEME.LIGHT:
            return {...state, theme: THEME.LIGHT};
        case THEME.DARK:
            return {...state, theme: THEME.DARK};
        default:
            throw new Error('Invalid action type');
    }
};

export const useTheme = () => {
    const [theme, dispatchTheme] = useReducer(themeReducer, initialState);

    return {theme, dispatchTheme}
}
