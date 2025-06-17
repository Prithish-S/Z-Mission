import troubleShoot from "../../assets/troubleShoot.jpg";
import badReq from "../../assets/girlSad.jpg";
import notFound from "../../assets/notFound1.jpg";
import { ErrorLayout } from "../layout/ErrorLayout";

interface PropsObject
{
  error:number|null
}

export const ErrorRenderer = (props:PropsObject) => {
  if (props.error === 500 || props.error===null) {
    return (
      <>
        <div>
          <ErrorLayout
            img={troubleShoot}
            message="Oops! Something went wrong on our side!"
            subtext="Please try again in a moment."
          />
        </div>
      </>
    );
  } else if (props.error === 400) {
    return (
      <>
        <div>
          <ErrorLayout
            img={badReq}
            message="It looks like there was a problem with your input."
            subtext="Please review and try again."
          />
        </div>
      </>
    );
  } else if (props.error === 404) {
    return (
      <>
        <div>
          <ErrorLayout
            img={notFound}
            message="Sorry, the data you requested is currently unavailable."
            subtext="Please check back soon!"
          />
        </div>
      </>
    );
  }
  else{
    return (
      <>
        <div>
          <ErrorLayout
            img={notFound}
            message="CONNECTION REFUSED"
            subtext="Please check back soon!"
          />
        </div>
      </>
    );
  }
};
