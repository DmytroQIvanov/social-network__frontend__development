import {Dispatch} from "redux";
import axios from "axios";
import {AuthAction, AuthActionsTypes} from "../../types/auth";
import {useFetch} from "../../hooks/useFetch";


export const fetchAuth =(url:string,data:any)=>{
    return async (dispatch: Dispatch<AuthAction>)=>{
        try {

            dispatch({type: AuthActionsTypes.FETCH_AUTH})
            console.log("response")

            const response= await useFetch(url,"POST",data)
            console.log(response)
            dispatch({type:AuthActionsTypes.FETCH_AUTH_SUCCESS,payload: response})

            // localStorage.setItem('token',response.access_token)
        }catch (e) {
            dispatch({type: AuthActionsTypes.FETCH_AUTH_ERROR,payload:'error'})

        }
    }
}