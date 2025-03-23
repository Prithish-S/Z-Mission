import { Navbar } from "../components/Navbar";
import { createContext, useState } from "react";

//Gonna create a context for the courses and navbar component will have access to thins context
export const CourseContext = createContext();

export const Courses = () => {
  const courses = [
    {
      name: "Java Basics",
      course_id: "C101",
      duration: "4 Weeks",
      description: "Intro to Java Intro to Java Intro to JavaIntro to Java",
      modules: 3, // Number of modules
    },
    {
      name: "Web Dev",
      course_id: "C102",
      duration: "6 Weeks",
      description:
        "HTML, CSS, JSHTML, CSS, JS HTML, CSS, JS HTML, CSS, JS HTML, CSS, JS",
      modules: 4,
    },
    {
      name: "Data Structures",
      course_id: "C103",
      duration: "8 Weeks",
      description:
        "Algorithms and DS Algorithms and DSAlgorithms and DSAlgorithms and DSAlgorithms and DS",
      modules: 5,
    },
    {
      name: "Machine Learning",
      course_id: "C104",
      duration: "12 Weeks",
      description:
        "ML & AI ML & AI ML & AI ML & AIML & AIML & AI ML & AI ML & AI",
      modules: 6,
    },
  ];
  const [filteredCourses, setFilteredCourses] = useState(courses);

  return (
    <CourseContext.Provider
      value={{ filteredCourses, setFilteredCourses, courses }}
    >
      <Navbar />
      <div className="pt-[16px] h-screen w-screen flex flex-col items-center">
        <h1 className="text-2xl">Courses</h1>
        <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-20">
          {filteredCourses.map((course) => {
            return (
              <div className=" h-80 w-80 px-10  border-2 col-span-1 flex flex-col items-center rounded-xl">
                <h1 className="text-2xl  font-semibold pt-4">{course.name}</h1>
                <p className="text-justify italic mt-7">{course.description}</p>
                <div className="flex flex-col mt-44 absolute self-start">
                  <p>
                    <span className="font-semibold">Modules: </span>
                    {course.modules}
                  </p>
                  <p>
                    <span className="font-semibold">Duration: </span>
                    {course.duration}
                  </p>
                </div>
                <button className="w-20 border-2 h-10 mt-64 absolute rounded-md">
                  ENROLL
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </CourseContext.Provider>
  );
};
