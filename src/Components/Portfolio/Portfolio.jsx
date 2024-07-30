import { FaPlus, FaStar } from "react-icons/fa";
import pic1 from "../../assets/poert1.png";
import pic2 from "../../assets/port2.png";
import pic3 from "../../assets/port3.png";

import { useState } from "react";

export default function Portfolio() {
  const [pic, setPic] = useState();

  // function loop(){
  //   const imgList = document.querySelectorAll("img")
  //   console.log(imgList)
  // }
  // loop()
  function dis(e) {
    // document.getElementById("image").classList.add("opacity-0")
    // console.log(e.target)
    document.getElementById("lightbox").classList.replace("hidden", "flex");
    setPic(e.target.previousSibling.getAttribute("src"));
  }
  function hidden(e) {
    console.log(e);
    e.stopPropagation();
    document.getElementById("lightbox").classList.replace("flex", "hidden");
  }
  return (
    <>
      <div>
        <div className="bg-white flex flex-col justify-center items-center pt-6">
          <h1 className="text-[#2C3E50] pb-3 text-4xl font-bold">
            PORTFOLIO COMPONENT
          </h1>
          <div className="star1">
            <FaStar classname="text-[#2C3E50] text-2xl " />
          </div>
        </div>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-10/12 m-auto py-5">
          <div className="relative group rounded overflow-hidden">
            <img src={pic1} alt="" />
            <div
              onClick={(e) => {
                dis(e);
              }}
              id="image"
              className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center"
            >
              <h2 className="text-white text-8xl font-bold">
                <FaPlus></FaPlus>
              </h2>
            </div>
          </div>
          <div className="relative group rounded overflow-hidden">
            <img src={pic2} alt="" />
            <div
              onClick={(e) => {
                dis(e);
              }}
              id="image"
              className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center"
            >
              <h2 className="text-white text-8xl font-bold">
                <FaPlus></FaPlus>
              </h2>
            </div>
          </div>
          <div className="relative group rounded overflow-hidden">
            <img src={pic3} alt="" />
            <div
              onClick={(e) => {
                dis(e);
              }}
              id="image"
              className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center"
            >
              <h2 className="text-white text-8xl font-bold">
                <FaPlus></FaPlus>
              </h2>
            </div>
          </div>
          <div className="relative group rounded overflow-hidden">
            <img src={pic1} alt="" />
            <div
              onClick={(e) => {
                dis(e);
              }}
              id="image"
              className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center"
            >
              <h2 className="text-white text-8xl font-bold">
                <FaPlus></FaPlus>
              </h2>
            </div>
          </div>
          <div className="relative group rounded overflow-hidden">
            <img src={pic2} alt="" />
            <div
              onClick={(e) => {
                dis(e);
              }}
              id="image"
              className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center"
            >
              <h2 className="text-white text-8xl font-bold">
                <FaPlus></FaPlus>
              </h2>
            </div>
          </div>
          <div className="relative group rounded overflow-hidden">
            <img src={pic3} alt="" />
            <div
              onClick={(e) => {
                dis(e);
              }}
              id="image"
              className="layer w-full h-full top-0 opacity-0 bg-[#1ABA9F] absolute  group-hover:opacity-80 duration-500 flex justify-center items-center"
            >
              <h2 className="text-white text-8xl font-bold">
                <FaPlus></FaPlus>
              </h2>
            </div>
          </div>
        </section>
      </div>

      <div
        id="lightbox"
        onClick={(e) => {
          hidden(e);
        }}
        className=" hidden justify-center items-center top-0 bottom-0 start-0 end-0 fixed bg-[#ffffff77]"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" flex justify-center items-center w-1/2 h-3/4 relative"
        >
          <img src={pic} alt="" />
        </div>
      </div>
    </>
  );
}
