
export interface UsersState {
    users:any[];
    loading:boolean;
    error: null | string;
}
export enum UsersActionsTypes {
    FETCH_USERS ="FETCH_USERS",
    FETCH_USERS_SUCCESS ="FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR ="FETCH_USERS_ERROR"
}
interface FetchUserAction {
    type: UsersActionsTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
    type:UsersActionsTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUserErrorAction {
    type:UsersActionsTypes.FETCH_USERS_ERROR;
    payload:string;
}
export type  UsersAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction
