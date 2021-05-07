import {Dispatch} from "redux";
import axios from "axios";
import {UserAction,UserActionsTypes} from "../../types/user";
import {useFetch} from "../../hooks/useFetch";


export const fetchUser =(url:string)=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try {
            dispatch({type: UserActionsTypes.FETCH_USER})
            const response = await useFetch(url)
            dispatch({type:UserActionsTypes.FETCH_USER_SUCCESS,payload: response})
        }catch (e) {
            dispatch({type: UserActionsTypes.FETCH_USER_ERROR,payload:'error'})

        }
    }
}