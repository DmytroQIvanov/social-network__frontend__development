import {UserAction, UserActionsTypes, UsersState} from "../../types/user";

const initialState: UsersState = {
    users:[],
    loading:false,
    error:null
}

export const usersReducer =(state = initialState, action: UserAction) : UsersState=>{
    switch (action.type){

        case UserActionsTypes.FETCH_USER:
            return {loading:true,error:null,users:[]}

        case UserActionsTypes.FETCH_USERS_SUCCESS:
            return {loading:false,error:null,users:action.payload}

        case UserActionsTypes.FETCH_USER_ERROR:
            return {loading:false,error:action.payload,users:[]}

        default:
            return state
    }
}
