import React, {useEffect, useState} from 'react';
import {BrowserRouter, Router, Route, Redirect, Switch, useParams} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Login from "./Login/Login";
import UserPage from "./UserPage/UserPage";
import Register from "./Register/Register";
import UserList from "./UserList/UserList";
import Settings from "./Settings/Settings";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions, useAuth} from "../hooks/useActions";
import LSideBar from "./SideBars/Left-SideBar/LSideBar";
import NavBar from "./NavBar/NavBar";
import './Rout.sass'
import RSideBar from "./SideBars/Right-SideBar/RSideBar";
import Loader from "./Loader/Loader";
import Friends from "./Friends/Friends";

const history = createBrowserHistory();

const Rout = () => {

    const {auth,error,loading,id,user} = useTypedSelector(state => state.auth)
    const Params : {id:string}= useParams()

    const {fetchAuth}= useAuth()

    useEffect(()=>{
        if(localStorage.getItem('token')){fetchAuth('auth')}
        },[Params.id])

    if(auth){
    return (
        <Router history={history}>
            <NavBar user={user}/>
            <div className='rout'>
                <LSideBar/>
                <div className='rout__central-block'>
                <Switch>


                    <Route path='/user/:id' >
                        <UserPage/>
                    </Route>

                    <Route path='/friends' >
                        <Friends/>
                    </Route>

                     <Route path='/settings' exact>
                         <Settings/>
                     </Route>

                    <Route path='/users' exact>
                        <UserList/>
                    </Route>
                    <Redirect to={`/user/${id}`} />
                </Switch>

                </div>
                <RSideBar/>
            </div>

        </Router>

    )}
    else if(loading==false ){
        return (
                <Router history={history}>
                    <Switch>
                    <Route path='/login'>
                        <Login/>
                    </Route>

                    <Route path='/register'>
                        <Register/>
                    </Route>

                    <Redirect to='/login'/>
                    </Switch>
                </Router>
        )
    }else {
        return (
            <div><Loader/></div>
        )
    }
};

export default Rout;

