import React from 'react';
import './LSideBar.sass'
import {Link} from "react-router-dom";
import {useLogOut} from "../../../hooks/useActions";
import home from './img/home.png'
import friends from './img/friends.png'
import games from './img/games.png'
import logout from './img/logout.png'
import settings from './img/settings.png'
import photos from './img/gallery.png'
import messages from './img/conversation.png'
import groups from './img/group.png'
import music from './img/sound.png'
import videos from './img/youtube.png'


const LSideBar = () => {
    const {logOut}= useLogOut();

    return (
        <div className='lside-bar'>
            <Link className='lside-bar__side-icon' to="/user">
                <img src={home}/> <span>My page</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/friends">
                <img src={friends}/> <span>Friends</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                <img src={photos}/> <span>Photos</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                <img src={videos}/> <span>Videos</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                <img src={music}/> <span>Music</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                <img src={messages}/> <span>Messages</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/users">
                <img src={groups}/> <span>Groups</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/settings">
                <div className='lside-bar__settings'><img src={settings} className=''/></div> <span>Settings</span>
            </Link>

            <Link className='lside-bar__side-icon' to="/lol">
                <img src={games}/> <span>Games</span>
            </Link>
            <Link className='lside-bar__side-icon' to='/logout'>
            <img src={logout} onClick={()=>logOut()}/> <span>Log out</span>
            </Link>

        </div>
    );
};

export default LSideBar;