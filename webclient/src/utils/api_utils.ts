import { getUrl } from "./endpoints";
import axios from "axios";

export async function getData(
  endpoint: string,
  pathVariables: Record<string, string> = {},
  queryParams: Record<string, string> = {}
) {
  return requestData("get", endpoint, pathVariables, queryParams);
}

export async function requestData(
  method: string,
  endpoint: string,
  pathVariables: Record<string, string>,
  queryParams: Record<string, string>
) {
  let data: Object | null = null;
  let err: number | null = null;
  const url: string = getUrl(endpoint, pathVariables, queryParams);

  try {
    let response = await axios({ method: `${method}`, url: `${url}` });

    if (Array.isArray(response.data)) {
      if (response.data.length > 0) 
      {
        data = response.data[0];
      } 
      else {
        
        throw {
          response: {
            status: Number(400),
            data: 400,
          },
        };
      }
    } 
    else {
      
      data = response?.data;
    }
    
  } catch (error: any) {
    err = error.response?.status;
  }
  return { data, err };
}
