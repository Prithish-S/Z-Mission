import { ContentNavbar } from "../components/ContentNavbar";
import {CourseContent} from "../components/CourseContent";
import { ErrorComponentsRenderer } from "../components/ErrorComponentsRenderer";
import { useContent } from "../utils/useContent";



export const Content = () => 
{
  const { content, contentTitle, contentDuration ,error} =useContent();
  if(error!=0)
  {
    return <ErrorComponentsRenderer error={error}/>;
  }
  return (
    <>
      <div >
        <ContentNavbar />
      </div>
      <div>
        <CourseContent/>
      </div>
    </>
  );
};

