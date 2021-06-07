import React, {useEffect, useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import {useActions2, useAuth} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Loader from "../Loader/Loader";
import "./UserPage.sass"
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./UserPosts/UserPosts";
import AddImg from "../Modal-panels/AddImg/AddImg";


const UserPage = () => {
    const Params : {id:string}= useParams()
    const {fetchUser}= useActions2()
    const [modalPanel, setModalPanel] = useState(false)


    useEffect(()=>{
            fetchUser(`user/${Params.id}`)
    },[Params.id])

    const {fetchAuth}= useAuth()

    const {user,error,loading} = useTypedSelector(state => state.user)
    const {id} = useTypedSelector(state => state.auth)
    const owner = id==user.id;


    return (
        <>
            {modalPanel&&<AddImg/>}

            <div className={'user-page'}>
                    {!loading && !user
                        ?<Loader/>
                        :<UserInfo user={user} owner={owner} modalPanel={modalPanel} setModalPanel={setModalPanel}/>}
                    {loading && user?
                        <Loader/>
                    :
                        <Posts posts={user.posts} owner={owner}/>}

        </div>
            </>
    );
}

export default UserPage;