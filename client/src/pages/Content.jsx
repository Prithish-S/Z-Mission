import { ContentNavbar } from "../components/ContentNavbar";
import {CourseContent} from "../components/CourseContent";

export const Content = () => {
  return (
    <>
      <div className="fixed w-full">
        <ContentNavbar />
      </div>
      <div>
        <CourseContent/>
      </div>
    </>
  );
};
