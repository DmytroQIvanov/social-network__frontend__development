import React from 'react';
import UserList from "./components/UserList/UserList";
import Rout from "./components/Rout";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>

        <div>
            <Rout/>
        </div>
            </BrowserRouter>

            );
};

export default App;