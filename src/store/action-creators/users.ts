import {UsersAction, UsersActionsTypes} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers =()=>{
    return async (dispatch: Dispatch<UsersAction>)=>{
        try {
            dispatch({type: UsersActionsTypes.FETCH_USERS})
            const response = await axios.get('http://localhost:8080/users');
            dispatch({type:UsersActionsTypes.FETCH_USERS_SUCCESS,payload: response.data})
        }catch (e) {
            dispatch({type: UsersActionsTypes.FETCH_USERS_ERROR,payload:'error'})

        }
    }
}