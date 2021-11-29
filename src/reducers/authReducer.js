import { types } from "../types/types";

const initialState = {
    user: null,
    checked: false
}

export const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                user: action.payload  
            }

        case types.authLogout:
            return {
                ...state,
                user: null
            }
        
        case types.authStartChecking:
            return{
                ...state,
                checked: true
            }

        case types.authEndChecking:
            return {
                ...state,
                checked: false
            }
    
        default:
            return state;
    }

}
