import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import './App.css';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      {/* <div className="pt-24"></div> */}
    </div>
  )
}

export default App