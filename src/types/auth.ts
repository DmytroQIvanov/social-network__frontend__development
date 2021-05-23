import {Iuser} from "../interfaces/IUser";

export interface IAuth{

}


export interface AuthState{
    auth:boolean;
    loading:boolean;
    error: null|{message:string};
    id:string | null;
    user:Iuser |null;
}
export enum AuthActionsTypes{
    FETCH_AUTH='FETCH_AUTH',
    FETCH_AUTH_SUCCESS='FETCH_AUTH_SUCCESS',
    FETCH_AUTH_ERROR='FETCH_AUTH_ERROR',

    FETCH_AUTH_LOGOUT='FETCH_AUTH_LOGOUT',
}

interface FetchAuthAction {
    type:AuthActionsTypes.FETCH_AUTH
}

interface FetchAuthSuccessAction{
    type:AuthActionsTypes.FETCH_AUTH_SUCCESS,
    payload:{access_token:string|null,auth:boolean},
    id:string,
    user:Iuser
}
interface FetchAuthErrorAction{
    type:AuthActionsTypes.FETCH_AUTH_ERROR
    payload: { message:string }
}

interface AuthLogOut{
    type:AuthActionsTypes.FETCH_AUTH_LOGOUT
}
export type AuthAction = FetchAuthAction|FetchAuthSuccessAction|FetchAuthErrorAction | AuthLogOut

