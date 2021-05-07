import {Dispatch} from "redux";
import {AuthAction, AuthActionsTypes} from "../../types/auth";


export const logOut =()=>{
    return async (dispatch: Dispatch<AuthAction>)=> {
    dispatch({type: AuthActionsTypes.FETCH_AUTH_LOGOUT})
}
}