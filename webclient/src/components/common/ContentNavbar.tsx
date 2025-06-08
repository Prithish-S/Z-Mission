import { RiMenuUnfold4Fill } from "react-icons/ri";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const ContentNavbar = (props:{error:boolean}) => {
  const [menu, setMenu] = useState<boolean>(false);
  let error:boolean=props.error || false;
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-stone-50 flex justify-between items-center h-16 inset-0 pl-7 pr-7 border-b border-t border-gray-300  active:shadow-lg hover:shadow-lg w-full fixed">
        {/* Menu icon display */}
       
        {error?(
          <button className="h-fit w-fit p-1 bg-teal-300 text-lg rounded-lg hover:bg-gray-400" onClick={()=>{navigate("/")}}> Go Home </button>
        ):
        
        menu ? (
          <RiMenuUnfold3Fill
            className="md:text-4xl text-3xl"
            onClick={() => {
              setMenu(false);
            }}
          />
        ) : (
          <RiMenuUnfold4Fill
            className="md:text-4xl text-3xl"
            onClick={() => {
              setMenu(true);
            }
          }
          />
        )}

        {/* search Bar */}

        <CgProfile className="md:text-4xl text-3xl" />
      </div>
    </>
  );
};
