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

const history = createBrowserHistory();

const Rout = () => {

    const {auth,error,loading} = useTypedSelector(state => state.auth)
    const {fetchAuth}= useAuth()


    if(auth){
    return (
        <Router history={history}>
            <NavBar/>
            <div className='rout'>
                <LSideBar/>

                <Switch>
                    <Route path='/user' exact>
                        <UserPage/>
                    </Route>


                    <Route path='/user/:id'>
                        <UserPage/>
                    </Route>

                     <Route path='/settings' exact>
                         <Settings/>
                     </Route>

                    <Route path='/users'>
                        <UserList/>
                    </Route>
                    <Redirect to='/user' />


                </Switch>
                <RSideBar/>
            </div>

        </Router>

    )}
    else{
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
    }
};

export default Rout;

