import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchUsers} from "../../store/action-creators/users";
import Loader from "../Loader/Loader";
import {Link} from "react-router-dom";

import {useActions} from "../../hooks/useActions";
import './UserList.sass'

const UserList : React.FC= () => {
    const {users,error,loading} = useTypedSelector(state => state.users)
    const {fetchUsers}= useActions()
    useEffect(()=>{
        fetchUsers()
    },[])
    if(loading){
        return <Loader/>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user=>(
                <div className="user-list__user">

                    <div className='user-list__username'>{user.firstName}</div>
                    <div>{user.lastName}</div>
                    <Link to={"/user/"+user.id}>{user.email}</Link>
            </div>))}
        </div>
    );
};

export default UserList;