import MarkdownRenderer from "./MarkdownRenderer";
//import { useContent } from "../../utils/useContent";
import { getData } from "../../utils/api_utils";
import { CourseContentLayout } from ".././layout/CourseContentLayout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface contentData {
  contentId: string | number;
  contentName: string;
  contentDuration: string;
  contentMd: string;
}
export const CourseContent = () => {
  const [data, setData] = useState<contentData>();
  const [error, setError] = useState<number | null>(null);
  const { id } = useParams<string>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData("content", {}, { id: `${id}` });

      console.log("Response from API:", response);

      if (response.err === null && response.data) {
        setData(response.data as contentData);
      } else {
        setError(response.err);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      {data &&
      data.contentName.trim() !== "" &&
      data.contentMd.trim() !== "" ? (
        <CourseContentLayout
          title={data.contentName}
          duration={data.contentDuration}
          content={<MarkdownRenderer>{data.contentMd}</MarkdownRenderer>}
        />
      ) : (
        console.log(error || 500)
      )}
    </>
  );
};
