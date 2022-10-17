import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Product2 from "./Product2";

const Travels = () => {
  const [m, setm] = useState();

  useEffect(() => {
    const d = async() => {
      const b = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setm(b?.data);
      console.log(b?.data, "jhv");
    };
    d();
  }, []);
  return (
    <div>
      <Nav />

      <div className="banner ">
        <h1 className="flex justify-center bg-blue-500 capitalize md:text-3xl text-sm tracking-[5px] md:p-3 p-1 ">
          use code Myfirst on checkout 10%
        </h1>

        <div className="w-full flex items-start justify-center">
          <div className="  lg:w-[85%]  w-[95%]  ">
            <div className="banner_list  w-full ">
              <div className="list flex items-baseline space-x-6">
                <div className=" flex flex-col  text-white ">
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16"
                  >
                    <g clip-path="url(#clip0_2_693)">
                      <path
                        d="M22.5493 44.9998C31.5713 -11.3986 58.0736 -17.7701 69.0692 44.9998"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M69.0486 45H22.5631C20.0305 51.5027 14.8019 75.7418 45.6833 74.8796C78.1169 73.9742 70.274 49.6918 69.0486 45Z"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M20.8958 59.7339C20.1878 64.755 18.4863 75.8672 18.617 77.1843C18.8621 88.0496 26.1331 88.2965 35.5282 89.0373C44.3515 89.7331 59.6288 88.741 60.9359 88.5435C68.7788 87.885 72.6185 85.7448 72.6185 77.1843C72.2014 71.9985 72.038 70.8462 70.4041 59.7339"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M23.8416 45.0002C34.02 -13.6798 57.87 -11.8798 67.777 45.0002"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M57.2239 83.7002H65.8387"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M42.2256 74.8933V76.3671C42.2256 77.4717 43.121 78.3671 44.2256 78.3671H46.9957C48.1002 78.3671 48.9957 77.4717 48.9957 76.3671V74.7104"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_693">
                        <rect width="90" height="90" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm">Cuhsions</span>
                </div>

                <div className=" flex flex-col  text-white ">
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16"
                  >
                    <g clip-path="url(#clip0_2_693)">
                      <path
                        d="M22.5493 44.9998C31.5713 -11.3986 58.0736 -17.7701 69.0692 44.9998"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M69.0486 45H22.5631C20.0305 51.5027 14.8019 75.7418 45.6833 74.8796C78.1169 73.9742 70.274 49.6918 69.0486 45Z"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M20.8958 59.7339C20.1878 64.755 18.4863 75.8672 18.617 77.1843C18.8621 88.0496 26.1331 88.2965 35.5282 89.0373C44.3515 89.7331 59.6288 88.741 60.9359 88.5435C68.7788 87.885 72.6185 85.7448 72.6185 77.1843C72.2014 71.9985 72.038 70.8462 70.4041 59.7339"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M23.8416 45.0002C34.02 -13.6798 57.87 -11.8798 67.777 45.0002"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M57.2239 83.7002H65.8387"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M42.2256 74.8933V76.3671C42.2256 77.4717 43.121 78.3671 44.2256 78.3671H46.9957C48.1002 78.3671 48.9957 77.4717 48.9957 76.3671V74.7104"
                        stroke="#E5DFD9"
                        stroke-width="1.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_693">
                        <rect width="90" height="90" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm">Tablewear</span>
                </div>
                <div className=" flex flex-col  text-white ">
                  <svg
                    width="96"
                    height="70"
                    viewBox="0 0 96 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16"
                  >
                    <path
                      d="M1.72803 38.3198C1.91537 40.1469 3.86377 44.0752 9.0345 44.0752C14.2052 44.0752 63.6457 44.0752 87.7196 44.0752C89.5931 44.1665 93.1151 42.9241 94.464 38.3198"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <path
                      d="M53.376 20.4638L42.816 20.4638"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <path
                      d="M34.7521 13.744C37.8554 2.29381 38.7018 1.45599 41.523 1.45599H56.4755C60.1431 1.45599 59.5789 2.2938 62.4001 13.744"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <path
                      d="M94.464 13.744H1.72803V63.0354C1.72803 66.6407 4.81923 69.232 7.91043 69.232H88.8437C93.34 69.232 94.464 64.5376 94.464 62.1904V13.744Z"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <rect
                      x="26.8979"
                      y="59.6498"
                      width="4.06801"
                      height="14.436"
                      transform="rotate(-180 26.8979 59.6498)"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <rect
                      x="70.6381"
                      y="33.31"
                      width="4.068"
                      height="9.636"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <rect
                      x="22.8301"
                      y="33.31"
                      width="4.068"
                      height="9.636"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <rect
                      x="74.7061"
                      y="59.6498"
                      width="4.06801"
                      height="14.436"
                      transform="rotate(-180 74.7061 59.6498)"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                  </svg>

                  <span className="text-sm">Home</span>
                </div>
                <div className=" flex flex-col  text-white  items-center">
                  <svg
                    width="96"
                    height="70"
                    viewBox="0 0 96 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16"
                  >
                    <path
                      d="M1.72803 38.3198C1.91537 40.1469 3.86377 44.0752 9.0345 44.0752C14.2052 44.0752 63.6457 44.0752 87.7196 44.0752C89.5931 44.1665 93.1151 42.9241 94.464 38.3198"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <path
                      d="M53.376 20.4638L42.816 20.4638"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <path
                      d="M34.7521 13.744C37.8554 2.29381 38.7018 1.45599 41.523 1.45599H56.4755C60.1431 1.45599 59.5789 2.2938 62.4001 13.744"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <path
                      d="M94.464 13.744H1.72803V63.0354C1.72803 66.6407 4.81923 69.232 7.91043 69.232H88.8437C93.34 69.232 94.464 64.5376 94.464 62.1904V13.744Z"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <rect
                      x="26.8979"
                      y="59.6498"
                      width="4.06801"
                      height="14.436"
                      transform="rotate(-180 26.8979 59.6498)"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <rect
                      x="70.6381"
                      y="33.31"
                      width="4.068"
                      height="9.636"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <rect
                      x="22.8301"
                      y="33.31"
                      width="4.068"
                      height="9.636"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                    <rect
                      x="74.7061"
                      y="59.6498"
                      width="4.06801"
                      height="14.436"
                      transform="rotate(-180 74.7061 59.6498)"
                      stroke="#E5DFD9"
                      stroke-width="1.5"
                    />
                  </svg>

                  <span className="text-sm">Coin</span>
                </div>
              </div>
            </div>

            <hr className="mt-6"></hr>
            <div className="clothes_header  text-white  flex justify-between text-[14px] mt-3  font-[100]">
              <div className="flex items-center space-x-2">
                <span>Catalogue</span>
                <svg
                  width="5"
                  height="6"
                  viewBox="0 0 5 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="3" r="2.5" fill="#E5DFD9" />
                </svg>
                <span>Home</span>
              </div>
              <span>Products</span>
            </div>
            <div className="product space-y-9  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full  items-baseline lg:gap-0 gap-4 ">
              {/* {m?.map((j, index) => {
            //   return (
            //     <Product2
            //       image=  {j.thumbnailUrl}
            //       title = {j.title}
            //       album  = {j.albumId}

            //     />
            //   );

        
            })} */}

              {m?.map((j, index) => {
                console.log(j , "kj")
                return (
                  <Product2
                    plpimaage={j.thumbnailUrl}
                    price={j.title}
                    price_usd={j.id}
                    name={j.name}
                    title = {j.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Travels;
