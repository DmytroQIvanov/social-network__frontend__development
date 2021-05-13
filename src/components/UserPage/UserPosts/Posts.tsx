import React, {useState} from 'react';
import {IPost} from "../../../types/user";
import {useActions2} from "../../../hooks/useActions";
import {useParams} from "react-router-dom";

const Posts = (props:{posts:[IPost]}) => {
    const {posts} =props
    const Params : {id:string}= useParams()




    return (
        <div>
            {posts?.map((elem,indx)=>(<Post elem={elem} indx={indx}/>))}
        </div>
    );
};



const Post = (props:any) => {
    const {fetchUser}= useActions2()
    const {elem,indx} =props
    const [changeBlock,setChangeBlock] =useState(false);

    const [changeHandler,setChangeHandler] = useState('');


    return (
        <div>
            <div>
                {elem.content}
                {elem.changed && <span>Changed</span>}
                <button onClick={()=> {
                    fetchUser(`user/post/${indx}`,"DELETE")
                }
                }>Delete</button>
                <button onClick={()=>{setChangeBlock(!changeBlock)}}>Change</button>

                {changeBlock &&
                <div>
                    <input onChange={(e)=>{setChangeHandler(e.target.value)} }
                        value={changeHandler}/>
                    <button onClick={()=>{
                    fetchUser(`user/post/${indx}`,'PATCH',{content:changeHandler})}
                    }>Send</button>
                </div>
                }

            </div>
        </div>
    );
};

export default Posts;
