import { types } from "../types/types";

export const _userSetUsers = (payload) => ({
    type: types.userSetUsers,
    payload
})

export const _userRemoveUsers = () => ({
    type: types.userRemoveUsers,
})