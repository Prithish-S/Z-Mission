import {getUrl} from "./endpoints";
import axios from "axios";

export async function getData(endpoint:string,pathVariables :Record<string,string>={}, queryParams: Record<string,string>={})
{
    return requestData("get",endpoint,pathVariables,queryParams);
}

export async function requestData(method:string,endpoint:string,pathVariables:Record<string,string>,queryParams:Record<string,string>)
{
    let data:Object | null=null;
    let err:number | null=null;
    const url:string=getUrl(endpoint,pathVariables,queryParams);

    try{
    let response=await axios({ method: `${method}`, url: `${url}` });

    if(Array.isArray(response.data))
    {
      if(response.data.length>0)
      {
      data=response.data[0];}
      else{
        err=-1;
        throw {
          response: {
                status: Number(500),
                data: 500,
              
        }}
      }
    }
    else{
    data=response?.data;}
    err=null;
    }
    catch(error:any )
    {
      err=error.response?.status;
    }
    //  await axios({ method: `${method}`, url: `${url}` })
    //   .then((response) => {
    //     data=response?.data;
    //     return data;
    //   })
    //   .catch((error) => {
    //      err=error.response?.status;
    //      return err;
    //     });

    return {data,err};
    
    
} 

