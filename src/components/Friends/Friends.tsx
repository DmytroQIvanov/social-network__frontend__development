import React, {useEffect} from 'react';
import "./Friends.sass"
import {useAuth, useFriends} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Loader from "../Loader/Loader";
import {Link} from "react-router-dom";
import accept from './img/tick.png'
import rejected from './img/rejected.png'
import {useFetch} from "../../hooks/useFetch";

const Friends = () => {
    const {fetchFriends}= useFriends()
    useEffect(()=>{fetchFriends('friends','GET')},[])
    console.log()
    const {data,error,loading} = useTypedSelector(state => state.friends)
    const DeclineFetch =(id?:string)=>{useFetch(`friend-request/${id}`,"DELETE")}
    const AcceptFetch =(id?:string)=>{useFetch(`friends/${id}`,"POST")}
    return (
        <div className={'friends'}>
            {
                loading?
                    <Loader/>
                    :
                    <>
                        <h2>
                            Friends
                        </h2>

                        {data.friends.map(elem=>(elem?.firstName))}
                        <h2>Outgoing friend requests</h2>
                        <div>
                        {data.outgoingFriendRequests.map((elem,index)=>(
                            <div className={'friends__container-request'}>
                            <Link to={`user/${elem?.id}`}>{elem?.email}</Link>

                            <img src={rejected} onClick={()=>DeclineFetch(data.outgoingFriendRequests[index]?.requestId)}/>
                            </div>))}
                        </div>

                        <h2>Incoming friend requests</h2>
                        {data.incomingFriendRequests.map((elem,index)=> <div className={'friends__container-request'}>
                                <Link to={`user/${elem?.id}`}>
                                {elem?.email}
                                </Link>

                                <img src={accept} onClick={()=>AcceptFetch(data.incomingFriendRequests[index]?.requestId)}/>
                                <img src={rejected} onClick={()=>DeclineFetch(data.incomingFriendRequests[index]?.requestId)}/>

                                </div>)}


                    </>}
            </div>
    );
};

export default Friends;