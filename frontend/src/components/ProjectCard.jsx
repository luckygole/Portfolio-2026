import { motion } from "framer-motion"

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="
        group
        cursor-pointer
        rounded-2xl
        overflow-hidden
        bg-white/5
        backdrop-blur-md
        border border-white/10
        hover:border-purple-500/40
        hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
        transition-all
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-56
            object-cover
            group-hover:scale-110
            transition duration-500
          "
        />
      </div>

      {/* Title only */}
      <div className="p-5 text-center">
        <h3 className="text-white font-semibold text-lg">
          {project.title}
        </h3>
      </div>
    </motion.div>
  )
}

export default ProjectCard