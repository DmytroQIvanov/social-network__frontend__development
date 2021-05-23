import {UserAction, UserActionsTypes} from "../../types/user";
import {Dispatch} from "redux";
import {useFetch} from "../../hooks/useFetch";
import {FriendsAction, FriendsActionsTypes} from "../../types/friends";


export const fetchFriends =(url:string,method:"GET" |"POST" |"PATCH")=>{
    return async (dispatch: Dispatch<FriendsAction>)=>{
        try {
            dispatch({type: FriendsActionsTypes.FETCH_FRIENDS})
            const response = await useFetch(url,method)

            dispatch({type:FriendsActionsTypes.FETCH_FRIENDS_SUCCESS,payload: response})
        }catch (e) {
            dispatch({type: FriendsActionsTypes.FETCH_FRIENDS_ERROR,payload:'error'})

        }
    }
}