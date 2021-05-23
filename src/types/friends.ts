import {Iuser} from "../interfaces/IUser";


export interface FriendsState {
    data:{friends:[Iuser |null],outgoingFriendRequests:[{email:string,id?:string,requestId:string}|null],incomingFriendRequests:[{email:string,id?:string,requestId:string}|null]} ;
    loading:boolean;
    error: null | string
}
export enum FriendsActionsTypes{
    FETCH_FRIENDS='FETCH_FRIENDS',
    FETCH_FRIENDS_SUCCESS='FETCH_FRIENDS_SUCCESS',
    FETCH_FRIENDS_ERROR='FETCH_FRIENDS_ERROR',
}



interface FetchFriendsSuccessAction {
    type: FriendsActionsTypes.FETCH_FRIENDS_SUCCESS
    payload:{friends:[Iuser],outgoingFriendRequests:[{email:string,id:string,requestId:string}],
        incomingFriendRequests:[{email:string,id:string,requestId:string}]} ;

}
interface FetchUserErrorAction {
    type: FriendsActionsTypes.FETCH_FRIENDS_ERROR
    payload:string
}
interface FetchFriendsAction {
    type: FriendsActionsTypes.FETCH_FRIENDS
}

export type FriendsAction =FetchFriendsAction| FetchUserErrorAction |FetchFriendsSuccessAction
