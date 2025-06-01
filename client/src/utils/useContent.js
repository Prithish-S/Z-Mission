import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../appConstants/portConstant";
export const useContent = () => {
  const [content, setContent] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [contentDuration, setContentDuration] = useState("");
  const [error, setError] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${url}/content`, { params: { id: id } })
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
