import { Navbar } from "../components/Navbar";
import { createContext, useState,useEffect } from "react";
import { CourseCard } from "../components/CourseCard";
import {useCourses} from "../utils/useCourses";

// Gonna create a context for the courses and navbar and coursecard component will have access to this context
// How this works
//1.) I have created a context hook here "filteredCourses","setFilteredCourses","courses"
//2.) this context will be available for coursecard and navbar components
//3.) navbar will set the filtered courses based on user's search
//4.) coursecard page will then be able to assess the filtered courses 

export const CourseContext = createContext();

export const Courses = () => {
  const {available,courses}=useCourses();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  useEffect(()=>{if(available){setFilteredCourses(courses)}},[available,courses]);
  
  return (
    <CourseContext.Provider
      value={{ filteredCourses, setFilteredCourses, courses }}
    >
      
     {/* Comment the below code to make it appear in small screen */}
      <div className=" fixed bg-white top-0 w-full  shadow-md">
        <Navbar />
      </div>
     

      <div className="pt-24 pb-5  min-h-screen  w-screen flex flex-col items-center">
        <h1 className="text-3xl pt-5 pb-10 ">Courses</h1>
        <CourseCard />
        
      </div>
      
      {/* Uncomment the below code to make the navbar appear down in sm screen */}

      {/* <div className="md:hidden fixed bg-white bottom-0 w-full  shadow-md">
        <Navbar />
      </div> */}
       {/* <div className="hidden md:block fixed bg-white top-0 w-full  shadow-md">
        <Navbar />
      </div> */}
    </CourseContext.Provider>
  );
};
