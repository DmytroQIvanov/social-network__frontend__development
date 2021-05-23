import {IPost} from "../../../types/user";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions2} from "../../../hooks/useActions";
import React, {useState} from "react";
import Post from "./Post";

const Posts = (props:{posts:[IPost],owner:any}) => {
    const {posts,owner} =props
    const Params : {id:string}= useParams()
    const {id} = useTypedSelector(state => state.auth)
    const {fetchUser}= useActions2()

    const [postHandler,setPostHandler] =useState('')





    return (
        <div className='user-posts'>
            {owner&&
            <div className='user-posts__user-block'>
                <input placeholder='Text' onChange={(e)=>{setPostHandler(e.target.value)}} value={postHandler}/>
                <img />
                <input type='file'/>
                <button onClick={()=>{
                    fetchUser('post','POST',{content:postHandler})}}
                >Add Post</button>

            </div>}

            {posts?.map((elem,indx)=>(<Post elem={elem} indx={indx} owner={owner}/>))}
        </div>
    );
};
export default Posts