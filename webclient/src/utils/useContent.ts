import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../appConstants/portConstant";
interface ResponseContent
{
    id?:string,
    contentId:number,
    contentName:string,
    contentMd:string,
    contentDuration:string
}

export const useContent = () => {
  const [content, setContent] = useState<string>("");
  const [contentTitle, setContentTitle] = useState<string>("");
  const [contentDuration, setContentDuration] = useState<string>("");
  const [error, setError] = useState<number>(0);
  const { id } = useParams<{id:string}>();
  useEffect(() => {
    axios
      .get<ResponseContent | ResponseContent[]>(`${url}/content`, { params: { id: id } })
      .then((response) => {
        if (Array.isArray(response.data)) {
          if (response.data.length > 0) {
            setContent(response.data[0].contentMd);
            setContentTitle(response.data[0].contentName);
            setContentDuration(response.data[0].contentDuration);
          } else {
            throw {
              response: {
                status: Number(500),
                data: 500,
              },
            };
          }
        } else {
          setContent(response.data.contentMd);
          setContentTitle(response.data.contentName);
          setContentDuration(response.data.contentDuration);
        }
      })
      .catch((error) => {
        console.log("error in fetching the content");
        let errCode = -1;
        if (error.response) {
          console.log(error.response.status);
          setError(error.response.status);
        } else {
          setError(errCode);
        }
      });
  }, [id]);
  return { content, contentTitle, contentDuration, error };
};
