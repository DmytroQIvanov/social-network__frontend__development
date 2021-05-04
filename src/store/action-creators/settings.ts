import {SettingsAction, SettingsActionsTypes} from "../../types/settings";
import {Dispatch} from "redux";
import axios from "axios";


export const changeSetting = (url:string,data:any) =>{
    return async (dispatch :Dispatch<SettingsAction>)=>{
        try{
            dispatch({type:SettingsActionsTypes.FETCH_SETTINGS})
            const response = await axios.patch(url,data);
            dispatch({type:SettingsActionsTypes.FETCH_SETTINGS_SUCCESS,payload:response.data})
        }catch (e) {
            dispatch({type:SettingsActionsTypes.FETCH_SETTINGS_ERROR,payload:'error'})
        }
    }
}