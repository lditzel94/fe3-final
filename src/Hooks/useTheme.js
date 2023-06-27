import {useReducer} from "react";
import {THEME} from "../Components/utils/constants";

const themeReducer = (state, action) => {
    switch (action.type) {
        case THEME.LIGHT:
            return THEME.LIGHT
        case THEME.DARK:
            return THEME.DARK
        default:
            throw new Error('Invalid action type');
    }
};

export const useTheme = (initialState) => {
    const [theme, switchTheme] = useReducer(themeReducer, initialState);

    return [theme, switchTheme]
}
