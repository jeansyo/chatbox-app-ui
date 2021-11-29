import { fetchWithoutToken } from "../helpers/fetchWithoutToken";
import { fetchWithToken } from "../helpers/fetchWithToken";
import { types } from "../types/types";
import { _messageRemoveAlert, _messageRemoveMessages } from "./messageActions";
import { _userRemoveUsers } from "./userActions";

export const _authLogin = (payload) => ({
    type: types.authLogin,
    payload
})

export const __authLogin = (payload={}) => {
    return async(dispatch) => {

        try {
            
            const res = await fetchWithoutToken( "auth/login", payload, "POST");
            const body = await res.json();

            if( body.ok ){
                const { token, ...rest } = body.user;
                localStorage.setItem("token-access", token);
                dispatch( _authLogin( rest ) )

            }else {
                console.log(body)
                alert("Error in action login response ok false")
            } 

        } catch (err) {
            console.log(err);
            alert("Error in action login")
        }

    }
}


export const __authRegister = (payload={}) => {
    return async(dispatch) => {

        try {
            
            const res = await fetchWithoutToken( "auth/register", payload, "POST" );
            const body = await res.json();

            if( body.ok ){
                const { token, ...rest } = body.user;
                localStorage.setItem("token-access", token);
                dispatch( _authLogin( rest ) )

            }else {
                console.log(body)
                alert("Error in action register response ok false")
            }

        } catch (err) {
            console.log(err);
            alert("Error in action register")
        }

    }
}

export const _authLogout = () => ({
    type: types.authLogout
})

export const __authLogout = () => {
    return (dispatch) => {
        localStorage.removeItem("token-access");
        dispatch( _userRemoveUsers() )
        dispatch( _messageRemoveMessages() );
        dispatch( _messageRemoveAlert() );
        dispatch( _authLogout() );
    }
}

export const _authStartChecking = () => ({
    type: types.authStartChecking
})

export const _authEndChecking = () => ({
    type: types.authEndChecking
})

export const __authRenew = () => {
    return async(dispatch) => {

        try {
            
            dispatch( _authStartChecking() )
            
            const res = await fetchWithToken('auth/renew');
            const body = await res.json();

            if( body.ok ){
                localStorage.setItem("token-access", body.token);
                dispatch( _authLogin({ _id: body._id, name: body.name }) )
                dispatch( _authEndChecking() );
            }else {
                console.log(body)
                dispatch( _authEndChecking() );
            }

        } catch (err) {
            console.log("Error renew token auth")
            console.log(err)
            dispatch( _authEndChecking() )
        }

    }
}