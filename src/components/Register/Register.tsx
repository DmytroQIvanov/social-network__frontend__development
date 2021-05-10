import React, {useState} from 'react';
import {Iuser} from "../../types/user";
import {Link} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {useActions2, useCreateNewUser} from "../../hooks/useActions";
import {createUser} from "../../store/action-creators/createUser";

interface firstName {
    value:"firstName",
    name:string
}
type La = "firstName";

const Register = () => {
    const {createUser}= useCreateNewUser()

    const [regState,setRegState] = useState(
        {firstName:"",lastName:"",age:"",email:"",password:"",country:"",city:""}
    )


    const regDataHandler =(elem:React.ChangeEvent<HTMLInputElement>)=>{
        setRegState({...regState,[elem.target.name]:elem.target.value})
    }
    const sendData =()=>{
        // useFetch('user',"POST",regState)

    }
    return (
        <div>
            <div>
                <div><Link to='/login'>Login</Link></div>
                <span>firstName</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='firstName' value={regState.firstName}></input>
            </div>
            <div>
                <span>lastName</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='lastName' value={regState.lastName}></input>
            </div>
            <div>
                <span>age</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='age' value={regState.age}></input>
            </div>
            <div>
                <span>email *</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='email' value={regState.email}></input>
            </div>
            <div>
                <span>password *</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='password' value={regState.password}></input>
            </div>
            <div>
                <span>country</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='country' value={regState.country}></input>
            </div>
            <div>
                <span>city</span>
                <input onChange={(e)=>
                    regDataHandler(e)
                } name='city' value={regState.city}></input>
            </div>
            {/*<div>*/}
            {/*    <span>firstName</span>*/}
            {/*    <input onChange={(e)=>*/}
            {/*        regDataHandler(e)*/}
            {/*    } name='firstName' value={regState.firstName.value}></input>*/}
            {/*</div>*/}
            <button onClick={()=>{
                createUser(regState)
            }}></button>
        </div>
    );
};

export default Register;