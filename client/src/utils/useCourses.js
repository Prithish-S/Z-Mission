import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../appConstants/portConstant";
export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [available, setAvailable] = useState(false);
  //   const [available,setAvailable] =useState(false);
  useEffect(() => {
    axios
      .get(url + "/courses")
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
        setAvailable(true);
      })
      .catch((error) => {
        console.log("There in an error in fetching data from API");
      });
  }, []);
  return { available, courses };
};
