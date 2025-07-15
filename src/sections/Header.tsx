'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, FolderOpen, Mail, User, Download, Github, Linkedin } from "lucide-react";

const navItems = [
  { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { id: 'Projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
  { id: 'About', label: 'About', icon: <User className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl mx-auto px-2 bg-gray-950/80 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-500 transform scale-90"
      >
        <nav className="flex items-center justify-between py-3 px-4">
          <div
            onClick={handleScroll('home') as any}
            className="text-white font-bold text-xl cursor-pointer bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text"
          >
            Sarvan Kumar
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleScroll(item.id)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              key={isOpen ? 'close' : 'menu'}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </motion.div>
          </button>
        </nav>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-gray-950/98 border border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-2xl"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleScroll(item.id)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-white/20 space-y-3">
                <a
                  href="/resume.pdf"
                  download="SarvanKumar_Resume.pdf"
                  className="flex items-center gap-2 w-full px-4 py-3.5 border border-white/20 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>

                <div className="flex gap-2 pt-2">
                  <a
                    href="https://github.com/sarvan-2187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium text-white/80 hover:text-white transition"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/nagarampalli-sarvan-kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium text-white/80 hover:text-white transition"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </>
  );
}
