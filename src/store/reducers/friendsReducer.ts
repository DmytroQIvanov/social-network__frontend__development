import {FriendsAction, FriendsActionsTypes, FriendsState} from "../../types/friends";

const initialState :FriendsState= {
    data:{friends:[null],outgoingFriendRequests:[],incomingFriendRequests:[]},
    loading:false,
    error:null
}

export const friendsReducer = (state = initialState,action:FriendsAction) : FriendsState =>{
    switch (action.type) {
        case FriendsActionsTypes.FETCH_FRIENDS:
            return {loading:true,data:{friends:[null],outgoingFriendRequests:[],incomingFriendRequests:[]},error:null}

        case FriendsActionsTypes.FETCH_FRIENDS_SUCCESS:
            return {loading:false,data:action.payload,error:null}

        case FriendsActionsTypes.FETCH_FRIENDS_ERROR:
            return {loading:false,data:{friends:[null],outgoingFriendRequests:[],incomingFriendRequests:[]},error:action.payload}

        default:
            return state
    }
}