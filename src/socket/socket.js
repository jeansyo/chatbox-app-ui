import io from 'socket.io-client';
const token = localStorage.getItem("token-access") || ''

export const socket = io(process.env.REACT_APP_SOCKET_CNN, {
    'extraHeaders':{
        'x-token': token
    }
})