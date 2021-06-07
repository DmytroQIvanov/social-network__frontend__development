import React from 'react';
import {Link, useParams} from "react-router-dom";


const Entertainment = () => {
    const Params : {id:string}= useParams()

    return (
        <div>
            {Params.id ?<iframe src="https://dmytroqivanov.github.io/Todo-list/" width={'99%'} height={'1000px'}></iframe>:
                <>
                <Link to={'entertainment/todo-list'}>todo-list</Link>
                <Link to={'entertainment/youtube'}>youtube</Link>
                </>
            }

            </div>
    );
};

export default Entertainment;