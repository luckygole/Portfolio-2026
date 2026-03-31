const Footer = () => {
  return (
    <footer className="bg-[#0b0b12] py-8 px-6 flex justify-center items-center">
      <p className="text-gray-400 text-sm md:text-base text-center">
        © {new Date().getFullYear()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold">
          Lucky Gole
        </span>
        . All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
