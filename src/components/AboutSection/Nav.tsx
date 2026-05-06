import React from "react";
import { FaLaptopCode, FaBook, FaPenNib, FaBriefcase } from "react-icons/fa";

function Nav() {
  const handlerclick = (routeName: string) => {
    window.location.href = routeName;
  };

  const navItems = [
    {
      name: "Projects",
      icon: <FaLaptopCode />,
      route: "/projects",
      color: "bg-[#fdf6e3] border-[#eee8d5] text-[#586e75]",
      rotate: "-rotate-1",
    },
    {
      name: "Blogs",
      icon: <FaPenNib />,
      route: "/blogs",
      color: "bg-[#fdf6e3] border-[#eee8d5] text-[#586e75]",
      rotate: "rotate-2",
    },
    {
      name: "Shelf",
      icon: <FaBook />,
      route: "/shelf",
      color: "bg-[#fdf6e3] border-[#eee8d5] text-[#586e75]",
      rotate: "-rotate-2",
    },
    {
      name: "Contact",
      icon: <FaBriefcase />,
      route: "mailto:contact.sidshekhar@gmail.com",
      color: "bg-[#fdf6e3] border-[#eee8d5] text-[#586e75]",
      rotate: "rotate-1",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full md:w-[800px] mb-16 mx-4 md:mx-0 px-4 md:px-0">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handlerclick(item.route)}
          className={`flex flex-col  cursor-pointer items-center justify-center p-6 border border-dashed hover:border-solid shadow-sm hover:shadow-md transition-all duration-300 ${item.color} ${item.rotate} hover:rotate-0 hover:-translate-y-1 relative`}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-neutral-200/50 rounded-full"></div>
          <div className="text-3xl mb-3 opacity-80">{item.icon}</div>
          <span className="font-display font-medium text-sm md:text-base">
            {item.name}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Nav;
