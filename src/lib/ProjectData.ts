import { IProjectCard } from "@/Types/type";
import { TechstackData } from "./data";

export const ProjectStaticData: IProjectCard[] = [
  {
    name: "Paint2-3d",
    desc: "A Saas which let you crate 3d model from you canvas creativity ",
    liveLink: "asdfj",
    gitHubLink: "asdsd",
    Techstack: [
      TechstackData.python,
      TechstackData.opencv,
      TechstackData.react,
      TechstackData.typescript,
    ],
  },
  {
    name: "MoneyBuddy",
    desc: "Developed a Dockerized financial app with PostgreSQL for secure, fast transaction tracking and interactive spending insights.",
    liveLink: "asdfj",
    gitHubLink: "asdsd",
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
    liveLink: "asdfj",
    gitHubLink: "asdsd",
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
    liveLink: "asdfj",
    gitHubLink: "asdsd",
    Techstack: [
      TechstackData.react,
      TechstackData.framermotion,
      TechstackData.appwrite,
      TechstackData.Javascript,
    ],
  },
];
