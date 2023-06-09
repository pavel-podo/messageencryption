import {
    THEME_NUMBER
} from "../types";

const initialState = {
    themeNumber: 0,
};
export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_NUMBER: return { ...state, themeNumber: action.payload }
        default: return state
    }
    return state;
};

