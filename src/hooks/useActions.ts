import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as usersActionCreators from '../store/action-creators/users'
import * as userActionCreators from '../store/action-creators/user'
import * as changeSetting from "../store/action-creators/settings";

export const useActions =()=>{
    const dispatch = useDispatch()
    return bindActionCreators(usersActionCreators,dispatch)
}
export const useActions2 =()=>{
    const dispatch = useDispatch()
    return bindActionCreators(userActionCreators,dispatch)
}
export const useActionSettings =()=>{
    const dispatch = useDispatch()
    return bindActionCreators(changeSetting,dispatch)
}