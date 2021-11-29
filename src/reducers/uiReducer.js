import { types } from "../types/types";

const initialState = {
    screen: false,
    interface: false
}

export const uiReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.uiStartLoadingScreen:
            return {
                ...state,
                screen: true
            }

        case types.uiEndLoadingScreen: 
            return {
                ...state, 
                screen: false
            }

        case types.uiStartLoadingInterface:
            return {
                ...state,
                interface: true
            }

        case types.uiEndLoadingInterface:
            return {
                ...state,
                interface: false
            }

        default:
            return state;
    }

}
