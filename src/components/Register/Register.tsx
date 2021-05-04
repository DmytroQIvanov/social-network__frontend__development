import React, {useState} from 'react';
import {Iuser} from "../../types/user";

interface firstName {
    value:"firstName",
    name:string
}
type La = "firstName";

const Register = () => {
    const [regState,setRegState] = useState(
        {firstName:"D",lastName:"sss",age:'',email:"",password:"",country:"",city:""}
    )


    const regDataHandler =(e:La,d:any)=>{
        // setRegState(regState.e = {...regState +d.target.value})

    }
    return (
        <div>
            <div>
                <span>firstName</span>
                <input onChange={(e)=>
                    regDataHandler('firstName',e)
                } name='firstName' value={regState.firstName}></input>
            </div>
            <div>
                <span>lastName</span>
                <input></input>
            </div>
            <div>
                <span>age</span>
                <input></input>
            </div>
            <div>
                <span>email</span>
                <input></input>
            </div>
            <div>
                <span>password</span>
                <input></input>
            </div>
            <div>
                <span>country</span>
                <input></input>
            </div>
            <div>
                <span>city</span>
                <input></input>
            </div>
            <div>
                <span>firstName</span>
                <input></input>
            </div>
        </div>
    );
};

export default Register;