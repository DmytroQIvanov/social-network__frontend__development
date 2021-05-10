import {Dispatch} from "redux";
import {AuthAction, AuthActionsTypes} from "../../types/auth";


export const logOut =()=>{
    return async (dispatch: Dispatch<AuthAction>)=> {
        localStorage.setItem('token','')
        console.log('logOut')

        dispatch({type: AuthActionsTypes.FETCH_AUTH_LOGOUT})
}
}