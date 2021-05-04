import {Dispatch} from "redux";
import axios from "axios";
import {UserAction,UserActionsTypes} from "../../types/user";


export const fetchUser =(url:string)=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try {
            dispatch({type: UserActionsTypes.FETCH_USER})
            const response = await axios.get(url);
            dispatch({type:UserActionsTypes.FETCH_USER_SUCCESS,payload: response.data})
        }catch (e) {
            dispatch({type: UserActionsTypes.FETCH_USER_ERROR,payload:'error'})

        }
    }
}