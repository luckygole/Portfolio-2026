import { motion } from "framer-motion"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaKey,
  FaUserShield,
  FaDatabase,
  FaRobot,
  FaSitemap,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
  SiCloudinary,
  SiNextdotjs,
  SiBootstrap,
  SiDocker,
  SiCplusplus,
  SiC,
  SiSocketdotio,
  SiRazorpay,
} from "react-icons/si"
import { FaPlug } from "react-icons/fa"

import { MdEmail } from "react-icons/md"

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
      { name: "JWT Auth", icon: <FaKey className="text-yellow-300" /> },
      { name: "Nodemailer", icon: <MdEmail className="text-orange-400" /> },
      { name: "Clerk Auth", icon: <FaUserShield className="text-purple-400" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
      { name: "Rest API", icon: <FaPlug className="text-green-400" /> },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "IndexedDB", icon: <FaDatabase className="text-green-300" /> },
    ],
  },

  {
    title: "AI & APIs",
    skills: [
      { name: "Groq API", icon: <FaRobot className="text-orange-400" /> },
      { name: "OpenRouter API", icon: <FaRobot className="text-green-400" /> },
      { name: "Gemini API", icon: <FaRobot className="text-blue-400" /> },
      { name: "EmailJS", icon: <MdEmail className="text-yellow-400" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
      { name: "Razorpay", icon: <SiRazorpay className="text-blue-500" /> },
      { name: "Glot.io API", icon: <FaJs className="text-yellow-400" /> },
    ],
  },

  {
    title: "Languages & Core",
    skills: [
      { name: "C++ (DSA)", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "DSA", icon: <FaSitemap className="text-yellow-300" /> },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Render", icon: <SiRender className="text-blue-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Cursor AI", icon: <FaRobot className="text-purple-400" /> },
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-purple-400 uppercase tracking-widest text-sm">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          My Tech Stack
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-lg transition"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-white text-center mb-6">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-5xl">{skill.icon}</span>
                  <span className="text-sm text-gray-200 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills