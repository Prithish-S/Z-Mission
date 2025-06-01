import { RiMenuUnfold4Fill } from "react-icons/ri";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";  
import { CgProfile } from "react-icons/cg";
import {useState,useRef,useEffect} from "react";
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import { CourseContext } from "../pages/Courses";


export const Navbar= () =>
{   
   
    const{filteredCourses,setFilteredCourses,courses }=useContext(CourseContext);
  
    const [menu,setMenu]=useState(false);
    const [searchTerm,setSearchTerm]=useState("");
    //const [filteredCourses,setFilteredCourses]=useState(courses);
    const inputRef=useRef(null);
    // function for handling search term and filtering courses 
    const handleSearch=(e)=>{
        if((e.key==="Enter"||e.type==="click") && searchTerm.trim() !== "")
        {
            console.log(searchTerm);

            const filtered= courses.filter(course =>{
                return (
                    course.name.toLowerCase().includes(searchTerm.toLowerCase()));
            });

            setFilteredCourses(filtered);
         }
    }

    useEffect(()=>
    {  console.log(filteredCourses);} ,[filteredCourses] );

    return ( 
        <>
        <div className="flex justify-between items-center h-16 inset-0 md:border-b border-t border-gray-300 px-5 active:shadow-lg hover:shadow-lg ">

            {/* Menu icon display */}
            {menu ?
            <RiMenuUnfold3Fill className="text-3xl text-customBlue" onClick={()=>{setMenu(false)}}/>
             :
             <RiMenuUnfold4Fill className="text-3xl" onClick={()=>{setMenu(true)}}/>}


             {/* search Bar */}
             <div className="relative md:w-2/5 w-3/5 cursor-pointer">

                <IoIosSearch onClick={()=>{handleSearch({type:"click"});inputRef.current.focus();}} className="absolute left-3 text-xl top-1/2 transform -translate-y-1/2"/>
                
                <input 
                ref={inputRef}
                value={searchTerm}
                placeholder="Search The Courses"
                className=" w-full px-11 md:h-10 h-8 border-[0.5px] rounded-2xl"
                onChange={(e)=>{setSearchTerm(e.target.value);}}
                onKeyDown={(e)=>{handleSearch(e)}}
                />      

                {searchTerm &&<AiOutlineClose className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={()=>{setFilteredCourses(courses);setSearchTerm("")}}/>}
            
             </div>
            <CgProfile className="text-3xl"/>

        </div>
        </>  
    );
}