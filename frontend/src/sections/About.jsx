import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 sm:mb-18 lg:mb-20"
      >
        <p className="text-purple-400 tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          Introduction
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          About <span className="text-purple-400">Me</span>
        </h2>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          sm:gap-12
          p-6
          sm:p-8
          lg:p-12
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
        "
      >
        {/* Accent Line */}
        <div className="hidden md:block absolute left-0 top-10 bottom-10 w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-pink-500" />

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-60" />

            <div className="
              relative
              w-40 h-40
              sm:w-48 sm:h-48
              lg:w-60 lg:h-60
              rounded-2xl
              bg-black
              flex items-center justify-center
              text-4xl sm:text-5xl lg:text-6xl
            ">
              👩‍💻
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          <p className="mb-4 sm:mb-5">
            Hello! I’m{" "}
            <span className="text-white font-semibold">Lucky Gole</span>, a
            passionate <span className="text-purple-400">Full Stack Developer</span>{" "}
            who loves building modern, scalable, and user-friendly web applications.
          </p>

          <p className="mb-4 sm:mb-5">
            I work with{" "}
            <span className="text-purple-400">React</span>,{" "}
            <span className="text-purple-400">Node.js</span>,{" "}
            <span className="text-purple-400">MongoDB</span>, and{" "}
            <span className="text-purple-400">Tailwind CSS</span>, and I also
            build AI-powered applications using{" "}
            <span className="text-purple-400">Groq</span>,{" "}
            <span className="text-purple-400">OpenRouter</span>, and{" "}
            <span className="text-purple-400">Gemini APIs</span>.
          </p>

          <p className="mb-4 sm:mb-5">
            I enjoy creating projects like{" "}
            <span className="text-purple-400">AI tools</span>,{" "}
            <span className="text-purple-400">full-stack platforms</span>, and{" "}
            <span className="text-purple-400">interactive UI experiences</span> with
            smooth animations and modern design.
          </p>

          <p>
            My goal is to grow as a developer by building impactful products that
            combine{" "}
            <span className="text-purple-400">technology</span>,{" "}
            <span className="text-purple-400">creativity</span>, and{" "}
            <span className="text-purple-400">problem-solving</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
