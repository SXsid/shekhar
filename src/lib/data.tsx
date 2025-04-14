import { FaGithub } from "react-icons/fa";
import { FaXTwitter ,FaHashnode} from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

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
