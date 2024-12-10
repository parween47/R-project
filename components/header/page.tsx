"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle , FaProjectDiagram } from "react-icons/fa";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavVisible,SetNavVisible] = useState(true)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems: {
    id: string;
    label: string;
    icon: JSX.Element;
}[] = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaInfoCircle /> },
    { id: "project", label: "Projects", icon: <FaProjectDiagram /> },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    SetNavVisible((prev)=>!prev)
  };



  return (
    <>
      <header className="navBar">
        <div
          className="logo curved-logo"
          onClick={() => handleScroll("home")}
          style={{ cursor: "pointer" }}
        >
          UBAID<span> QURESHI</span>
        </div>
        
        <ul>
                {navItems.map((item) => (
          <li 
            key={item.id} 
            className={isNavVisible ? "visible-item" : "hidden-item"}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.id);
              }}
              style={{ cursor: "pointer" }}
            >
              {item.label}
            </a>
          </li>
        ))}

          <li id="menu">
            <button onClick={toggleSidebar}>
              <FaBars />
            </button>
          </li>
        </ul>
      </header>

      {isSidebarOpen && (
        <div
          className="slide-in-right fixed top-0 right-0 h-full w-[27%] bg-black bg-opacity-80 backdrop-blur-sm text-white z-50 shadow-lg"
        >
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <ul className="mt-16 space-y-4 divide-y divide-gray-600">
            {navItems.map((item) => (
              <li key={item.id} className="py-4 text-center flex items-center justify-center gap-4">
                <span className="text-lg">{item.icon}</span>
                <a
                  className="cursor-pointer hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                    toggleSidebar();
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
