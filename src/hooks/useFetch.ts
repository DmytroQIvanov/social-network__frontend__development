import {useState} from "react";
import {useActions, useAuth} from "./useActions";
import {url} from "../config";

export const useFetch=async (url2:string,method:string="GET",data?:any, ...props:any)=>{
    console.log(`${url}${url2}`)

    const response = await fetch(`${url}${url2}`,{
        method,
        headers:{
            'Content-Type': 'application/json',
            'Authorization':"Bearer " +localStorage.getItem('token'),
            'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify(data)
    })

    const resp = await response.json()
    console.log(resp)

    if(resp.statusCode ===401) {
        throw new Error('SMTH')
    }

    return resp
}

