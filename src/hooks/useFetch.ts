import {url} from "../config";

export const useFetch=async (url2:string,method:string="GET",data?:any, ...props:any)=>{
    try {
        console.log(`${url}${url2}`)

        const response = await fetch(`${url}${url2}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token'),
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })
        const resp = await response.json()
        console.log(resp)

        // if (resp.statusCode) {
        //     throw resp
        // }

        return resp
    }catch (e) {
        console.log(e)
        throw e

    }
}

