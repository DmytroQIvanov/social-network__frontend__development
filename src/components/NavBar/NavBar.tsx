import React from 'react';
import './NavBar.sass'

const NavBar = () => {
    return (
        <div className='nav-bar'>

        <div>LOGO</div>
        <div></div>
        <div>USER</div>
        <div>notifications</div>
            <div className='nav-bar__user'>
                <div>USER-NAME</div>
                <div>USER-IMAGE</div>
            </div>

        </div>
    );
};

export default NavBar;