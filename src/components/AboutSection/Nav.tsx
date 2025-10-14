"use client";
import { useRouter } from "next/navigation";
function Nav() {
  const router = useRouter();
  const handlerclick = (routeName: string) => {
    router.push(routeName);
  };

  const className =
    "px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white italic rounded-lg cursor-pointer transition-colors duration-300";
  return (
    <div className="flex justify-around text-xs md:text-lg w-full mb-10">
      {" "}
      <button onClick={() => handlerclick("/projects")} className={className}>
        Projects
      </button>
      <button onClick={() => handlerclick("/blogs")} className={className}>
        Blogs
      </button>
    </div>
  );
}

export default Nav;
