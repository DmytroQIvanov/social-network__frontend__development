import {Dispatch} from "redux";
import {AuthAction, AuthActionsTypes} from "../../types/auth";
import {useFetch} from "../../hooks/useFetch";


export const fetchAuth =(url:string,data?:any,saveLocal:boolean=false)=>{
    return async (dispatch: Dispatch<AuthAction>)=>{
        try {

            dispatch({type: AuthActionsTypes.FETCH_AUTH})
            const response= await useFetch(url,"POST",data)
            dispatch({
                type:AuthActionsTypes.FETCH_AUTH_SUCCESS,
                payload: response,
                id:response.id,
                user:response.user,
                message:response.message})
            if(saveLocal){localStorage.setItem('token',response.access_token)}
        }catch (e) {
            console.log(e)
            dispatch({type: AuthActionsTypes.FETCH_AUTH_ERROR,payload:e,id:null,user:null})

        }
    }
}