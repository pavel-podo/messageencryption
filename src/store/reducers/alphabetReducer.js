import {
    ALPHABET_NUMBER
} from "../types";

const initialState = {
    alphabetNumber: 0,
};
export const alphabetReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALPHABET_NUMBER: return { ...state, alphabetNumber: action.payload }
        default: return state
    }
    return state;
};

