import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import {url} from "../appConstants/portConstant";
export const  useContent=()=>
{
    const[content,setContent]=useState("");
    const[contentTitle,setContentTitle]=useState("");
    const[contentDuration,setContentDuration]=useState("");
    const {id}=useParams();
    useEffect(()=>{
    axios.get(`${url}/content/${id}`).then((response)=>{
        setContent(response.data.content_md);
        setContentTitle(response.data.content_title);
        setContentDuration(response.data.content_duration);
        
    })
    .catch((error)=>{
        console.log("error in fetching the content");
    })},[id]);
    return {content,contentTitle,contentDuration};


}