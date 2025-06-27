import { RiMenuUnfold4Fill } from "react-icons/ri";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

//importing my utility function for sending requst to server

import { getData } from "../../utils/api_utils";

//import dispatch --- dispatch is to acces my slice from store.ts

import { useAppDispatch } from "../../redux/hooks/hooks";

//importing my particualr slice's reducer function

import { setCourses } from "../../redux/slices/coursesSlice";

interface courseInterface {
  courseId: number;
  courseName: string;
  courseDescription: string;
  noOfModules:number,
  courseDuration:number,
  imageUrl: string;
}

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  // function for handling search term and filtering courses
  const handleSearch = async (e: any) => {
    if ((e.key === "Enter" || e.type === "click") && searchTerm.trim() !== "") {
      console.log(searchTerm);
      const { data, err } = (await getData("courses")) as {
        data: courseInterface[] | { courses: courseInterface[] } | null;
        err: number | null;
      };
      if (!data) {
         dispatch(setCourses({courses:[],error:err,loading:false}));

      }
      else if (Array.isArray(data)) {
        dispatch(setCourses({courses:data,error:err,loading:false}));
      } 
      else{
        dispatch(setCourses({courses:data.courses,error:err,loading:false}));
      }
    }
  };

  useEffect(() => {
    const fetch=async()=>{
    const { data, err } = (await getData("courses")) as {
        data: courseInterface[] | { courses: courseInterface[] } | null;
        err: number | null;
      };
      // if (!data) {
      //   return;
      // }
      // if (Array.isArray(data)) {
      //   dispatch(setCourses({courses:data,error:err}));
      // } else {
      //   dispatch(setCourses({courses:data.courses,error:err}));
      // }
       if (!data) {
         dispatch(setCourses({courses:[],error:err,loading:false}));
      }
      else if (Array.isArray(data)) {
        dispatch(setCourses({courses:data,error:err,loading:false}));
      } 
      else{
        dispatch(setCourses({courses:data.courses,error:err,loading:false}));
      }
    }
    fetch();
}
   
  , []);

  return (
    <>
      <div className="flex justify-between items-center h-16 inset-0 md:border-b border-t border-gray-300 px-5 active:shadow-lg hover:shadow-lg ">
        {/* Menu icon display */}
        {menu ? (
          <RiMenuUnfold3Fill
            className="text-3xl text-customBlue"
            onClick={() => {
              setMenu(false);
            }}
          />
        ) : (
          <RiMenuUnfold4Fill
            className="text-3xl"
            onClick={() => {
              setMenu(true);
            }}
          />
        )}

        {/* search Bar */}
        <div className="relative md:w-2/5 w-3/5 cursor-pointer">
          <IoIosSearch
            onClick={() => {
              handleSearch({ type: "click" });
              inputRef.current?.focus();
            }}
            className="absolute left-3 text-xl top-1/2 transform -translate-y-1/2"
          />

          <input
            ref={inputRef}
            value={searchTerm}
            placeholder="Search The Courses"
            className=" w-full px-11 md:h-10 h-8 border-[0.5px] rounded-2xl"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyDown={(e) => {
              handleSearch(e);
            }}
          />

          {searchTerm && (
            <AiOutlineClose
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => {
                setSearchTerm("");
              }}
            />
          )}
        </div>
        <CgProfile className="text-3xl" />
      </div>
    </>
  );
};
