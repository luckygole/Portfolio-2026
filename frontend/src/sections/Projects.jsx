import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"
import { motion } from "framer-motion"

import ide from "../assets/images/ide.png"
import codereview from "../assets/images/codereview.png"
import kota from "../assets/images/kota.png"
import imageenhancer from "../assets/images/imageenhancer.png"
import collegelibrary from "../assets/images/collegelibrary.png"
import spotify from "../assets/images/spotify.png"
import rejouice from "../assets/images/rejuice.png"
import fanta from "../assets/images/fanta.png"
import magma from "../assets/images/magma.png"
import earphone from "../assets/images/earphone.png"
import golf from "../assets/images/golf.png"
import tracker from "../assets/images/tracker.png"
import stayfinder from "../assets/images/stayfinder.png"
import prompthub from "../assets/images/prompthub.png"
import bhargava from "../assets/images/bhargava.png"
import shoes from "../assets/images/shoes.png"
import food from "../assets/images/food.png"
import netflix from "../assets/images/netflix.png"
import youtube from "../assets/images/youtube.png"
import auracafe from "../assets/images/auracafe.png"
import jewellery from "../assets/images/jewellery.png";


const projectsData = [
{
  id: 1,
  title: "Multi-Code IDE",
  category: "fullstack",
  image: ide,
  desc: "A cloud-based multi-language code editor that enables users to write, execute, and manage code projects directly in the browser. Built with a VS Code-like Monaco Editor, it supports multiple programming languages, secure authentication, and real-time execution using external APIs.",
  tech: "React (Vite), Node.js, Express, MongoDB, Tailwind CSS, Monaco Editor, Clerk Auth, Glot API",
  github: "https://github.com/luckygole/Multi-code-IDE",
  live: "https://multi-code-ide-pi.vercel.app/",
  features: [
    "Multi-language code execution (Python, JS, C, C++, Java, Bash)",
    "Monaco Editor (VS Code-like)",
    "Authentication with Clerk",
    "Project CRUD system",
    "Real-time code execution"
  ]
},

{
  id: 2,
  title: "Ganesh Jewellery",
  category: "freelancing",
  image: jewellery, // apni image import kar lena
  desc: "Developed a premium jewellery website with a modern and responsive design using React and Tailwind CSS. Implemented product showcase, category-based browsing, and smooth UI interactions to enhance user engagement. Integrated EmailJS for real-time communication and optimized the application for performance and scalability.",  
  tech: "React (Vite), Cashfree , Tailwind CSS, JavaScript, EmailJS",
  github: "https://github.com/luckygole/Ganesh-art-jewellery",
  live: "https://ganesh-jewellery.vercel.app/",
  features: [
    "Fully responsive modern UI design",
    "Product showcase with category-based browsing",
    "Smooth scrolling and interactive UI effects",
    "Contact form with EmailJS integration",
    "Optimized performance and fast loading"
  ]
},
{
  id: 3,
  title: "College Library System",
  category: "fullstack",
  image: collegelibrary,
  desc: "A full-stack library management system integrated with Google Drive for storing and accessing PDFs, providing a centralized platform for academic resources.",
  tech: "Node.js, Express, EJS, MongoDB, Google Drive",
  github: "https://github.com/luckygole/college-library",
  live: "https://college-library.onrender.com/home",
  features: [
    "PDF upload & management",
    "Google Drive integration",
    "EJS rendering",
    "Centralized study access"
  ]
},
{
  id: 4,
  title: "stayFinder",
  category: "fullstack",
  image: stayfinder,
  desc: "StayFinder is a modern full-stack property listing and booking platform inspired by apps like Airbnb. It allows users to explore listings, create properties, leave reviews, and interact with a real-world booking system — all built with a scalable architecture.",
  tech: "React, Tailwind, Node.js, MongoDB, Groq API",
  github: "https://github.com/luckygole/stayfinder",
  live: "listing-llhz.onrender.com/listings",
  features: [
    "Generate websites using AI prompts",
    "Dynamic frontend code generation",
    "Live preview system",
    "Backend AI processing"
  ]
},

{
  id: 5,
  title: "Prompt Hub",
  category: "fullstack",
  image: prompthub, // replace with your image variable
  desc: "A full-stack AI prompt sharing platform where users can create, explore, and manage prompts with authentication and real-time interactions. Designed with a modern UI and scalable backend architecture.",
  tech: "React, Node.js, Express, MongoDB, Tailwind CSS",
  github: "https://github.com/luckygole/Prompt-hub",
  live: "https://prompt-hub-one-bay.vercel.app/", // add live link if deployed
  features: [
    "User authentication system",
    "Create, edit & delete prompts",
    "Search and explore prompts",
    "Responsive modern UI",
    "REST API integration",
    "Secure backend with database"
  ]
},

{
  id: 6,
  title: "Kota Refrigeration Website",
  category: "freelancing",
  image: kota,
  desc: "A freelance frontend project developed for a refrigeration service business with a modern responsive design and integrated EmailJS contact system for seamless communication.",
  tech: "React, Tailwind CSS, EmailJS",
  github: " https://github.com/luckygole/Kota-Refrigeration",
  live: "https://kota-refrigeration.vercel.app/",
  features: [
    "Responsive business UI",
    "Service showcase",
    "EmailJS contact form",
    "Client-ready deployment"
  ]
},

{
  id: 7,
  title: "AI Image Enhancer",
  category: "frontend",
  image: imageenhancer,
  desc: "A React-based AI application that enhances image quality using Gemini AI, allowing users to upload, process, and download improved images in an interactive UI.",
  tech: "React, Tailwind CSS, Gemini API",
  github: "https://github.com/luckygole/Image-Enchancer",
  live: "https://image-enchancer-rho.vercel.app/",
  features: [
    "AI image enhancement",
    "Upload & download images",
    "Animated UI",
    "Fast API processing"
  ]
},

{
  id: 8,
  title: "AI Code Reviewer",
  category: "fullstack",
  image: codereview,
  desc: "A full-stack AI-powered code analysis tool that evaluates code and provides intelligent suggestions using OpenRouter AI, helping developers improve code quality and follow best practices.",
  tech: "React, Node.js, MongoDB, OpenRouter API",
  github: "https://github.com/luckygole/code-reviewer",
  live: "https://code-reviewer-dmjq.vercel.app/",
  features: [
    "AI-based code analysis",
    "Error detection & suggestions",
    "Real-time feedback",
    "Improves code quality"
  ]
},

{
  id: 9,
  title: "Bhargava Coaching Website",
  category: "freelancing",
  image: bhargava, // replace with your image variable
  desc: "A modern and responsive coaching institute website designed to showcase courses, faculty details, and student-focused features with an engaging UI for better user experience.",
  tech: "React, Tailwind CSS",
  github: "https://github.com/luckygole/Bhargava-coaching-",
  live: "https://bhargava-coaching.vercel.app/", // add if deployed
  features: [
    "Responsive coaching website UI",
    "Course and program showcase",
    "Modern landing page design",
    "Student-friendly interface",
    "Clean navigation system",
    "Optimized for all devices"
  ]
},

{
  id: 10,
  title: "Aura Cafe Website",
  category: "frontend",
  image: auracafe, // replace with your image variable
  desc: "A modern and responsive cafe website designed to showcase menu items, services, and brand identity with an attractive UI and smooth user experience.",
  tech: "HTML, CSS, JavaScript",
  github: "https://github.com/luckygole/Aura-cafe",
  live: "https://aura-cafe-one.vercel.app/", // add if deployed
  features: [
    "Responsive cafe website UI",
    "Menu and food showcase sections",
    "Modern landing page design",
    "Attractive visual layout",
    "Smooth navigation experience",
    "Mobile-friendly design"
  ]
},

// {
//   id: 11,
//   title: "Shoes Store Website",
//   category: "frontend",
//   image: shoes, // replace with your image variable
//   desc: "A modern and responsive shoe store website designed to showcase trending products, categories, and pricing with a clean and engaging e-commerce UI experience.",
//   tech: "HTML, CSS, JavaScript",
//   github: "https://github.com/luckygole/shoes-website-frontend",
//   live: "https://ear-buds-8uow-hxw3zfaci-lucky-goles-projects.vercel.app/",
//   features: [
//     "Responsive e-commerce UI",
//     "Product listing with pricing",
//     "Trending shoes section",
//     "Clean navigation system",
//     "Category-based display (sports, casual, formal)",
//     "Interactive buttons (Add to Cart / Buy Now)"
//   ]
// },

{
  id: 11,
  title: "Rejouice Clone",
  category: "clones",
  image: rejouice,
  desc: "A visually rich animated website clone built using GSAP, focusing on smooth transitions and creative UI interactions.",
  tech: "HTML, CSS, JS, GSAP",
  github: "https://luckygole.github.io/Rejouice/",
  live: "https://luckygole.github.io/Rejouice/",
  features: [
    "GSAP animations",
    "Modern UI",
    "Interactive design"
  ]
},

// {
//   id: 13,
//   title: "Fanta Can Animation Website",
//   category: "frontend",
//   image: fanta,
//   desc: "A modern frontend project showcasing smooth animations and transitions using GSAP.",
//   tech: "HTML, CSS, JS, GSAP",
//   github: "https://github.com/luckygole/Fanta-can-animation-",
//   live: "https://luckygole.github.io/Fanta-can-animation-/",
//   features: [
//     "Smooth animations",
//     "Interactive UI",
//     "Modern design"
//   ]
// },

{
  id: 12,
  title: "Magma Clone",
  category: "clones",
  image: magma,
  desc: "An animated website clone using Locomotive JS and GSAP, featuring smooth scrolling and advanced animation effects.",
  tech: "HTML, CSS, JS, GSAP, Locomotive",
  github: "https://github.com/Bhumika-Sahu-bit/magma.com",
  live: "https://bhumika-sahu-bit.github.io/magma.com/",
  features: [
    "Smooth scroll",
    "GSAP animations",
    "Creative UI"
  ]
},

// {
//   id: 15,
//   title: "Food Website",
//   category: "frontend",
//   image: food, // replace with your image variable
//   desc: "A modern and responsive food website designed to showcase delicious meals, categories, and menu items with an engaging UI and smooth user experience.",
//   tech: "HTML, CSS, JavaScript",
//   github: "https://github.com/luckygole/Food-website",
//   live: "https://luckygole.github.io/Food-website/", // add if deployed
//   features: [
//     "Responsive food UI design",
//     "Menu and category sections",
//     "Attractive food showcase",
//     "Smooth scrolling and layout",
//     "Clean and modern interface",
//     "Optimized for all screen sizes"
//   ]
// },



{
  id: 13,
  title: "Earphone Website",
  category: "frontend",
  image: earphone,
  desc: "A product showcase website highlighting earphones with a modern UI and interactive design.",
  tech: "HTML, CSS, JS",
  github: "https://github.com/luckygole/Ear-buds",
  live: "https://ear-buds-7rm33hvsb-lucky-goles-projects.vercel.app/",
  features: [
    "Product showcase",
    "Modern UI",
    "Interactive design"
  ]
},


// {
//   id: 17,
//   title: "Netflix Clone",
//   category: "frontend",
//   image: netflix, // replace with your image variable
//   desc: "A responsive Netflix-inspired web application that replicates the core UI of a modern streaming platform, featuring movie sections, banners, and an engaging user interface.",
//   tech: "HTML, CSS, JavaScript",
//   github: "https://github.com/luckygole/netflix-clone",
//   live: "https://luckygole.github.io/netflix-clone/", // add if deployed
//   features: [
//     "Netflix-inspired UI design",
//     "Hero banner with featured content",
//     "Movie and category sections",
//     "Responsive layout for all devices",
//     "Interactive hover effects",
//     "Clean and modern streaming UI"
//   ]
// },

{
  id: 14,
  title: "SidCup family Golf",
  category: "clones",
  image: golf,
  desc: "A modern animated golf-themed website built with GSAP focusing on interactive design.",
  tech: "HTML, CSS, JS, GSAP",
  github: "https://github.com/Bhumika-Sahu-bit/Golf-website",
  live: "https://bhumika-sahu-bit.github.io/Golf-website/",
  features: [
    "GSAP animations",
    "Modern UI",
    "Interactive sections"
  ]
},

// {
//   id: 19,
//   title: "Spotify Clone",
//   category: "clones",
//   image: spotify,
//   desc: "A frontend clone of Spotify built using HTML and CSS, replicating its layout and UI design.",
//   tech: "HTML, CSS",
//   github: "https://github.com/Bhumika-Sahu-bit/spotify-clone",
//   live: "https://bhumika-sahu-bit.github.io/spotify-clone/",
//   features: [
//     "UI replication",
//     "Clean layout",
//     "Responsive design"
//   ]
// },
{
  id: 15,
  title: "Real-Time Location Tracker",
  category: "fullstack",
  image: tracker, 
  desc: "A full-stack real-time location tracking web application that allows users to share and view live locations on an interactive map. Built using WebSockets for instant updates, it provides a seamless experience for tracking friends, teams, or devices in real time.",
  tech: "Node.js, Express.js, Socket.IO, EJS, Leaflet.js, HTML, CSS",
  github: "https://github.com/luckygole/real-time-location-tracker",
  live: "https://real-time-location-tracker-c3kd.onrender.com/",
  features: [
    "Real-time location tracking using Socket.IO",
    "Live location updates with WebSockets",
    "Interactive map integration using Leaflet.js",
    "Display multiple users' locations dynamically",
    "Browser-based geolocation support",
    "Responsive and clean user interface",
    "Fast and efficient real-time communication"
  ]
},
// {
//   id: 21,
//   title: "YouTube Clone",
//   category: "frontend",
//   image: youtube, // replace with your image variable
//   desc: "A responsive YouTube clone built to replicate the core UI of the YouTube platform, including video listings, navigation bar, and search interface for a realistic user experience.",
//   tech: "HTML, CSS, JavaScript",
//   github: "https://github.com/luckygole/Youtube-clone",
//   live: "https://luckygole.github.io/Youtube-clone/",
//   features: [
//     "YouTube-inspired UI design",
//     "Responsive video grid layout",
//     "Navigation bar with sidebar",
//     "Search bar interface",
//     "Video thumbnails with details",
//     "Clean and modern layout"
//   ]
// }
]

const filters = ["all", "freelancing", "fullstack", "frontend", "clones"]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4">

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((f, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full border transition capitalize
              ${
                activeFilter === f
                  ? "bg-purple-500 text-white"
                  : "border-gray-500 text-gray-300 hover:bg-purple-500/20"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects