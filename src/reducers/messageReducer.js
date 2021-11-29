import { types } from "../types/types";

const intialState = {
    alert: null,
    messages: []
}

export const messageReducer = (state=intialState, action) => {
    switch (action.type) {
        case types.messageSetAlert:
            return {
                ...state,
                alert: action.payload
            }

        case types.messageRemoveAlert:
            return {
                ...state,
                alert: null
            }
        
        case types.messageSetMessages: 
            return {
                ...state,
                messages: action.payload
            }

        case types.messageRemoveMessages:
            return {
                ...state,
                messages: []
            }

        default:
            return state;
    }
}
