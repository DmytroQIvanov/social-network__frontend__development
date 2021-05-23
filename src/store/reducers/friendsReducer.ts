import {FriendsAction, FriendsActionsTypes, FriendsState} from "../../types/friends";

const initialState :FriendsState= {
    data:{friends:[null],outgoingFriendRequests:[null],incomingFriendRequests:[null]},
    loading:false,
    error:null
}

export const friendsReducer = (state = initialState,action:FriendsAction) : FriendsState =>{
    switch (action.type) {
        case FriendsActionsTypes.FETCH_FRIENDS:
            return {loading:true,data:{friends:[null],outgoingFriendRequests:[null],incomingFriendRequests:[null]},error:null}

        case FriendsActionsTypes.FETCH_FRIENDS_SUCCESS:
            return {loading:false,data:action.payload,error:null}

        case FriendsActionsTypes.FETCH_FRIENDS_ERROR:
            return {loading:false,data:{friends:[null],outgoingFriendRequests:[null],incomingFriendRequests:[null]},error:action.payload}

        default:
            return state
    }
}