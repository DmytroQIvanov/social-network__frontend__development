import React from 'react';

const UserInfo = (props:any) => {
    const {user} = props
    return (
        <div>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.age}</div>
            <div>{user.country}</div>
            <div>{user.city}</div>
            <div>{user.email}</div>
        </div>
    );
};

export default UserInfo;