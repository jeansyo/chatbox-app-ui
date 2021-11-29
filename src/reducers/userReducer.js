import { types } from "../types/types";

const initialState = {
    users: []
}

export const userReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.userSetUsers:
            return {
                ...state,
                users: action.payload
            }

        case types.userRemoveUsers:
            return {
                ...state,
                users: []
            }
    
        default:
            return state;
    }

}
