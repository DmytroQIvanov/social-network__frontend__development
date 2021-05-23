
import {Dispatch} from "redux";
import {AuthAction, AuthActionsTypes} from "../../types/auth";
import {useFetch} from "../../hooks/useFetch";


export const createUser =(data:any)=>{
    return async (dispatch: Dispatch<AuthAction>)=>{
        try {


            const response= await useFetch('user',"POST",data)
            console.log(response)
        }catch (e) {

        }
    }
}