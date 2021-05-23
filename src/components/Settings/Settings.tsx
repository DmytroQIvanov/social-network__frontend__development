import React, {useEffect, useState} from 'react';
import Loader from "../Loader/Loader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions, useActions2, useActionSettings} from "../../hooks/useActions";
import './Settings.sass'

const Settings = () => {
    const {fetchUser} = useActions2()
    useEffect(() => {
        fetchUser(`user`)
    }, [])
    const {user, error, loading} = useTypedSelector(state => state.user)

    const [state, setState] = useState('')
    const [setting, setSetting] = useState('')

    const {changeSetting} = useActionSettings()
    const selectElem = (elem: any) => {
        setSetting(elem.target.name)
    }

    return (
        <div className="settings">

            {loading && <Loader/>}
                <div className='settings__setting' >setting: <span>{setting}</span></div>
                <button onClick={selectElem} name='firstname' className={''}>First Name : {user.firstName}</button>
                <button onClick={selectElem} name='lastName'>Last Name : {user.lastName}</button>
                <button onClick={selectElem} name='age'>Age : {user.age}</button>
                <button onClick={selectElem} name='country'>Country : {user.country}</button>
                <button onClick={selectElem} name='city'>City : {user.city}</button>
            <input onChange={(e) => setState(e.target.value)} value={state}/>
            <button onClick={() => {
                changeSetting('user', {[setting]: state})
                fetchUser(`user`);
            }}>Send
            </button>
            <div>
                <button className={'settings__delete-btn'}>Delete account</button>
            </div>
        </div>
    );
}
export default Settings;