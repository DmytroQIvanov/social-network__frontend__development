import {UserAction, UserActionsTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";
import {useFetch} from "../../hooks/useFetch";


export const fetchUsers =()=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try {
            dispatch({type: UserActionsTypes.FETCH_USER})
            const response = await useFetch('users',"GET")

            dispatch({type:UserActionsTypes.FETCH_USERS_SUCCESS,payload: response})
        }catch (e) {
            dispatch({type: UserActionsTypes.FETCH_USER_ERROR,payload:'error'})

        }
    }
}