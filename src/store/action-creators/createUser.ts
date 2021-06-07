
import {Dispatch} from "redux";
import {AuthAction, AuthActionsTypes} from "../../types/auth";
import {useFetch} from "../../hooks/useFetch";


export const createUser =(data:any)=>{
    return async (dispatch: Dispatch<AuthAction>)=>{
        try {

            dispatch({type: AuthActionsTypes.FETCH_AUTH})
            const response= await useFetch('user',"POST",data)

            dispatch({type:AuthActionsTypes.FETCH_AUTH_SUCCESS,
                payload: response,
                id:response.id,
                user:response,
                message:response.message}
            )


        }catch (e) {
            dispatch({type: AuthActionsTypes.FETCH_AUTH_ERROR,payload: e,id:null,user:null})


        }
    }
}