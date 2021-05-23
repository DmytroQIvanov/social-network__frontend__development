import {UserAction, UserActionsTypes, UsersState, UserState} from "../../types/user";
import {Iuser} from "../../interfaces/IUser";

const initialState :UsersState= {
    users:[],
    loading:false,
    error:null
}

export const friendsReducer = (state = initialState,action:UserAction) : UsersState =>{
    switch (action.type) {
        case UserActionsTypes.FETCH_USER:
            return {loading:true,users:[],error:null}

        case UserActionsTypes.FETCH_USERS_SUCCESS:
            return {loading:false,users:action.payload,error:null}

        case UserActionsTypes.FETCH_USER_ERROR:
            return {loading:false,users:[],error:action.payload}

        default:
            return state
    }
}