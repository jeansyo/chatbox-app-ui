import { types } from "../types/types";

export const _messageSetAlert = (payload) => ({
    type: types.messageSetAlert,
    payload
})

export const _messageRemoveAlert = () => ({
    type: types.messageRemoveAlert
})

export const _messageSetMessages = (payload) => ({
    type: types.messageSetMessages,
    payload
})

export const _messageRemoveMessages = () => ({
    type: types.messageRemoveMessages
})