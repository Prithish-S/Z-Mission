import {CourseCard} from "../common/CourseCard";
import {useAppSelector} from "../../redux/hooks/hooks";
import { ErrorRenderer } from "../common/ErrorRenderer";

interface courseInterface {
  courseId: number;
  courseName: string;
  courseDescription: string;
  noOfModules:number,
  courseDuration:number,
  imageUrl: string;
}
export const CoursesLayout=()=>
{
    const {courses,error}=useAppSelector((state: { courses: any; })=>state.courses);
    if(error)
    {
        return <ErrorRenderer error={error}/>
    }
    else if(courses.length>0){

        
    return (
      <div className="flex justify-center items-start pt-28 lg:pt-44 bg-amber-50 min-h-screen pb-5">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-32 lg:gap-y-10 gap-y-5">
          {courses.map((course: courseInterface) => (
            <CourseCard
              key={course.courseId}
              courseName={course.courseName}
              courseId={course.courseId}
              courseDescription={course.courseDescription}
              courseDuration={course.courseDuration}
              noOfModules={course.noOfModules}
              imageUrl={course.imageUrl}
            />
          ))}
        </div>
      </div>
    );
}}