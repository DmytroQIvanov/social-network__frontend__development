import React, {useEffect, useState} from 'react';
import Loader from "../Loader/Loader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions, useActions2, useActionSettings} from "../../hooks/useActions";
import {useParams} from "react-router-dom";

const Settings = () => {


        // const D : {id:string}= useParams()
    const D = {id:"609051b8bd9d5a311022f6da"};
        const {fetchUser}= useActions2()
    let F = useTypedSelector(state => state.user)


    useEffect(()=>{fetchUser(`http://localhost:8080/user/${D.id}`)},[])

    const [state,setState] = useState('')
    const [setting,setSetting] = useState('')

    const {user,error,loading} = useTypedSelector(state => state.settings)
    const {changeSetting}= useActionSettings()

    return (
        <div>

            {loading&&<Loader/>}
            <ul>
                <div>setting: <span>{setting}</span> </div>
                <li onClick={()=>setSetting('firstName')} >First Name : {user.firstName}</li>
                <li onClick={()=>setSetting('lastName')} >Last Name : {user.lastName}</li>
                <li onClick={()=>setSetting('age')} >Age : {user.age}</li>
                <li onClick={()=>setSetting('country')} >Country : {user.country}</li>
                <li onClick={()=>setSetting('city')} >City : {user.city}</li>
            </ul>
            <input onChange={(e)=>setState(e.target.value)} value={state}/>
            <button onClick={()=>
                changeSetting('http://localhost:8080/user/609051b8bd9d5a311022f6da',{[setting]:state})
            }>Send</button>
        </div>
    );
};

export default Settings;