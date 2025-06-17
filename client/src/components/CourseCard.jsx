import { useContext } from "react";
import { CourseContext } from "../pages/Courses";

export const CourseCard = () => {
  const { filteredCourses } = useContext(CourseContext);
  return (
    <div className=" grid lg:grid-cols-3 grid-cols-1 gap-20">
      {filteredCourses.map((course) => {
        return (
          <div className=" h-44 w-96 px-10 active:shadow-lg hover:shadow-lg col-span-1 flex flex-col items-center rounded-xl bg-cyan-50">
            <h1 className="text-xl  font-semibold pt-4">{course.name}</h1>
            <p className="text-justify italic mt-7">{course.description}</p>
            <div className="flex flex-col mt-44 absolute self-start">
              <p>
                <span className="font-semibold ">Modules: </span>
                {course.modules}
              </p>
              <p>
                <span className="font-semibold">Duration: </span>
                {course.duration}
              </p>
            </div>
            <button className="w-20 border-2 hover:bg-white bg-white h-10 mt-64 absolute rounded-md">
              ENROLL
            </button>
          </div>
        );
      })}
    </div>
  );
};
