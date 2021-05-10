import {useState} from "react";
import {useActions, useAuth} from "./useActions";
import {url} from "../config";

export const useFetch=async (url2:string,method:string="GET",data?:any, ...props:any)=>{


    const response = await fetch(`${url}${url2}`,{
        method: method,
        headers:{
            'Content-Type': 'application/json',
            // "Content-Type": "application/x-www-form-urlencoded",
            'Authorization':"Bearer " +localStorage.getItem('token'),
            'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify(data)
    })

    console.log(localStorage.getItem('token'))
    const resp = await response.json()
    console.log(resp)

    if(resp.statusCode ===401) {
        console.log('trueeeeeeee')
    // return null
    }

    return resp
}

