import {AuthAction, AuthActionsTypes, AuthState} from "../../types/auth";

export const initialState:AuthState ={
    auth:false,
    error:null,
    loading:false,
}



export const authReducer =(state=initialState,action:AuthAction):AuthState=>{
    switch (action.type) {
        case AuthActionsTypes.FETCH_AUTH:
            return {loading:true,auth:false,error:null}


        case AuthActionsTypes.FETCH_AUTH_SUCCESS:
            console.log(action.payload)
            return {loading:false,auth:action.payload.auth,error:null}

        case AuthActionsTypes.FETCH_AUTH_ERROR:
            return {loading:false,auth:false,error:action.payload}


        case AuthActionsTypes.FETCH_AUTH_LOGOUT:
            return {loading:false,auth:false,error:null}

        default:


            return state
    }
}