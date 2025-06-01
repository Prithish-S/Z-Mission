import { ContentNavbar } from "../components/ContentNavbar";
import {CourseContent} from "../components/CourseContent";

export const Content = () => {
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

