import { IProjectCard } from "@/Types/type";
import { TechstackData } from "./data";

export const ProjectStaticData: IProjectCard[] = [
  {
    name: "KitsuDB(working)",
    desc: "An in-memory cache database written in Go that implements the Redis RESP protocol, using an event-loop architecture for concurrency,",
    gitHubLink: "https://github.com/SXsid/KitsuDB",
    Techstack: [TechstackData.go, TechstackData.c],
  },
  {
    name: "RootLessRaft(working)",
    desc: "A naive implementation of a Docker-like container in go on linux.",
    gitHubLink: "https://github.com/SXsid/Rootless-Raft",
    Techstack: [TechstackData.go, TechstackData.c],
  },
  {
    name: "Mirrorly(working)",
    desc: "Mirrorly is an extension that lets you see yourself in every outfit online. AI-powered virtual try-ons for your favorite stores.Resources",
    gitHubLink: "https://github.com/SXsid/Mirrorly",
    Techstack: [TechstackData.Javascript, TechstackData.python],
  },
  {
    name: "GOMON",
    desc: "gomon – A minimal Go-powered nodemon alternative. Watches your files, rebuilds, and reruns your app on change. Fast, focused, and just enough.",
    gitHubLink: "https://github.com/SXsid/gomon",
    Techstack: [TechstackData.go],
  },
  {
    name: "GLSP",
    desc: "glsp is a basic Go-based implementation of the Language Server Protocol .",
    gitHubLink: "https://github.com/SXsid/glsp",
    Techstack: [TechstackData.go],
  },
  {
    name: "MoneyBuddy",
    desc: "Developed a Dockerized financial app with PostgreSQL for secure, fast transaction tracking and interactive spending insights.",
    liveLink: "https://moneybuddy.shekharx.in/dashbord",
    gitHubLink: "https://github.com/SXsid/MoneyBuddy",
    Techstack: [
      TechstackData.nextjs,
      TechstackData.typescript,
      TechstackData.postgresql,
      TechstackData.docker,
    ],
  },
  {
    name: "Online-Pal",
    desc: "Built a real-time chat app using WebSockets and Redis Pub/Sub for low-latency messaging and scalable performance. ",
    liveLink: "https://onlinepal.shekharx.in/",
    gitHubLink: "https://github.com/SXsid/Online-Pal",
    Techstack: [
      TechstackData.socketio,
      TechstackData.redis,
      TechstackData.typescript,
      TechstackData.nodejs,
    ],
  },
  {
    name: "Crafter.ai",
    desc: "Built a responsive article publishing platform with Redux-based state management and AI-assisted content suggestions.",
    liveLink: "https://carfterai.shekharx.in/",
    gitHubLink: "https://github.com/SXsid/ArticleCrafter",
    Techstack: [
      TechstackData.react,
      TechstackData.framermotion,
      TechstackData.appwrite,
      TechstackData.Javascript,
    ],
  },
];
