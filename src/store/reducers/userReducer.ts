import {UserAction, UserActionsTypes, UserState} from "../../types/user";

const initialState: UserState = {
    user:{
        firstName: null,
        lastName: null,
        age: null,
        email: null,
        password: null,
        country: null,
        city: null,
    },
    loading:false,
    error:null
}

export const userReducer = (state = initialState,action:UserAction) : UserState =>{
    switch (action.type) {
        case UserActionsTypes.FETCH_USER:
            return {loading:true,user:initialState.user,error:null}

        case UserActionsTypes.FETCH_USER_SUCCESS:
            return {loading:false,user:action.payload,error:null}

        case UserActionsTypes.FETCH_USER_ERROR:
            return {loading:false,user:initialState.user,error:action.payload}

        default:
            return state
    }
}