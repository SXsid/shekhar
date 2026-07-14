import React from "react";
import { FaLaptopCode, FaBook, FaPenNib, FaBriefcase } from "react-icons/fa";

const navItems = [
  { name: "Projects", icon: <FaLaptopCode />, route: "/projects" },
  { name: "Blogs",    icon: <FaPenNib />,     route: "/blogs"    },
  { name: "Shelf",    icon: <FaBook />,        route: "/shelf"    },
  { name: "Contact",  icon: <FaBriefcase />,   route: "mailto:contact.sidshekhar@gmail.com" },
];

export default function Nav() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full md:w-[800px] mb-12 px-4 md:px-0">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.route}
          className="flex items-center gap-2.5 px-4 py-3 rounded border border-[var(--border)] bg-[var(--bg-card)] text-[var(--fg-muted)] text-sm hover:text-[var(--fg)] hover:border-[var(--fg-muted)] transition-colors"
        >
          <span className="opacity-70 flex-shrink-0">{item.icon}</span>
          <span className="font-medium">{item.name}</span>
        </a>
      ))}
    </div>
  );
}
