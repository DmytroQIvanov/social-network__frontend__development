import {SettingsAction, SettingsActionsTypes} from "../../types/settings";
import {Dispatch} from "redux";
import {useFetch} from "../../hooks/useFetch";


export const changeSetting = (url:string,data:any) =>{
    return async (dispatch :Dispatch<SettingsAction>)=>{
        try{
            dispatch({type:SettingsActionsTypes.FETCH_SETTINGS})
            const response = await useFetch(url,"PATCH",data);
            dispatch({type:SettingsActionsTypes.FETCH_SETTINGS_SUCCESS,payload:response})
        }catch (e) {
            dispatch({type:SettingsActionsTypes.FETCH_SETTINGS_ERROR,payload:e})
        }
    }
}