import { 
    LANG_NUMBER
     } from "../types";

const initialState = {
    langNumber: 0,
};
export const intLangReducer = (state = initialState, action) => {
switch (action.type) {
    case LANG_NUMBER: return { ...state, langNumber: action.payload }
    default: return state
}
return state; 
};

