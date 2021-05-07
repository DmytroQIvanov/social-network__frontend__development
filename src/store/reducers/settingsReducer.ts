import {UserState} from "../../types/user";
import {SettingsAction, SettingsActionsTypes} from "../../types/settings";
import axios from "axios";
import {useFetch} from "../../hooks/useFetch";

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

const Dd =async()=>{
    let d = await useFetch('http://localhost:8080/user/6092ceb13e736344e0bc54de',"GET");
    initialState.user = d;

}
Dd();

export const settingsReducer = (state = initialState,action:SettingsAction) : UserState =>{
    switch (action.type) {
        case SettingsActionsTypes.FETCH_SETTINGS:
            return {loading:true,user:initialState.user,error:null}

        case SettingsActionsTypes.FETCH_SETTINGS_SUCCESS:
            return {loading:false,user:action.payload,error:null}

        case SettingsActionsTypes.FETCH_SETTINGS_ERROR:
            return {loading:false,user:initialState.user,error:action.payload}

        default:
            return state
    }
}