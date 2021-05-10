import React, {useEffect, useState} from 'react';
import Loader from "../Loader/Loader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions, useActions2, useActionSettings} from "../../hooks/useActions";
import './Settings.sass'

const Settings = () => {
    const {fetchUser}= useActions2()
    useEffect(()=>{fetchUser(`user`)},[])
    const {user,error,loading} = useTypedSelector(state => state.user)

    const [state,setState] = useState('')
    const [setting,setSetting] = useState('')

    const {changeSetting}= useActionSettings()
    return (
        <div className="settings">

            {loading&&<Loader/>}
            <ul>
                <div className='settings__setting'>setting: <span>{setting}</span> </div>
                <li onClick={()=>setSetting('firstName')} >First Name : {user.firstName}</li>
                <li onClick={()=>setSetting('lastName')} >Last Name : {user.lastName}</li>
                <li onClick={()=>setSetting('age')} >Age : {user.age}</li>
                <li onClick={()=>setSetting('country')} >Country : {user.country}</li>
                <li onClick={()=>setSetting('city')} >City : {user.city}</li>
            </ul>
            <input onChange={(e)=>setState(e.target.value)} value={state}/>
            <button onClick={()=>{
                changeSetting('user',{[setting]:state})
                fetchUser(`user`);
            }}>Send</button>
        </div>
    );
};

export default Settings;