import { motion } from 'framer-motion'

function Hero() {
    return (
        <motion.section
            className="min-h-screen  z-40 container mx-auto px-6 max-w-7xl flex items-center justify-start  pt-20 pb-32 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <motion.div
                    className="max-w-4xl mx-auto "
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.div
                        className="text-[#747bff] text-base mb-4 font-mono"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ textShadow: "1px 1px 50px white" }}
                    >
                        Hello there, I am
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FEFEFA] mb-6 text-shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ textShadow: "#fefefa 1px 1px 30px" }}
                    >
                        Shashank Guntamukkala
                    </motion.h1>

                    <motion.h2
                        className="text-lg md:text-xl font-bold text-[#fefefa] mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        ( Full-Stack Nomad && Frontend Developer ) || Web 3 Dev
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-[#fefefad5] mb-12 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Frontend Developer at  <span className="font-bold text-[#fefefa]">Deloitte</span>, where I specialize in crafting
                        exceptional digital experiences. My passion lies in developing
                        accessible, human-centered products that make a meaningful impact
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="relative z-40" >
                    <motion.a
                        href="#projects"
                        className="px-8 py-4 shadow-[1px_1px_20px_inset_#747bff] border-2 backdrop-blur-3xl border-[#747bff] text-indigo-300 hover:shadow-[1px_1px_50px_inset_#747bff] rounded-lg font-medium transition-all duration-300  hover:scale-125 scale-90"
                    >
                        View My Work
                    </motion.a>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </a>
            </motion.div>

        </motion.section>
    )
}

export default Hero