import {Iuser} from "./user";

export interface UserState {
    user:Iuser;
    loading:boolean;
    error: null | string
}
export enum SettingsActionsTypes{
    FETCH_SETTINGS='FETCH_SETTINGS',
    FETCH_SETTINGS_SUCCESS='FETCH_SETTINGS_SUCCESS',
    FETCH_SETTINGS_ERROR='FETCH_SETTINGS_ERROR',
}

interface FetchSettingsAction {
    type: SettingsActionsTypes.FETCH_SETTINGS
}
interface FetchSettingsSuccessAction {
    type: SettingsActionsTypes.FETCH_SETTINGS_SUCCESS
    payload: Iuser
}
interface FetchSettingsErrorAction {
    type: SettingsActionsTypes.FETCH_SETTINGS_ERROR
    payload:string
}

export type SettingsAction =FetchSettingsAction | FetchSettingsSuccessAction | FetchSettingsErrorAction
