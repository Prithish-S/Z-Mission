import { useState, useEffect } from "react";
import axios from "axios";
export const useApiUtils = () => {
  const [content, setContent] = useState(null);
  //axios to get the data
  useEffect(() => {
    axios
      .get("http://localhost:8080/helloworld")
      .then((response) => {
        setContent(response.data[0]);
      })
      .catch((error) => {
        console.log("error in fetching the data");
      });
  }, []);
  return content;
};
