import React from 'react';
import UserList from "./components/UserList/UserList";
import Auth from "./components/Auth";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>

        <div>
            <Auth/>
        </div>
            </BrowserRouter>

            );
};

export default App;