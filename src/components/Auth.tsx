import React, {useState} from 'react';
import {BrowserRouter,Router,Route, Redirect,Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Login from "./Login/Login";
import UserPage from "./UserPage/UserPage";
import Register from "./Register/Register";
import UserList from "./UserList/UserList";
import Settings from "./Settings/Settings";

const history = createBrowserHistory();

const Auth = () => {
    const [auth,setAuth] =useState(true);
    if(auth){
    return (
        <Router history={history}>
            <Switch>
                    <Route path='/home' exact>
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

                    <Redirect to='/home'/>
            </Switch>
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

export default Auth;

