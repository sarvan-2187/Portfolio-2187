'use client';
import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -30;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.1 }}
      className="flex justify-center items-center fixed top-3 w-full z-10"
    >
      <nav className="flex gap-1 sm:gap-0 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur lg:p-1">
        <a href="#home" className="nav-item" onClick={handleScroll("home")}>
          Home
        </a>
        <a href="#Projects" className="nav-item" onClick={handleScroll("Projects")}>
          Projects
        </a>
        <a href="#About" className="nav-item" onClick={handleScroll("About")}>
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          onClick={handleScroll("contact")}
        >
          Contact
        </a>
      </nav>
    </motion.div>
  );
};
