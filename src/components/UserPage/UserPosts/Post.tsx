import React, {useState} from 'react';
import {IPost} from "../../../types/user";
import {useActions2} from "../../../hooks/useActions";
import {useParams} from "react-router-dom";
import pen from '../img/pen.png'
import trash from '../img/trash.png'
import './UserPosts.sass'
import {useTypedSelector} from "../../../hooks/useTypedSelector";





const Post = (props:any) => {
    const {fetchUser}= useActions2()
    const {elem,indx,owner} =props
    const [changeBlock,setChangeBlock] =useState(false);

    const [changeHandler,setChangeHandler] = useState('');


    return (
        <div className='user-post'>
            <div>
                {elem.content}
                <span className={'user-posts__dataOfCreation'}>{elem.dataOfCreation}</span>


                {elem.changed && <span>Changed</span>}
                {owner&&<div className="user-posts__icons-container">
                    <img src={trash} onClick={()=> {
                        fetchUser(`post/${elem.id}`,"DELETE")}}
                         className='user-post__icons'
                    />

                    <img src={pen} className='user-post__icons'
                         onClick={()=>{setChangeBlock(!changeBlock)}}
                    />
                </div>
                }
                {changeBlock &&
                <div>
                    <input onChange={(e)=>{setChangeHandler(e.target.value)} }
                           value={changeHandler}/>
                    <button onClick={()=>{
                        fetchUser(`post/${elem.id}`,'PATCH',{content:changeHandler})}
                    }>Send</button>
                </div>
                }

            </div>
        </div>
    );
};

export default Post;