import ExperienceCard from "../components/ExperienceCard"
import certificate from "../assets/icons/Certificate.pdf";

const experiences = [
  {
  date: "Dec 2024 - Mar 2025",
  role: "PHP Full Stack Developer Intern",
  company: "UMID Infotech",
  desc: "Completed a full-stack web development internship where I worked on real-world projects. Built responsive front-end components, developed backend features using PHP & MySQL, integrated APIs, and optimized applications for performance while following clean coding practices.",
  tech: ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "Laravel"],
  certificate: certificate,
},
// {
//   date: "2025",
//   role: "Freelance",
//   company: "Ganesh Jewellery",
//   desc: "Developed a premium jewellery e-commerce website using modern technologies with a focus on performance and user experience. Built a fully responsive UI with product showcase, category navigation, and smooth interactions. Integrated EmailJS for contact functionality and optimized the application for fast loading and scalability.",
//   tech: ["React", "Tailwind CSS", "JavaScript", "EmailJS"],
//   live: "https://ganesh-jewellery.vercel.app/",
//   github: "https://github.com/luckygole/Ganesh-art-jewellery"
// },
{
  date: "2025",
  role: "Freelance Full Stack Developer",
  company: "Ganesh Art Jewellery",
  desc: "Designed and developed a production-ready full-stack jewellery e-commerce platform for a real client. Implemented secure payment integration, authentication system, and a complete admin dashboard for managing products, categories, users, and orders. Built a scalable architecture with category and subcategory-based product management, notification system, and optimized performance for real-world usage.",
  
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cashfree Payments", "JWT/Auth", "EmailJS"],
  
  live: "https://ganesh-jewellery.vercel.app/user",
  github: "https://github.com/luckygole/Ganesh-art-jewellery"
},
 {
  date: "2025",
  role: "Freelance",
  company: "Kota Refrigeration",
  desc: "Developed a responsive business website for a refrigeration service client. Implemented modern UI design, service showcase, and a functional contact system using EmailJS for real-time communication.",
  tech: ["React", "Tailwind CSS", "EmailJS"],
  live: "https://kota-refrigeration.vercel.app/"
},
  {
  date: "2025",
  role: "Full Stack Developer",
  company: "Multi-Code IDE",
  desc: "Developed a cloud-based multi-language code editor that allows users to write and execute code directly in the browser. Integrated Monaco Editor for a VS Code-like experience, implemented authentication, and enabled real-time code execution using external APIs.",
  tech: ["React (Vite)", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Monaco Editor", "Clerk Auth", "Glot API", "Framer Motion"],
  live: "https://multi-code-ide-gray.vercel.app"
}, 

]

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0b0b12]">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Experience
        </h2>
        <p className="text-gray-400 mt-3">
          My journey & real-world work
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto space-y-16">

        {/* Line */}
        <div className="
          hidden md:block
          absolute left-1/2 top-0 bottom-0
          w-[2px]
          bg-gradient-to-b
          from-transparent via-purple-500/40 to-transparent
          -translate-x-1/2
        " />

        {/* Cards */}
        {experiences.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Experience