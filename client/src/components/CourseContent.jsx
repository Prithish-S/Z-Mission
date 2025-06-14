import MarkdownRenderer from "./MarkdownRenderer";
import { useContent } from "../utils/useContent";
import { useState, useEffect } from "react";

export const CourseContent = () => {
  
  const [fetchedContent, setFetchedContent] = useState("");
  const [fetchedContentTitle, setFetchedContentTitle] = useState("");
  const [fetchedContentDuration, setFetchedContentDuration] = useState("");
  const { content, contentTitle, contentDuration } = useContent();
  useEffect(() => {
    setFetchedContent(content);
    setFetchedContentTitle(contentTitle);
    setFetchedContentDuration(contentDuration);
    console.log(fetchedContentTitle);
  }, [content, contentTitle, contentDuration]);
  return (
    <>
      <div className=" pt-20 md:px-14 bg-orange-100 px-6 min-h-screen pb-10">
        {/* The below div is for card layout */}

        <div className="rounded-xl bg-neutral-50 min-h-[screen/2] pb-10 shadow-orange-300 shadow-2xl md:mt-10">
          <div className="flex flex-col md:pl-20 md:pr-20 pl-10 pr-10 gap-7">
            <div className="flex md:flex-row md:justify-between   flex-col items-center gap-3 md:pt-14 pt-10">
              <h1 className="font-serif font-semibold text-5xl text-gray-800 text-center tracking-wide ">
                {fetchedContentTitle}
              </h1>
              <h5 className=" text-md text-gray-600">
                Duration : {fetchedContentDuration}
              </h5>
            </div>

            <div className="text-xl font-sans text-justify  leading-relaxed">
              <MarkdownRenderer>{fetchedContent}</MarkdownRenderer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
