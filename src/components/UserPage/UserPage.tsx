import React, {useEffect, useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import {useActions2, useAuth} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Loader from "../Loader/Loader";
import "./UserPage.sass"
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./UserPosts/Posts";


const UserPage = () => {
    const Params : {id:string}= useParams()
    const {fetchUser}= useActions2()

    useEffect(()=>{
            fetchUser(`user/${Params.id}`)
    },[Params.id])

    const {id} = useTypedSelector(state => state.auth)
    const {fetchAuth}= useAuth()

    const {user,error,loading} = useTypedSelector(state => state.user)

    return (
        <div>
            {loading
                ? <Loader/> :
                <><Link to='/users'>Back to users</Link>
                    {id==Params.id&&<div>
                        <input/>
                        <button/>
                    </div>}
                    <UserInfo user={user}/>
                    <Posts posts={user.posts}/>
                </>
            }
        </div>
    );
}

export default UserPage;