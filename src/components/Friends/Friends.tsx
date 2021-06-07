import React, {useEffect} from 'react';
import "./Friends.sass"
import {useAuth, useFriends} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Loader from "../Loader/Loader";
import {Link} from "react-router-dom";
import accept from './img/tick.png'
import rejected from './img/rejected.png'

const Friends = () => {
    const {fetchFriends}= useFriends()
    useEffect(()=>{fetchFriends('friends','GET')},[])
    const {data,error,loading} = useTypedSelector(state => state.friends)
    return (
        <div className={'friends'}>
            <button onClick={()=>{console.log(data)}}>D</button>
            {
                loading?
                    <Loader/>
                    :
                    <>
                        <h2>
                            Friends
                        </h2>

                        {/*{data.friends.map(elem=>(elem?.firstName))}*/}
                        <h2>Outgoing friend requests</h2>
                        <div>
                        {data.outgoingFriendRequests.map((elem,index)=>(
                            <div className={'friends__container-request'}>
                            <Link to={`user/${elem?.id}`}>{elem?.email}</Link>

                            <img src={rejected} onClick={()=>fetchFriends(`friend-request/${data.outgoingFriendRequests[index]?.requestId}`,"DELETE")}/>
                            </div>))}
                        </div>

                        <h2>Incoming friend requests</h2>
                        {data.incomingFriendRequests.map((elem,index)=> <div className={'friends__container-request'}>
                                <Link to={`user/${elem?.id}`}>
                                {elem?.email}
                                </Link>

                                <img src={accept} onClick={()=>fetchFriends(`friends/${data.incomingFriendRequests[index]?.requestId}`,"POST")}/>
                                <img src={rejected} onClick={()=>fetchFriends(`friend-request/${data.incomingFriendRequests[index]?.requestId}`,"DELETE")}/>

                                </div>)}


                    </>}
            </div>
    );
};

export default Friends;