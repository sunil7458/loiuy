import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Product4 from "./Product4";
import Footer from "./Footer";

const Magnify = () => {
  const [data, setdata] = useState();
  const [search, setsearch] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const datas = await axios.get(
        "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
      );

      setdata(datas?.data?.data?.products);
    };
    fetch();
  });

  const change = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div>
      <Nav />
      <h1 className="flex justify-center bg-blue-500 capitalize md:text-3xl text-sm tracking-[5px] md:p-3 p-1 ">
        use code Myfirst on checkout 10%
      </h1>

      <div className="search flex justify-center mt-11  p-2">
        <div className="flex justify-between w-full bg-white border border-gray-400 lg:w-[35%]  outline-none p-1  rounded-lg  items-center">
          <input
            type="text"
            className=" w-full outline-none p-2  "
            placeholder="serach item"
            value={search}
            onChange={change}
          />

          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-orange-600 "
          />
        </div>
      </div>

      <div className="product space-y-9  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full  items-baseline lg:gap-0 gap-4 ">
         {data?.filter((da) => {
          
            if (search === "") {
              return da;
            }else if (da.name.toLowerCase().includes(search.toLowerCase())) {
              return da;
            }

            else{
              return  false
            }
          })?.map((k, ind) => {
            return (
              <Product4
                plpimaage={k.plpimaage}
                price={k.price}
                title={k.title}
                name = {k.name}
              />
            );
          })}
      </div>
      <Footer/>
    </div>
  );
};

export default Magnify;
