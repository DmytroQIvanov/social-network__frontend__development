import React, {useEffect, useState} from 'react';
import {stat} from "fs";
import axios from "axios";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions, useAuth} from "../../hooks/useActions";
import {Link} from 'react-router-dom'

const Login = () => {
    const [state,setState] = useState({email:"",password:''})

    const {auth,error,loading} = useTypedSelector(state => state.auth)
    const {fetchAuth}= useAuth()
    console.log(auth)

    return (
        <div>
            LOGIN
            <div>
            <Link to='/register'>U have not account?</Link>
            </div>

            <div>
                <span>email</span>
            <input onChange={
                (e)=>setState({email: e.target.value,password: state.password})
            }
            value={state.email}
            name='email'/>
            </div>
            <div>
                <span>password</span>
            <input onChange={
                (e)=>setState({email: state.email,password: e.target.value})
            }
                   value={state.password}
            name='password'/>
            </div>
            <button onClick={
                () =>{
                fetchAuth(`auth/login`,state,true)
                    console.log(state)
                }
            }>Send</button>
        </div>
    );
};

export default Login;