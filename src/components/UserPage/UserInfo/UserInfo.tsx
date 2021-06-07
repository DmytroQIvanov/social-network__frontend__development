import React, {useEffect, useState} from 'react';
import userPhotoTest from '../../../img/pexels-photo-614810.jpeg'
import add from './img/add.png'
import './UserInfo.sass'
import AddImg from "../../Modal-panels/AddImg/AddImg";
import {useActions2, useAuth} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";


const UserInfo = (props:any) => {
    const {user,owner,setModalPanel,modalPanel} = props


    const {fetchUser}= useActions2()



    const {error,loading} = useTypedSelector(state => state.user)


    return (
        <div className='user-info'>

            <div className='user-info__photo-container'>
                <img src={user.userImage} className='user-info__photo'/>
                <img src={add} className='user-info__plus' onClick={()=>{setModalPanel(!modalPanel)}}/>

            </div>
            <div className='user-info__data'>
                <div className='user-info__full-name'>
                    <span>{user.firstName}</span>
                    <span>{user.lastName}</span>
                </div>
                <div>Age: {user.age}</div>
                <div>Country: {user.country}</div>
                <div>City: {user.city}</div>
                <div>Email: {user.email}</div>
            </div>
            <div>
            {!owner &&
            <button
                disabled={user.requestIsSend}
                onClick={()=>fetchUser(`friend-request/${user.id}`,'POST')}
            >
                {user.requestIsSend?
                    <span>U already send request</span>
                    :<span>Add friend</span>}
            </button>}
            </div>
        <div>
            {!owner && <button>Send a message</button>}
        </div>
        </div>
    );
};

export default UserInfo;