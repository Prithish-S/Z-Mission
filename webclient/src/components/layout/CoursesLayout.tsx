import {CourseCard} from "../common/CourseCard";
import {useAppSelector} from "../../redux/hooks/hooks";
import { ErrorRenderer } from "../common/ErrorRenderer";

interface courseInterface {
  courseId: number;
  courseName: string;
  courseDescription: string;
  noOfModules:number,
  courseDuration:number,
  imageUrl: string,
  setLeft:boolean,
}
export const CoursesLayout=()=>
{
    const {courses,error,loading}=useAppSelector((state: { courses: any; })=>state.courses);
    
     if(courses && courses.length>0 ){

        
    return (
      <div className="flex justify-center items-start pt-22 lg:pt-28 bg-yellow-50 min-h-screen pb-5 ">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-32 lg:gap-y-10 gap-y-5">
          {courses.map((course: courseInterface,index:number) => (
            <CourseCard
              key={course.courseId}
              courseName={course.courseName}
              courseId={course.courseId}
              courseDescription={course.courseDescription}
              courseDuration={course.courseDuration}
              noOfModules={course.noOfModules}
              imageUrl={course.imageUrl}
              setLeft={(index+1)%3===0 ? true:false}
            />
          ))}
        </div>
      </div>
    );

}

else if(!loading) {
  
        return <ErrorRenderer error={error}/>
       
    
}

}
