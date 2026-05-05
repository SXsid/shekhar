import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";

function Hero() {
  return (
    <div className="md:w-[800px] m-12 md:mx-0 h-auto flex md:mb-16 mb-10 md:mt-28 mt-16 md:p-8 p-4 md:gap-6 gap-4 z-10 items-center relative border border-dashed border-neutral-300 bg-white/40">
      <div className="absolute top-[-8px] left-[-8px] z-10 w-4 h-4 bg-white border border-neutral-300 rounded-full flex justify-center items-center shadow-sm">
        <div className="bg-orange-500 rounded-full w-1 h-1"></div>
      </div>
      <div className="absolute top-[-8px] right-[-8px] z-10 w-4 h-4 bg-white border border-neutral-300 rounded-full flex justify-center items-center shadow-sm">
        <div className="bg-orange-500 rounded-full w-1 h-1"></div>
      </div>
      <div className="absolute bottom-[-8px] left-[-8px] z-10 w-4 h-4 bg-white border border-neutral-300 rounded-full flex justify-center items-center shadow-sm">
        <div className="bg-orange-500 rounded-full w-1 h-1"></div>
      </div>
      <div className="absolute bottom-[-8px] right-[-8px] z-10 w-4 h-4 bg-white border border-neutral-300 rounded-full flex justify-center items-center shadow-sm">
        <div className="bg-orange-500 rounded-full w-1 h-1"></div>
      </div>
      <div className=" left-6 md:w-24 md:h-24 w-16 h-16">
        <img
          src={
            "https://i.ibb.co/spWbbdZM/Screenshot-from-2025-12-23-03-19-13.png"
          }
          width={120}
          height={120}
          alt="myImage"
          className="rounded-xl border-2 border-neutral-800 object-cover"
        />
      </div>

      <div className="flex justify-between flex-1  text-md ">
        <div className="flex flex-col md:gap-4 gap-2 items-start">
          <h1 className="md:text-xl text-md font-display font-semibold text-[#333333]">
            Sudhanshu Shekhar
          </h1>
          <div className="flex gap-2 items-center text-neutral-600 ">
            <MdOutlineLocationOn className="text-neutral-500  " />
            <p className="text-neutral-600">Delhi, India</p>
          </div>

          <div className="flex gap-2 items-center text-neutral-600 cursor-pointer group">
            <IoMailUnreadOutline className="text-neutral-500  group-hover:text-[#333333]" />
            <a
              href={"mailto:contact.sidshekhar@gmail.com"}
              className="group-hover:text-[#333333] transition-colors"
            >
              contact.sidshekhar@gmail.com
            </a>
          </div>

          <div className="flex gap-2 items-center text-neutral-600 group cursor-pointer">
            <CiLinkedin className="text-neutral-500 group-hover:text-[#333333]" />
            <a
              href={"https://www.linkedin.com/in/shekharsid/"}
              target="_blank"
              className="group-hover:text-[#333333] transition-colors"
            >
              shekharsid
            </a>
          </div>
          <h4 className="text-neutral-700 font-medium font-sans text-md mt-2">
            Backend and Infrastructure guy
          </h4>
        </div>

        <div className=" gap-4 h-fit hidden md:flex">
          <a
            target="_blank"
            href="https://github.com/SXsid"
            className="w-10 h-10 flex justify-center items-center bg-white border border-neutral-300 text-neutral-700 rounded-md hover:bg-neutral-100 hover:text-black transition-colors shadow-sm"
          >
            <FaGithub size={18} />
          </a>
          <a
            target="_blank"
            href="https://x.com/shekharTwts"
            className="w-10 h-10 flex justify-center items-center bg-white border border-neutral-300 text-neutral-700 rounded-md hover:bg-neutral-100 hover:text-black transition-colors shadow-sm"
          >
            <FaXTwitter size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
