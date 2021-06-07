import {UserAction, UserActionsTypes, UserState} from "../../types/user";

export const initialState: UserState = {
    user:{
        firstName: null,
        lastName: null,
        age: null,
        email: null,
        password: null,
        country: null,
        city: null,
        id:null,
        userImage:null,
        posts:[{content:undefined,dataOfCreation:undefined,changed:false}]
    },
    loading:false,
    error:{statusCode:null,message:null}
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