import React from 'react';
import './Loader.css'

interface ILoader {
    width?:number

}
const Loader = (props:ILoader) => {
    return (
        <div className="lds-roller" >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;