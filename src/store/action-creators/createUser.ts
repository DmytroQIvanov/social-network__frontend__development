
import {Dispatch} from "redux";
import {AuthAction, AuthActionsTypes} from "../../types/auth";
import {useFetch} from "../../hooks/useFetch";


export const createUser =(data:any)=>{
    return async (dispatch: Dispatch<AuthAction>)=>{
        try {


            const response= await useFetch('new-user',"POST",data)
        }catch (e) {

        }
    }
}