import {Iuser} from "../interfaces/IUser";

export interface IPost {
    content:string|undefined,dataOfCreation:string|undefined,changed:boolean|undefined

}
export interface UserState {
    user:Iuser ;
    loading:boolean;
    error: null | string
}
export interface UsersState {
    users:any[] ;
    loading:boolean;
    error: null | string
}
export enum UserActionsTypes{
    FETCH_USER='FETCH_USER',
    FETCH_USER_SUCCESS='FETCH_USER_SUCCESS',
    FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS',
    FETCH_USER_ERROR='FETCH_USER_ERROR',
}

interface FetchUserAction {
    type: UserActionsTypes.FETCH_USER
}
interface FetchUserSuccessAction {
    type: UserActionsTypes.FETCH_USER_SUCCESS
    payload: Iuser
}
interface FetchUsersSuccessAction {
    type: UserActionsTypes.FETCH_USERS_SUCCESS
    payload:any[]
}
interface FetchUserErrorAction {
    type: UserActionsTypes.FETCH_USER_ERROR
    payload:string
}

export type UserAction =FetchUserAction | FetchUserSuccessAction |FetchUsersSuccessAction | FetchUserErrorAction
