import MarkdownRenderer from "./MarkdownRenderer";
import { getData } from "../../utils/api_utils";
import { CourseContentLayout } from ".././layout/CourseContentLayout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ErrorRenderer} from "../common/ErrorRenderer";
import { ContentNavbar } from "../common/ContentNavbar";

interface contentData {
  contentId: string | number;
  contentName: string;
  contentDuration: string;
  contentMd: string;
}
export const CourseContent = () => {
  const [data, setData] = useState<contentData>();
  const [error, setError] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<string>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData("content", {}, { id: `${id}` });

      console.log("Response from API:", response);

      if (response.err === null && response.data) {
        setData(response.data as contentData);
        setLoading(false);
      } else {
        setError(response.err);
         setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      {data && data.contentName!=null &&
      data.contentName.trim() !== "" &&  data.contentMd!=null &&
      data.contentMd.trim() !== "" ? (
      <>
      <div >
        <ContentNavbar error={false}/>
      </div>
        <CourseContentLayout
          title={data.contentName}
          duration={data.contentDuration}
          content={<MarkdownRenderer>{data.contentMd}</MarkdownRenderer>}
        />
        </>
      ) : !(loading) && (
        <>
       { console.log(error)}
       <div >
        <ContentNavbar error={true}/>
      </div>
        <ErrorRenderer error={error}/>
        </>
        
      )}
    </>
  );
};
