export interface Iuser {
    firstName: string | null;
    lastName: string | null;
    age: string | null;
    email: string | null;
    password: string | null;
    country: string | null;
    city: string | null;

}
export interface UserState {
    user:Iuser;
    loading:boolean;
    error: null | string
}
export enum UserActionsTypes{
    FETCH_USER='FETCH_USER',
    FETCH_USER_SUCCESS='FETCH_USER_SUCCESS',
    FETCH_USER_ERROR='FETCH_USER_ERROR',
}

interface FetchUserAction {
    type: UserActionsTypes.FETCH_USER
}
interface FetchUserSuccessAction {
    type: UserActionsTypes.FETCH_USER_SUCCESS
    payload: Iuser
}
interface FetchUserErrorAction {
    type: UserActionsTypes.FETCH_USER_ERROR
    payload:string
}

export type UserAction =FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction
