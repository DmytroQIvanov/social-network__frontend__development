import React, {useEffect, useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import {useActions2} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Loader from "../Loader/Loader";


const UserPage = () => {
    const D : {id:string}= useParams()
    const {fetchUser}= useActions2()

    useEffect(()=>{

    if(D.id){
            fetchUser(`http://localhost:8080/user/${D.id}`)
    }else {
        fetchUser(`http://localhost:8080/user`)

    }
    },[])

    // console.log(D.id)
    const {user,error,loading} = useTypedSelector(state => state.user)

    console.log(user)
    console.log(user)



    return (
        <div>
            {loading&&<Loader/>}
            <Link to='/users'>Back to users</Link>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.age}</div>
            <div>{user.country}</div>
            <div>{user.city}</div>
            <div>{user.email}</div>
        </div>
    );
}

export default UserPage;