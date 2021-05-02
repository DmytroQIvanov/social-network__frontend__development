import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import Loader from "./Loader/Loader";

const UserList = () => {
    const {users,error,loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(fetchUsers())},[])
    if(loading){
        return <Loader/>
    }
    if(error){

        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user=>(
                <div>
                    {user.name}
            </div>))}
        </div>
    );
};

export default UserList;