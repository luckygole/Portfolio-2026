

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/70 backdrop-blur-lg shadow-lg" : "bg-transparent"} 
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Lucky.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <a 
                href={item.href} 
                className="text-sm text-gray-200 group-hover:text-white transition"
              >
                {item.name}
              </a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6"
          >
            <ul className="flex flex-col gap-5 pt-4">
              {navItems.map((item) => (
                <li 
                  key={item.name}
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-200 hover:text-purple-400 transition"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
