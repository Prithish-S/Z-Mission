
interface PropsObject
{
    img:string,
    message:string,
    subtext:string
}

export const ErrorLayout = (props:PropsObject) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col pt-18 lg:pt-24 h-screen w-screen justify-center items-center gap-10 lg:gap-2  ">
        <div className="flex flex-col gap-4 lg:w-2/5 justify-center h-fit px-4 lg:px-0 ">
          <h1 className="text-3xl md:text-5xl text-center   leading-normal font-display font-semibold  lg:text-center text-gray-800  lg:p-4 rounded-2xl lg:rounded-4xl bg-white ">
            {props.message}
          </h1>
          <h5 className="hidden lg:block self-center text-2xl text-slate-800 mt-10 px-6 py-3 bg-amber-100 border-amber-200 border-1 font-semibold rounded-lg">
            {props.subtext}
          </h5>
        </div>
        <div className="lg:h-4/5 lg:w-2/5 h-3/5 w-4/5 pt-10 lg:pt-0 lg:pl-20 self-center  ">
          <img
            src={props.img}
            className="h-full w-full rounded-xl shadow-gray-500  "
          ></img>
        </div>
        <div>
          <h6 className="block lg:hidden self-center text-2xl text-medium text-center text-black ">
            {props.subtext}
          </h6>
        </div>
      </div>
    </>
  );
};
