import React, {useEffect, useState} from 'react';
import {BrowserRouter,Router,Route, Redirect,Switch} from "react-router-dom";
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

const history = createBrowserHistory();

const Rout = () => {

    const {auth,error,loading,id} = useTypedSelector(state => state.auth)

    const {fetchAuth}= useAuth()
    useEffect(()=>{fetchAuth('auth/check',{})},[])

    if(auth){
    return (
        <Router history={history}>
            <NavBar/>
            <div className='rout'>
                <LSideBar/>

                <div className='rout__central-block'>
                <Switch>


                    <Route path='/user/:id'>
                        <UserPage/>
                    </Route>

                     <Route path='/settings' exact>
                         <Settings/>
                     </Route>

                    <Route path='/users'>
                        <UserList/>
                    </Route>
                    <Redirect to={`/user/${id}`}/>
                </Switch>

                </div>
                <RSideBar/>
            </div>

        </Router>

    )}
    else if(loading==false){
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

