import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Magnify = () => {
  return (
    <div>
      <Nav />
      <h1 className="flex justify-center bg-blue-500 capitalize md:text-3xl text-sm tracking-[5px] md:p-3 p-1 ">
        use code Myfirst on checkout 10%
      </h1>

      <div className="search flex justify-center mt-11">
        <div className="flex justify-between w-full">
          <input
            type="text"
            className=" bg-white border border-gray-400 w-[35%]  outline-none p-3  rounded-lg "
            placeholder="serach item"
          />

          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black " />
        </div>
      </div>
    </div>
  );
};

export default Magnify;
