import {UserState} from "../../types/user";
import {SettingsAction, SettingsActionsTypes} from "../../types/settings";
import axios from "axios";

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
    let d = await axios.get('http://localhost:8080/user/609051b8bd9d5a311022f6da');
    initialState.user = d.data;

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