import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as usersActionCreators from '../store/action-creators/users'
import * as userActionCreators from '../store/action-creators/user'
import * as changeSetting from "../store/action-creators/settings";
import * as fetchAuth from "../store/action-creators/auth";
import * as logOut2 from "../store/action-creators/logOut";
import * as createUser from "../store/action-creators/createUser";

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
export const useAuth =()=>{
    const dispatch = useDispatch()
    return bindActionCreators(fetchAuth,dispatch)
}


export const useLogOut =()=>{
    const dispatch = useDispatch()
    return bindActionCreators(logOut2,dispatch)
}


export const useCreateNewUser =()=>{
    const dispatch = useDispatch()
    return bindActionCreators(createUser,dispatch)
}