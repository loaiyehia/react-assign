// import pic from "../../assets/poert1"
import pic1 from "../../assets/avataaars.svg";

import { FaStar } from "react-icons/fa";


export default function Home() {
  return (
    <div className="text-center bg-[#1abc9c] flex flex-col items-center">
      <div className="image">
        <img src={pic1} className="w-5/6 m-auto py-11" alt="" />
      </div>
      <h1 className="text-white font-bold text-5xl">START FRAMWORK</h1>
      <div className="star py-7"> <FaStar className='text-white text-2xl'/></div>
      <p className="text-white pb-24">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
