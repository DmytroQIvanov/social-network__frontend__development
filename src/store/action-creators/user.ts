import {Dispatch} from "redux";
import {UserAction,UserActionsTypes} from "../../types/user";
import {useFetch} from "../../hooks/useFetch";


export const fetchUser =(url:string,method="GET",data?:any)=>{
    return async (dispatch: Dispatch<UserAction>)=>{
        try {
            dispatch({type: UserActionsTypes.FETCH_USER})
            const response = await useFetch(url,method,data)
            console.log(response)
            dispatch({type:UserActionsTypes.FETCH_USER_SUCCESS,payload: response})
        }catch (e) {
            console.log(e)
            dispatch({type: UserActionsTypes.FETCH_USER_ERROR,payload:e})

        }
    }
}