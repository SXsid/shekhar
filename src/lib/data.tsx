import { FaGithub ,FaJava} from "react-icons/fa";
import { FaXTwitter ,FaHashnode} from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import {
  SiPython,
  SiTypescript,
  SiGo,
  SiAmazon,
  SiRedis,
  SiDocker,
  SiPostgresql,
  SiGooglecloud,
  SiMongodb,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiOpencv,
  SiSocketdotio,
  SiTailwindcss,
  SiAppwrite,
  SiFramer,
  SiJavascript,
  SiNodedotjs

  
} from "react-icons/si";

import React from "react";

export const docData: { title: string; icon: React.ReactNode; href: string }[] =
  [
    {
      title: "GitHub",
      icon: <FaGithub/>,
      href: "https://github.com/SXsid",
    },
    {
      title: "LinkedIn",
      icon: <CiLinkedin/>,
      href: "https://www.linkedin.com/in/shekharsid/",
    },
    {
      title: "Twitter",
      icon: <FaXTwitter/>,
      href: "https://x.com/shekharTwts",
    },
    {
      title: "Blog",
      icon: <FaHashnode/>,
      href: "https://dev.to/sid04",
    },
    {
      title: "Email",
      icon: <IoMailUnreadOutline/>,
      href: "mailto:contact.sidshekhar@gmail.com",
    },
  ];



  export const TechstackData = {
    nodejs: {
      name: "Node.js",
      icon: <SiNodedotjs style={{ color: "#68A063" }} />,
      link: "https://nodejs.org/",
    },
    python: {
      name: "Python",
      icon: <SiPython style={{ color: "#3776AB" }} />,
      link: "https://www.python.org/",
    },
    typescript: {
      name: "TypeScript",
      icon: <SiTypescript style={{ color: "#3178C6" }} />,
      link: "https://www.typescriptlang.org/",
    },
    Javascript: {
      name: "JavaScript",
      icon: <SiJavascript style={{ color: "#F7DF1E" }} />,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    go: {
      name: "Go",
      icon: <SiGo style={{ color: "#00ADD8" }} />,
      link: "https://go.dev/",
    },
    aws: {
      name: "AWS",
      icon: <SiAmazon style={{ color: "#FF9900" }} />,
      link: "https://aws.amazon.com/",
    },
    redis: {
      name: "Redis",
      icon: <SiRedis style={{ color: "#DC382D" }} />,
      link: "https://redis.io/",
    },
    docker: {
      name: "Docker",
      icon: <SiDocker style={{ color: "#2496ED" }} />,
      link: "https://www.docker.com/",
    },
    postgresql: {
      name: "PostgreSQL",
      icon: <SiPostgresql style={{ color: "#336791" }} />,
      link: "https://www.postgresql.org/",
    },
    firestore: {
      name: "Firestore",
      icon: <SiGooglecloud style={{ color: "#FFA611" }} />,
      link: "https://firebase.google.com/docs/firestore",
    },
    mongodb: {
      name: "MongoDB",
      icon: <SiMongodb style={{ color: "#47A248" }} />,
      link: "https://www.mongodb.com/",
    },
    flask: {
      name: "Flask",
      icon: <SiFlask style={{ color: "#000000" }} />,
      link: "https://flask.palletsprojects.com/",
    },
    react: {
      name: "React",
      icon: <SiReact style={{ color: "#61DAFB" }} />,
      link: "https://reactjs.org/",
    },
    nextjs: {
      name: "Next.js",
      icon: <SiNextdotjs style={{ color: "#ffffff" }} />,
      link: "https://nextjs.org/",
    },
    c: {
      name: "C",
      icon: <SiC style={{ color: "#A8B9CC" }} />,
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    cpp: {
      name: "C++",
      icon: <SiCplusplus style={{ color: "#00599C" }} />,
      link: "https://isocpp.org/",
    },
    java: {
      name: "Java",
      icon: <FaJava style={{ color: "#007396" }} />,
      link: "https://www.java.com/",
    },
    opencv: {
      name: "OpenCV",
      icon: <SiOpencv style={{ color: "#5C3EE8" }} />, // Custom pick close to OpenCV brand
      link: "https://opencv.org/",
    },
    socketio: {
      name: "Socket.IO",
      icon: <SiSocketdotio style={{ color: "#ffffff" }} />,
      link: "https://socket.io/",
    },
    tailwind: {
      name: "Tailwind CSS",
      icon: <SiTailwindcss style={{ color: "#38B2AC" }} />,
      link: "https://tailwindcss.com/",
    },
    framermotion: {
      name: "Framer Motion",
      icon: <SiFramer style={{ color: "#E10098" }} />,
      link: "https://www.framer.com/motion/",
    },
    appwrite: {
      name: "Appwrite",
      icon: <SiAppwrite style={{ color: "#F02E65" }} />, // Appwrite's primary brand color
      link: "https://appwrite.io/",
    },
  };
  