

import { motion } from "framer-motion"

const ExperienceCard = ({ item, index }) => {
  const isLeft = index % 2 === 0

  return (
    <div
      className={`relative flex md:items-center w-full ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >

      {/* Timeline Dot */}
      <div
        className="
          hidden md:block
          absolute left-1/2 -translate-x-1/2
          w-4 h-4 rounded-full
          bg-purple-500
          shadow-[0_0_15px_rgba(168,85,247,0.8)]
        "
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          w-full md:w-[46%]
          bg-white/5
          backdrop-blur-md
          border border-white/10
          rounded-2xl
          p-6
          hover:border-purple-500/40
          hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
          transition-all
          relative
        "
      >
        {/* Date */}
        <span className="text-xs text-purple-400 font-medium">
          {item.date}
        </span>

        {/* Role */}
        <h3 className="text-lg font-semibold text-white mt-2">
          {item.role}
        </h3>

        {/* Company */}
        <p className="text-sm text-gray-400">
          {item.company}
        </p>

        {/* Description */}
        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          {item.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {item.tech.map((t, i) => (
            <span
              key={i}
              className="
                text-xs
                bg-gray-800
                px-3 py-1
                rounded-md
                text-gray-300
                hover:bg-purple-500/20
                transition
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* 🔥 Certificate Button */}
        {item.certificate && (
          <a
            href={item.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-5
              px-5 py-2
              text-sm
              rounded-full
              bg-gradient-to-r from-purple-500 to-pink-500
              text-white
              hover:scale-105
              transition
              shadow-md
            "
          >
            View Certificate 📜
          </a>
        )}

        {item.live && (
  <a
    href={item.live}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block
      mt-3 mr-3
      px-4 py-2
      text-xs
      rounded-full
      border border-purple-500
      text-purple-400
      hover:bg-purple-500 hover:text-white
      transition
    "
  >
    Live Demo 🌐
  </a>
)}
      </motion.div>
    </div>
  )
}

export default ExperienceCard