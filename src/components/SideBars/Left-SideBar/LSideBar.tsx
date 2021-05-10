import React from 'react';
import './LSideBar.sass'
import {Link} from "react-router-dom";
import {useLogOut} from "../../../hooks/useActions";

const LSideBar = () => {
    const {logOut}= useLogOut();

    return (
        <div className='lside-bar'>
            <Link className='lside-bar__side-icon' to="/user">
                icon <span>My page</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                icon <span>Friends</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                icon <span>Photos</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                icon <span>Videos</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                icon <span>Music</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                icon <span>Messages</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                icon <span>Groups</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/settings">
                icon <span>Settings</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                icon <span>Games</span>
            </Link>

            <button className='lside-bar__log-out-button'onClick={()=>logOut()}>Log Out</button>

        </div>
    );
};

export default LSideBar;