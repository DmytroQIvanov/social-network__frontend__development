import React from 'react';
import './Notifications.sass'

const Notifications = (props:{notifications:[{content:string}]}) => {
    const {notifications} = props;
    return (
        <div className='notifications'>
            {notifications.length>=1
                ? <>{notifications?.map(elem=>(<div>{elem.content}</div>))}</>
                : <>Nothing</>}




        </div>
    );
};

export default Notifications;