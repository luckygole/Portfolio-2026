import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_mpmus7h",
        "template_fwzsosa",
        form.current,
        "D_96KYKbyOpMoL-2E"
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀")
          form.current.reset()
          setLoading(false)
        },
        (error) => {
          console.log(error.text)
          toast.error("Something went wrong ❌")
          setLoading(false)
        }
      )
  }

  return (
    <section id="contact" className="py-24 px-6 relative">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Get in Touch
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          I’m always open to new opportunities, freelance work, or collaboration.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold text-white">Let's Connect ✨</h3>
          <p className="text-gray-400">
            Feel free to reach out for projects or collaborations 👋
          </p>

          <div className="flex items-center gap-3 text-gray-300 text-lg">
            <FaEnvelope className="text-purple-400 text-xl" />
            <span>golelaksh@gmail.com</span>
          </div>

          <div className="flex gap-5 pt-4 text-2xl">
            <a href="https://github.com/luckygole" target="_blank">
              <FaGithub className="hover:text-purple-400 transition hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/luckygole/" target="_blank">
              <FaLinkedin className="hover:text-purple-400 transition hover:scale-110" />
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-gradient-to-br from-white/5 via-white/10 to-white/5
            backdrop-blur-xl
            border border-white/20
            rounded-3xl
            p-8
            flex flex-col gap-5
          "
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-gray-900/60 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-gray-900/60 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-4 rounded-xl bg-gray-900/60 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`
              py-4 rounded-2xl font-semibold text-white transition
              ${loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105"}
            `}
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact;