import { Error404 } from "./Error404";
export const ErrorComponentsRenderer=(props)=>
{
 
    if(props.error==400)
    {
        return (
            <h1 className="text-2xl text-black py-28">THIS IS 400 nga</h1>
        );
    }
    else if(props.error==500)
    {
        return (
            <Error404/>
        );
    }

}
