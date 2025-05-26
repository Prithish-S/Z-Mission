import { RiMenuUnfold4Fill } from "react-icons/ri";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";

export const ContentNavbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="bg-stone-50 flex justify-between items-center h-16 inset-0 pl-7 pr-7 border-b border-t border-gray-300  active:shadow-lg hover:shadow-lg ">
        {/* Menu icon display */}
        {menu ? (
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
            }}
          />
        )}

        {/* search Bar */}

        <CgProfile className="md:text-4xl text-3xl" />
      </div>
    </>
  );
};
