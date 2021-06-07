import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useActions2, useCreateNewUser} from "../../hooks/useActions";
import {createUser} from "../../store/action-creators/createUser";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './Register.sass'
import Loader from "../Loader/Loader";


const Register = () => {
    const {createUser}= useCreateNewUser()
    const {auth,error,loading,id,user,message} = useTypedSelector(state => state.auth)


    const [regState,setRegState] = useState({firstName:"",lastName:"",age:'',email:"",password:"",country:"",city:""})


    const regDataHandler =(elem:React.ChangeEvent<HTMLInputElement>)=>{
        setRegState({...regState,[elem.target.name]:elem.target.value})
    }
    return (
        <div className={'register'}>
            {loading&&<Loader/>}

            <div className={'register__container'}>
                <div className={'register__title'}>Register</div>
                <div className={'register__error'}>{error?.message}</div>
                <div className={'register__success-title'}>{message}</div>


                <div className={'register__input-container'}>
                     <span className={'register__input-title'}>firstName *</span>
                    <input onChange={(e)=>
                    regDataHandler(e)
                    } name='firstName' value={regState.firstName} className={'register__input'}
                    placeholder={'John'}></input>
                </div>
            <div>
                <div className={'register__input-container'}>

                <span className={'register__input-title'} >lastName *</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='lastName' value={regState.lastName} className={'register__input'} placeholder={'Dickerson'}></input>
                </div>
            </div>
                <div className={'register__input-container'}>

                <span className={'register__input-title'}>age</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='age' value={regState.age}
                className={'register__input'}
                       placeholder={'18'}
                ></input>
            </div>
                <div className={'register__input-container'}>

                <span className={'register__input-title'}>email *</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='email' value={regState.email}
                       className={'register__input'}></input>
            </div>
                <div className={'register__input-container'}>

                <span className={'register__input-title'}>password *</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='password' type='password'value={regState.password}
                       className={'register__input'}></input>
            </div>
                <div className={'register__input-container'}>

                <span className={'register__input-title'}>country</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='country' value={regState.country}
                       className={'register__input'}></input>
            </div>
                <div className={'register__input-container'}>

                <span className={'register__input-title'}>city</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='city' value={regState.city}
                       className={'register__input'}></input>
            </div>
                <button className={'register__btn'} onClick={()=>{
                createUser(regState)
                }}>Register</button>
                <div className={'register__login-container'}><Link to='/login' className={'register__login'}>Login</Link></div>

            </div>
        </div>
    );
};

export default Register;