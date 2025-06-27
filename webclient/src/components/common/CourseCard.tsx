import  MarkdownRenderer from "../features/MarkdownRenderer.tsx";

interface courseInterface
{
  "courseId":number,
  "courseName":string,
  "courseDescription":string,
  "noOfModules":number,
  "courseDuration":number,
  "imageUrl":string,
  "setLeft":boolean,

}
export const CourseCard = (props:courseInterface) => {
  return (
    <>
    <div className="relative group">
      <div
        className={`
         lg:h-80 lg:w-80 h-40 w-96 shadow-2xl shadow-amber-100 flex lg:flex-col flex-row gap-4 lg:gap-2 bg-white pl-2 lg:pl-0 border-gray-100 border-1 
        `}
      >
        <div  className="lg:h-3/5 lg:w-full  h-32 w-32 self-center ">
          <img
            src={props.imageUrl}
            className="h-full w-full "
          ></img>
        </div>
        {/* IPO KELA IRUKURA ELAME IMAGE THAVARA MEETHI IRUKO LA ATHUKANA LAYOUT */}
        <div className="flex lg:h-2/5 flex-col lg:px-4  justify-between ">
          <div>
            <h1 className="lg:text-xl text-2xl  font-semibold self-start pt-3 lg:py-0 truncate w-60 lg:max-w-72" >
              {props.courseName}
            </h1>
          </div>
          {/* ipo kela irukrathu no of modules ,duration and button layout */}
          <div className="flex justify-between  lg:pb-5 pb-5 w-full">
            <div>
              <h1 className="text-lg lg:text-base pb-1">
                <span className="font-medium ">Modules:</span> {props.noOfModules}
              </h1>
              <h1 className="text-lg w-fit lg:text-base ">
                <span className="font-medium">Duration:</span>  {props.courseDuration}
              </h1>
            </div>
            <div className="self-end max-pl-10 pr-3 pb-1 ">
              <button className="h-8 w-fit px-2  bg-green-200 font-medium rounded-md border-1">
                ENROLL
              </button>
            </div>
          </div>

          {/* ffffff */}
        </div>
      </div>

{/* BELOW IS THE LOGIC FOR DESCRIPTION POP_UP*/}
<div className={`absolute top-0 z-50  hidden pointer-events-none lg:block  ${props.setLeft ? "right-full -translate-x-5":"left-full translate-x-5"}  p-3 w-80 h-56 bg-white  opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition duration-400 ease-in-out rounded-lg border-2  `}>

 <div className="line-clamp-6">
  <MarkdownRenderer>{props.courseDescription}</MarkdownRenderer>
  </div> 

</div>

      </div>
    </>
  );
};
