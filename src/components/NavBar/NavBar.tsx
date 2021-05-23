import React, {useState} from 'react';
import './NavBar.sass'
import logo from './img/slack.png'
import alarm from './img/alarm.png'
import Notifications from "../Notifications/Notifications";

const NavBar = (props:any) => {
    const {user} = props
    const [notifications,setNotifications] =useState(false)
    console.log(user)

    return (
        <div className='nav-bar'>

            <div><img src={logo}/></div>

            <div></div>
            <div className='nav-bar__notifications'>

            <img src={alarm} onClick={()=>{setNotifications(!notifications)}}/>
            {
            user.notifications.length>=1&&
            <span className='nav-bar__notifications-count'>{user.notifications.length}</span>
            }
            {notifications  &&
                <div className='nav-bar__-notifications-modal'><Notifications notifications={user.notifications}/></div>
            }

            </div>

            <div className='nav-bar__user'>
                <span>{user.firstName} {user.lastName}</span>
                <img src={user.userImage}/>
            </div>

        </div>
    );
};

export default NavBar;