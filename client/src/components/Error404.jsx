import Error_404 from "../assets/Error_404.png";

export const Error404=()=>
{
    return (
    <div className="h-screen w-screen flex md:flex-row flex-col px-10 ">
        <div className="h-2/3 w-2/4 ">
            
            <img src={Error_404 } className="h-full w-full"></img>
        </div>
        <div className="h-1/3">
            <h1 className="text-5xl font-semibold font-serif">Sorry, the content you're looking for doesn't exist.</h1>
            <button className="text-xl bg-amber-300 rounded-lg "> Go Home </button>
        </div>

    </div>);
}
