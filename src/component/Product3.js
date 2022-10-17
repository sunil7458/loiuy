import React from 'react'
import { Link } from 'react-router-dom'
import { UsestateValue } from './Context'

const Product3 = ({plpimaage , title , price}) => {
    const [ {basket},dispatch]  =  UsestateValue()
    const Add = ( ) => {
dispatch({
type:"ADD",
payload:{
plpimaage:plpimaage,
title:title

}


})

    }
  return (
    <>
 <div className="bg-[#141414] lg:w-[90%] w-full   text-white  rounded-md">
      <div className="flex text-white  ">
       <Link   to="/buy" className="w-full">
       
       <img
          src={plpimaage}
          alt="lkj"
          className=" object-cover w-full xl:h-[50vh] h-[40vh] "
        />
       </Link>
        <svg
          className="absolute"
          width="27"
          height="35"
          viewBox="0 0 27 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2028 0.188966C24.0703 0.188966 24.8043 0.522605 25.4715 1.12315C26.0721 1.79043 26.4057 2.52444 26.4057 3.3919V34.3536L13.594 26.8801L0.782262 34.3536V3.3919C0.782262 2.52444 1.04917 1.79043 1.71645 1.12315C2.317 0.522605 3.05101 0.188966 3.98519 0.188966H23.2028ZM24.2704 30.6168V3.3919C24.2704 3.12499 24.137 2.85808 23.9368 2.65789C23.7366 2.45771 23.4697 2.32425 23.2028 2.32425H3.98519C3.65156 2.32425 3.38464 2.45771 3.18446 2.65789C2.98428 2.85808 2.91755 3.12499 2.91755 3.3919V30.6168L13.594 24.4111L24.2704 30.6168Z"
            fill="#0C0C0C"
          />
        </svg>
      </div>

      <div className="text-[13px] p-1">{title}</div>
      <div className="flex  justify-between p-1 ">
        <div className="flex text-[14px]  items-center  space-x-2 p-1">
          <svg
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[10px]"
          >
            <path
              d="M11.8009 2.71847H8.66198C9.14776 3.31635 9.48407 4.02633 9.70827 4.81105H11.8009C11.913 4.81105 12.0251 4.88579 12.0998 4.96052C12.1745 5.03526 12.2493 5.14736 12.2493 5.25946V6.15628C12.2493 6.30575 12.1745 6.41786 12.0998 6.49259C12.0251 6.56733 11.913 6.60469 11.8009 6.60469H9.85774C9.78301 8.13676 9.25986 9.36989 8.28831 10.3041C7.31675 11.2383 6.08362 11.6867 4.58892 11.6867H4.10314L10.1193 16.8808C10.2688 17.0302 10.3435 17.1797 10.2688 17.3665C10.1941 17.5908 10.0446 17.6655 9.82038 17.6655H7.54096C7.42885 17.6655 7.31675 17.6281 7.24202 17.5534L0.441122 11.6867C0.329019 11.6119 0.291652 11.4998 0.291652 11.3504V10.0425C0.291652 9.93041 0.329019 9.8183 0.403754 9.74357C0.478489 9.66883 0.590592 9.5941 0.740062 9.5941H4.21524C5.14943 9.5941 5.89678 9.33252 6.49466 8.80938C7.05518 8.28623 7.39149 7.53888 7.46622 6.60469H0.740062C0.590592 6.60469 0.478489 6.56733 0.403754 6.49259C0.329019 6.41786 0.291652 6.30575 0.291652 6.15628V5.25946C0.291652 5.14736 0.329019 5.03526 0.403754 4.96052C0.478489 4.88579 0.590592 4.81105 0.740062 4.81105H7.20465C6.98044 4.25054 6.60677 3.80213 6.08362 3.50319C5.56048 3.20425 4.9626 3.01741 4.25261 3.01741H0.740062C0.590592 3.01741 0.478489 2.98004 0.403754 2.90531C0.329019 2.83057 0.291652 2.71847 0.291652 2.569V1.37324C0.291652 1.26113 0.329019 1.14903 0.403754 1.0743C0.478489 0.999561 0.590592 0.924826 0.740062 0.924826H11.8009C11.913 0.924826 12.0251 0.999561 12.0998 1.0743C12.1745 1.14903 12.2493 1.26113 12.2493 1.37324V2.27006C12.2493 2.41953 12.1745 2.53163 12.0998 2.60637C12.0251 2.6811 11.913 2.71847 11.8009 2.71847Z"
              fill="#E5DFD9"
            />
          </svg>
          <span></span>
          <del className="text-[13px] "></del>

          <span className="text-[12px] text-green-500">56% off</span>
        </div>
        <div className="relative mb-6">
          <svg
            onClick={Add}
            width="31"
            height="36"
            viewBox="0 0 31 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-6 mr-3 w-6  hover:bg-orange-400 cursor-pointer"
          >
            <path
              d="M24.3317 9.02818H30.8529V29.6788C30.8529 31.1732 30.3095 32.4639 29.2226 33.5507C28.1357 34.6376 26.913 35.1131 25.4186 35.1131H5.85486C4.36041 35.1131 3.06975 34.6376 1.98287 33.5507C0.896002 32.4639 0.420495 31.1732 0.420495 29.6788V9.02818H6.94173C6.94173 7.4658 7.28138 6.03928 8.09653 4.68069C8.84375 3.3221 9.8627 2.30316 11.2213 1.48801C12.5799 0.740783 14.0064 0.333206 15.6367 0.333206C17.1991 0.333206 18.6256 0.740783 19.9842 1.48801C21.3428 2.30316 22.3617 3.3221 23.1769 4.68069C23.9241 6.03928 24.3317 7.4658 24.3317 9.02818ZM15.6367 2.50695C13.8026 2.50695 12.2402 3.18625 11.0175 4.40898C9.72684 5.69964 9.11547 7.26202 9.11547 9.02818H22.1579C22.1579 7.26202 21.4786 5.69964 20.2559 4.40898C18.9653 3.18625 17.4029 2.50695 15.6367 2.50695ZM28.6792 29.6788V11.2019H24.3317V14.4625C24.3317 14.8022 24.1958 15.0739 23.992 15.2777C23.7882 15.4815 23.5165 15.5494 23.2448 15.5494C22.9052 15.5494 22.6334 15.4815 22.4297 15.2777C22.2259 15.0739 22.1579 14.8022 22.1579 14.4625V11.2019H9.11547V14.4625C9.11547 14.8022 8.97961 15.0739 8.77582 15.2777C8.57204 15.4815 8.30032 15.5494 8.0286 15.5494C7.68895 15.5494 7.41723 15.4815 7.21345 15.2777C7.00966 15.0739 6.94173 14.8022 6.94173 14.4625V11.2019H2.59424V29.6788C2.59424 30.6298 2.86596 31.377 3.54525 31.9884C4.15662 32.6677 4.90384 32.9394 5.85486 32.9394H25.4186C26.3016 32.9394 27.0489 32.6677 27.7282 31.9884C28.3395 31.377 28.6792 30.6298 28.6792 29.6788Z"
              fill="#E5DFD9"
            />
          </svg>
          {

basket?.filter(data => data?.title === title)?.length  ?  (
<span className="bg-black top-[24px] right-[2px] w-6 h-6 rounded-full  flex justify-center text-sm absolute   ">{basket?.filter(data => data?.title === title)?.length}</span>

) : (
""

)

          }
          </div>
      </div>
    </div>

    </>
  )
}

export default Product3