import { FaGithub ,FaJava} from "react-icons/fa";
import { FaXTwitter ,FaHashnode} from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMonitor } from "react-icons/md";

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
import { IBlogCard, IExperienceCard, ISkillCard } from "@/Types/type";

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
  


  export const BlogData:IBlogCard[]=[
    {
      title:'Ever wonder how Linux-based images can run on your Windows machine?',
      dateOfpublish:'24Jan 2025',
      color:"#2496ED",
      logo:<SiDocker className="w-4 h-8 z-2"  style={{ color: "#2496ED" ,width:"30px"}} />,
      link:"https://dev.to/sid04/ever-wonder-how-linux-based-images-can-run-on-your-windows-machine-4480",
      topic:"Docker Internal"
    },
    {
      title:'How to enable two way binding in react',
      dateOfpublish:'09Dec 2024',
      color:"#DA70D6",
      logo:<MdOutlineMonitor className="w-4 h-8 z-2"  style={{ color: "#DA70D6" ,width:"30px"}} />,
      link:"https://dev.to/sid04/how-to-enable-two-way-binding-in-react-3im3",
      topic:"React"
    }

  ]

  export const ExpData:IExperienceCard[]=[
    {
      positionTitle:'Backend Developer (contract)'
      ,companyName:"LibraryMitra",
      from:"Febuary 2025",
      to:"April 2025",
      imageURL:"https://ik.imagekit.io/librarymitra/librarymitra.png?tr=q-100,w-384,c-at_max",
      bgcolor:"white"
    },
    {
      positionTitle:'Frontend Developer (Intern)'
      ,companyName:"Acegrade",
      from:"September 2024",
      to:"January 2025",
      imageURL:"https://acegrade.in/_next/static/media/acegrade.9426eab7.svg",
      bgcolor:"black"
    }
  ]




  export const skillData:ISkillCard[]=[
    {
      name:"Languages",
      items:["Typescript","Go","Python","Java","Sql"]

    },
    {
      name:"Backend",
      items:["Express.js","Flask","Hono.js"]

    },
    {
      name:"Databases",
      items:["PostgreSQL","Redis","MongoDB","Firestore","SQLite"]

    },
    {
      name:"DevOps & Cloud",
      items:["Docker","Kubernetes","AWS","Terraform","Jenkins"]

    },
    {
      name:"Frontend",
      items:['React','Next.js','Tailwind CSS','Framer Motion','Redux','Tanstack Query']
    },
    {
      name:'Others',
      items:['Git','Prisma','gRPC','tRPC']
    }
  ]