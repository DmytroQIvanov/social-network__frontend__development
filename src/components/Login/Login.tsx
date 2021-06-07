import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions, useAuth} from "../../hooks/useActions";
import {Link} from 'react-router-dom'
import './Login.sass'
import Loader from "../Loader/Loader";

const Login = () => {
    const [state,setState] = useState({email:"",password:''})

    const {auth,error,loading} = useTypedSelector(state => state.auth)
    const {fetchAuth}= useAuth()
    console.log(auth)

    return (
        <div className={'login'} onKeyPress={(e)=>{if(e.code=='Enter'){fetchAuth(`login`,state,true)}}}>
            {loading&&<Loader/>}
            <div className={'login__container'}>
                <div className={'login__title'}>LOGIN
                </div>

                <div className={"login__error"}>{error?.message}</div>

            <div className={'login__input-container'}>
                <div className={'login__input-title'}>email</div>
            <input onChange={
                (e)=>setState({email: e.target.value,password: state.password})
            }
            value={state.email}
            name='email'
            className={'login__input'}
            />
            </div>


            <div className={'login__input-container'}>
                <div className={'login__input-title'}>password</div>
            <input type='password' onChange={
                (e)=>setState({email: state.email,password: e.target.value})
            }
                   value={state.password}
            name='password'
            className={'login__input'}
            />
            </div>
            <button onClick={
                () =>{
                fetchAuth(`login`,state,true)
                }
            }
            className={'login__btn'}
            >Send</button>

                <div className={'login__register-container'}>
                    <Link to='/register' className={'login__register'}>You haven't an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;