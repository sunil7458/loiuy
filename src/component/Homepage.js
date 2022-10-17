import React, { useEffect, useState } from "react";

import img2 from "../Asset/img.png";
import img3 from "../Asset/j.png";
import img4 from "../Asset/v.png";
import img5 from "../Asset/w.png.webp";
import img6 from "../Asset/im.webp";
import axios from "axios";
import im7 from "../component/jkjk.png";
import img8 from "../component/tn.png";
import img9 from "../component/tnn.png";
import img10 from "../component/t.png";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Homepage = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
      );
      // console.log(data);
      setdata(data?.data?.data?.products);
    };
    fetch();
  }, []);

  // useEffect(() => {
  //   const fetch = async () => {
  //     const datas = await axios.get("https://fakestoreapi.com/products");
  //     // console.log(datas?.data);
  //     setfilterout(datas?.data);
  //   };
  //   fetch();
  // }, []);

  return (
    <div className="main ">
      <Nav />
      <h1 className="flex justify-center bg-blue-500 capitalize md:text-3xl text-sm tracking-[5px] md:p-3 p-1 ">
        use code Myfirst on checkout 10%
      </h1>

      <section className="w-full">
        {/* <ful screen */}
        <div className="sec_1  hidden lg:block w-full">
          <img src={img2} className="w-full" alt="llm" />
          <div className="   text-white  flex justify-center items-center  m-9">
            <div className="flex flex-col capitalize  space-y-12  text-center">
              <span className="text-5xl capitalize  tracking-[5px]">
                host Best party
              </span>
              <span className="capitalize  text-3xl tracking-[3px]">
                {" "}
                a good host good is haif job done
              </span>
            </div>
          </div>
          <div>
            <img src={img3} className="w-full  p-4" alt="kj" />
          </div>
          <div className="">
            

            <div className="products    text-white  flex gap-20 w-full  overflow-x-auto  ">
              {data?.map((datas, index) => {
                console.log(data);
                return (
                  <div className=" ">
                    <div className="">
                      <img
                        src={datas.plpimaage}
                        alt="kj"
                        className="h-80  object-cover"
                      />
                      <span>{datas.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

           
          </div>

          <img src={img4} className="mt-20" alt="d" />
          <img src={img5} className="mt-20" alt="kd" />

          <span className=" flex justify-center text-3xl text-white  mt-16 tracker-[4px]">
            Best Seller{" "}
          </span>

          <div className="products    text-white  flex gap-20 w-full  overflow-x-auto mt-16  ">
            {data?.map((datas, index) => {
              console.log(data);
              return (
                <div className=" ">
                  <div className="">
                    <img
                      src={datas.plpimaage}
                      className="h-80  object-cover"
                      alt="kjh"
                    />
                    <span>{datas.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <span className="  text-3xl mt-16 font-serif  text-white  flex justify-center capitalize  tracking-[5px]">
            everyday
          </span>

          <img src={img6} alt="kjbh" className=" mt-16 " />
        </div>
        {/* <ful screen */}

        {/* mobile */}
        <div className="mobile  md:hidden block text-white  ">
          <ul className="lists  flex items-center  space-x-6 overflow-auto overflow-x">
            <div className="flex flex-col items-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
              >
                <path
                  d="M86.4001 51.8789C61.7116 39.9039 17.0911 46.0044 4.86011 51.8789C6.67211 60.2388 17.5441 85.3184 20.7151 85.3184C27.0571 87.3519 65.3356 87.1259 71.9041 85.3184C74.8033 85.3184 84.3616 61.5944 86.4001 51.8789Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M38.88 51.6597H52.2"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M44.7102 27.2683C44.7105 27.2682 44.7095 27.2712 44.7065 27.2776C44.7086 27.2716 44.71 27.2684 44.7102 27.2683ZM44.4567 27.6084C44.4546 27.6107 44.4526 27.613 44.4505 27.6152C44.1455 27.9491 43.6381 28.3923 42.9405 28.9292C41.5542 29.9959 39.5261 31.3501 37.1602 32.8188C32.4331 35.7534 26.4264 39.1033 21.6749 41.4592C17.11 43.7226 13.0593 46.3752 10.0127 48.3704C9.84199 48.4822 9.67444 48.5919 9.51013 48.6994C8.19248 49.5613 7.10459 50.2641 6.26251 50.7387C6.63329 50.3938 7.08607 49.9998 7.61325 49.5633C9.39485 48.0882 11.9469 46.1929 14.8301 44.1861C20.6009 40.1695 27.6296 35.7537 32.3547 33.4109C34.5961 32.2995 36.47 31.3386 38.0406 30.5331C39.8448 29.6079 41.2489 28.8879 42.3504 28.3807C43.3714 27.9107 44.034 27.6723 44.4567 27.6084Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
              </svg>

              <span>Home</span>
            </div>
            <div className="flex flex-col  items-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
              >
                <path
                  d="M76.2865 30.854H13.5153V79.53C13.2548 87.0787 16.3804 88.3802 18.4641 88.3802H70.5563C75.3488 88.3802 76.547 83.4345 76.2865 79.53V30.854Z"
                  fill="#E5DFD9"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M30.1696 30.5937V17.7002C30.1696 -1.3442 59.3412 -2.44292 59.3412 17.7002V30.5937"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M28.6068 30.5935V17.7735C28.6068 -3.38975 60.904 -4.61071 60.904 17.7735V30.5935"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M69.4992 81.0918H57.7784"
                  stroke="#0C0C0C"
                  stroke-width="1.5"
                />
              </svg>

              <span>Bags</span>
            </div>

            <div className="flex flex-col items-center">
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
              >
                <path
                  d="M82.6476 40.5899C63.4014 38.4564 32.4729 38.6448 14.8655 40.5899C7.77536 41.3732 7.77536 42.429 6.42696 46.6682C2.5142 63.9306 1.53601 74.6285 1.53601 84.5969C1.53601 93.7893 8.90979 94.0173 14.8655 94.6406C24.1583 95.6131 74.6557 94.5654 83.4594 94.0791C92.2631 93.5928 94.464 91.0317 94.464 84.5969C94.464 76.7821 92.1083 52.6443 90.305 46.6682C89.1063 42.6956 88.887 41.2816 82.6476 40.5899Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M36.136 39.0238V32.2055C36.2306 31.2651 37.1003 29.3841 39.8229 29.3841C42.5456 29.3841 52.1126 29.3841 56.5557 29.3841C57.6902 29.3058 59.959 29.7603 59.959 32.2055C59.959 34.6507 59.959 37.7699 59.959 39.0238"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M41.241 48.3878H55.4213"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M21.9557 72.5074L21.9557 94.6406"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M73.5722 72.5074L73.5722 94.6406"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M63.7467 77.8989C63.7467 86.4178 56.8445 93.3231 48.3311 93.3231C39.8177 93.3231 32.9155 86.4178 32.9155 77.8989C32.9155 69.3799 39.8177 62.4747 48.3311 62.4747C56.8445 62.4747 63.7467 69.3799 63.7467 77.8989Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
              </svg>

              <span>Travel</span>
            </div>

            <div className="flex flex-col items-center">
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
              >
                <path
                  d="M1.72803 64.3198C1.91537 66.1469 3.86377 70.0752 9.0345 70.0752C14.2052 70.0752 63.6457 70.0752 87.7196 70.0752C89.5931 70.1665 93.1151 68.9241 94.464 64.3198"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M53.376 46.4638H42.816"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M34.7521 39.744C37.8554 28.2938 38.7018 27.456 41.523 27.456H56.4755C60.1431 27.456 59.5789 28.2938 62.4001 39.744"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M94.464 39.744H1.72803V89.0354C1.72803 92.6407 4.81923 95.232 7.91043 95.232H88.8437C93.34 95.232 94.464 90.5376 94.464 88.1904V39.744Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <rect
                  x="26.8979"
                  y="85.6498"
                  width="4.06801"
                  height="14.436"
                  transform="rotate(-180 26.8979 85.6498)"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <rect
                  x="70.6381"
                  y="59.31"
                  width="4.068"
                  height="9.636"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <rect
                  x="22.8301"
                  y="59.31"
                  width="4.068"
                  height="9.636"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <rect
                  x="74.7061"
                  y="85.6498"
                  width="4.06801"
                  height="14.436"
                  transform="rotate(-180 74.7061 85.6498)"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
              </svg>

              <span>Accesories</span>
            </div>

            <div className="flex flex-col items-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
              >
                <path
                  d="M86.4001 51.8789C61.7116 39.9039 17.0911 46.0044 4.86011 51.8789C6.67211 60.2388 17.5441 85.3184 20.7151 85.3184C27.0571 87.3519 65.3356 87.1259 71.9041 85.3184C74.8033 85.3184 84.3616 61.5944 86.4001 51.8789Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M38.88 51.6597H52.2"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M44.7102 27.2683C44.7105 27.2682 44.7095 27.2712 44.7065 27.2776C44.7086 27.2716 44.71 27.2684 44.7102 27.2683ZM44.4567 27.6084C44.4546 27.6107 44.4526 27.613 44.4505 27.6152C44.1455 27.9491 43.6381 28.3923 42.9405 28.9292C41.5542 29.9959 39.5261 31.3501 37.1602 32.8188C32.4331 35.7534 26.4264 39.1033 21.6749 41.4592C17.11 43.7226 13.0593 46.3752 10.0127 48.3704C9.84199 48.4822 9.67444 48.5919 9.51013 48.6994C8.19248 49.5613 7.10459 50.2641 6.26251 50.7387C6.63329 50.3938 7.08607 49.9998 7.61325 49.5633C9.39485 48.0882 11.9469 46.1929 14.8301 44.1861C20.6009 40.1695 27.6296 35.7537 32.3547 33.4109C34.5961 32.2995 36.47 31.3386 38.0406 30.5331C39.8448 29.6079 41.2489 28.8879 42.3504 28.3807C43.3714 27.9107 44.034 27.6723 44.4567 27.6084Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
              </svg>

              <span>Jewelery</span>
            </div>

            <div className="flex flex-col items-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
              >
                <path
                  d="M86.4001 51.8789C61.7116 39.9039 17.0911 46.0044 4.86011 51.8789C6.67211 60.2388 17.5441 85.3184 20.7151 85.3184C27.0571 87.3519 65.3356 87.1259 71.9041 85.3184C74.8033 85.3184 84.3616 61.5944 86.4001 51.8789Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M38.88 51.6597H52.2"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
                <path
                  d="M44.7102 27.2683C44.7105 27.2682 44.7095 27.2712 44.7065 27.2776C44.7086 27.2716 44.71 27.2684 44.7102 27.2683ZM44.4567 27.6084C44.4546 27.6107 44.4526 27.613 44.4505 27.6152C44.1455 27.9491 43.6381 28.3923 42.9405 28.9292C41.5542 29.9959 39.5261 31.3501 37.1602 32.8188C32.4331 35.7534 26.4264 39.1033 21.6749 41.4592C17.11 43.7226 13.0593 46.3752 10.0127 48.3704C9.84199 48.4822 9.67444 48.5919 9.51013 48.6994C8.19248 49.5613 7.10459 50.2641 6.26251 50.7387C6.63329 50.3938 7.08607 49.9998 7.61325 49.5633C9.39485 48.0882 11.9469 46.1929 14.8301 44.1861C20.6009 40.1695 27.6296 35.7537 32.3547 33.4109C34.5961 32.2995 36.47 31.3386 38.0406 30.5331C39.8448 29.6079 41.2489 28.8879 42.3504 28.3807C43.3714 27.9107 44.034 27.6723 44.4567 27.6084Z"
                  stroke="#E5DFD9"
                  stroke-width="1.5"
                />
              </svg>

              <span>Bags</span>
            </div>
          </ul>
          <img src={img2} alt="kj" />
          <Link to="/bags">
            <img src={im7} alt="kjhg" className=" mt-10" />
          </Link>
          <div className="   text-white  flex justify-center items-center  m-16">
            <div className="flex flex-col capitalize  space-y-12  text-center">
              <span className="text-2xl capitalize  tracking-[5px]">
                host Best party
              </span>
              <span className="capitalize  text-md tracking-[1px]">
                {" "}
                a good host good is haif job done
              </span>
            </div>
          </div>
          <Link to="/g">
            <img src={img8} className="mt-10" alt="kk" />
          </Link>
          <Link to="/jewe">
            <img src={img9} className="mt-7" alt="kj" />
          </Link>
          <Link>
            <img src={img10} className="" alt="kjh" />
          </Link>
        </div>

        {/* mobile */}

        {/* <tablet */}

        <div className=" hidden md:block lg:hidden">
          <div className="   text-white  flex justify-center items-center  m-16">
            <div className="flex flex-col capitalize  space-y-12  text-center">
              <span className="text-4xl capitalize  tracking-[5px]">
                host Best party
              </span>
              <span className="capitalize  text-xl tracking-[2px]">
                {" "}
                a good host good is haif job done
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-9">
            <img src={img8} className="w-[50%]"  alt="kjh" />
          </div>

          <div className="flex justify-center mt-10">
            <img src={img6} className="w-[50%]" alt = "jhg" />
          </div>
          <div className="flex justify-center mt-11">
            <img src={img9} className="w-[50%]"  alt = "jh" />
          </div>
        </div>

        {/* <tablet */}
      </section>

      <Footer />

      {/* <div className='banner '>
                <h1 className='flex justify-center bg-blue-500 capitalize md:text-3xl text-sm tracking-[5px] md:p-3 p-1 '>use code Myfirst  on checkout 10%</h1>
                
                <div className='w-full flex items-start justify-center'>
                <div className='  w-[70%] '>

                    <div className='banner_list  w-full '>
                        <div className='list flex items-baseline space-x-6'>
                            <div className=' flex flex-col  text-white '>
                                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-16'>
                                    <g clip-path="url(#clip0_2_693)">
                                        <path d="M22.5493 44.9998C31.5713 -11.3986 58.0736 -17.7701 69.0692 44.9998" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M69.0486 45H22.5631C20.0305 51.5027 14.8019 75.7418 45.6833 74.8796C78.1169 73.9742 70.274 49.6918 69.0486 45Z" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M20.8958 59.7339C20.1878 64.755 18.4863 75.8672 18.617 77.1843C18.8621 88.0496 26.1331 88.2965 35.5282 89.0373C44.3515 89.7331 59.6288 88.741 60.9359 88.5435C68.7788 87.885 72.6185 85.7448 72.6185 77.1843C72.2014 71.9985 72.038 70.8462 70.4041 59.7339" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M23.8416 45.0002C34.02 -13.6798 57.87 -11.8798 67.777 45.0002" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M57.2239 83.7002H65.8387" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M42.2256 74.8933V76.3671C42.2256 77.4717 43.121 78.3671 44.2256 78.3671H46.9957C48.1002 78.3671 48.9957 77.4717 48.9957 76.3671V74.7104" stroke="#E5DFD9" stroke-width="1.5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_693">
                                            <rect width="90" height="90" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className='text-sm'>Cuhsions</span>


                            </div>

                            <div className=' flex flex-col  text-white '>
                                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-16'>
                                    <g clip-path="url(#clip0_2_693)">
                                        <path d="M22.5493 44.9998C31.5713 -11.3986 58.0736 -17.7701 69.0692 44.9998" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M69.0486 45H22.5631C20.0305 51.5027 14.8019 75.7418 45.6833 74.8796C78.1169 73.9742 70.274 49.6918 69.0486 45Z" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M20.8958 59.7339C20.1878 64.755 18.4863 75.8672 18.617 77.1843C18.8621 88.0496 26.1331 88.2965 35.5282 89.0373C44.3515 89.7331 59.6288 88.741 60.9359 88.5435C68.7788 87.885 72.6185 85.7448 72.6185 77.1843C72.2014 71.9985 72.038 70.8462 70.4041 59.7339" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M23.8416 45.0002C34.02 -13.6798 57.87 -11.8798 67.777 45.0002" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M57.2239 83.7002H65.8387" stroke="#E5DFD9" stroke-width="1.5" />
                                        <path d="M42.2256 74.8933V76.3671C42.2256 77.4717 43.121 78.3671 44.2256 78.3671H46.9957C48.1002 78.3671 48.9957 77.4717 48.9957 76.3671V74.7104" stroke="#E5DFD9" stroke-width="1.5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_693">
                                            <rect width="90" height="90" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className='text-sm'>Tablewear</span>


                            </div>
                            <div className=' flex flex-col  text-white '>
                                <svg width="96" height="70" viewBox="0 0 96 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-16'>
                                    <path d="M1.72803 38.3198C1.91537 40.1469 3.86377 44.0752 9.0345 44.0752C14.2052 44.0752 63.6457 44.0752 87.7196 44.0752C89.5931 44.1665 93.1151 42.9241 94.464 38.3198" stroke="#E5DFD9" stroke-width="1.5" />
                                    <path d="M53.376 20.4638L42.816 20.4638" stroke="#E5DFD9" stroke-width="1.5" />
                                    <path d="M34.7521 13.744C37.8554 2.29381 38.7018 1.45599 41.523 1.45599H56.4755C60.1431 1.45599 59.5789 2.2938 62.4001 13.744" stroke="#E5DFD9" stroke-width="1.5" />
                                    <path d="M94.464 13.744H1.72803V63.0354C1.72803 66.6407 4.81923 69.232 7.91043 69.232H88.8437C93.34 69.232 94.464 64.5376 94.464 62.1904V13.744Z" stroke="#E5DFD9" stroke-width="1.5" />
                                    <rect x="26.8979" y="59.6498" width="4.06801" height="14.436" transform="rotate(-180 26.8979 59.6498)" stroke="#E5DFD9" stroke-width="1.5" />
                                    <rect x="70.6381" y="33.31" width="4.068" height="9.636" stroke="#E5DFD9" stroke-width="1.5" />
                                    <rect x="22.8301" y="33.31" width="4.068" height="9.636" stroke="#E5DFD9" stroke-width="1.5" />
                                    <rect x="74.7061" y="59.6498" width="4.06801" height="14.436" transform="rotate(-180 74.7061 59.6498)" stroke="#E5DFD9" stroke-width="1.5" />
                                </svg>

                                <span className='text-sm'>Home</span>


                            </div>
                            <div className=' flex flex-col  text-white  items-center'>
                                <svg width="96" height="70" viewBox="0 0 96 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-16'>
                                    <path d="M1.72803 38.3198C1.91537 40.1469 3.86377 44.0752 9.0345 44.0752C14.2052 44.0752 63.6457 44.0752 87.7196 44.0752C89.5931 44.1665 93.1151 42.9241 94.464 38.3198" stroke="#E5DFD9" stroke-width="1.5" />
                                    <path d="M53.376 20.4638L42.816 20.4638" stroke="#E5DFD9" stroke-width="1.5" />
                                    <path d="M34.7521 13.744C37.8554 2.29381 38.7018 1.45599 41.523 1.45599H56.4755C60.1431 1.45599 59.5789 2.2938 62.4001 13.744" stroke="#E5DFD9" stroke-width="1.5" />
                                    <path d="M94.464 13.744H1.72803V63.0354C1.72803 66.6407 4.81923 69.232 7.91043 69.232H88.8437C93.34 69.232 94.464 64.5376 94.464 62.1904V13.744Z" stroke="#E5DFD9" stroke-width="1.5" />
                                    <rect x="26.8979" y="59.6498" width="4.06801" height="14.436" transform="rotate(-180 26.8979 59.6498)" stroke="#E5DFD9" stroke-width="1.5" />
                                    <rect x="70.6381" y="33.31" width="4.068" height="9.636" stroke="#E5DFD9" stroke-width="1.5" />
                                    <rect x="22.8301" y="33.31" width="4.068" height="9.636" stroke="#E5DFD9" stroke-width="1.5" />
                                    <rect x="74.7061" y="59.6498" width="4.06801" height="14.436" transform="rotate(-180 74.7061 59.6498)" stroke="#E5DFD9" stroke-width="1.5" />
                                </svg>

                                <span className='text-sm'>Coin</span>


                            </div>


                        </div>






                    </div>




<hr className='mt-6'></hr>
<div  className='clothes_header'>
<div>
<span></span>
<svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="3" r="2.5" fill="#E5DFD9"/>
</svg>
<span></span>
</div>


</div>
                
                </div>
                

                </div>




            </div> */}
    </div>
  );
};

export default Homepage;

// ReactDOM.render(<Homepage/>, document.querySelector('.demo-carousel'));
