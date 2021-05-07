import axios from "axios";


export const useFetch=async (url:string,method:string="GET",data?:any)=>{
    const response = await fetch(url,{
        method: method,
        headers:{
            'Content-Type': 'application/json',
            // 'Authorization':"Bearer " +localStorage.getItem('token'),
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkYiLCJzdWIiOiI2MDk1MzhiYTcyZDE4YjJjZjAxNjc0NjEiLCJpYXQiOjE2MjAzOTMzNDgsImV4cCI6MTYyMDQ3OTc0OH0.KgrtHx9vTd5HPrXV16akinsivF8myb1wFlpIJ5nEPd8",
             // cors:''
        },
        body:JSON.stringify(data)
    })
    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('token'))
    return await response.json()
}