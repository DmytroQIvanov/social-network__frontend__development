import {UserState} from "../../types/user";
import {SettingsAction, SettingsActionsTypes} from "../../types/settings";
import {useFetch} from "../../hooks/useFetch";
import {initialState} from "./userReducer";



const InitialFetch =async()=>{
    let response = await useFetch('user',"GET");
    initialState.user = response;

}
InitialFetch();

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