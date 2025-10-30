import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "./Components/Projects";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="relative text-gray-200 hover:text-white transition-colors duration-300 group font-medium"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);



const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      className="py-20 scroll-mt-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-white relative inline-block"
      // variants={titleVariants}
      >
        <span className="relative z-10">
          {title}
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-1  from-slate-500 to-slate-600 transform -skew-x-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </span>
      </motion.h2>
      {children}
    </motion.section>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen containerDiv ">
      <div className="" >

        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xs py-3 shadow-xs" : "py-5"
            }`}
        >
          <div className="container mx-auto px-6 flex max-w-7xl justify-between items-center">
            <div className="hidden md:flex space-x-8 items-center">
              {[
                {
                  id: "",
                  title: "Home",
                },
                {
                  id: "about",
                  title: "About",
                },
                {
                  id: "projects",
                  title: "Projects",
                },
                {
                  id: "skills",
                  title: "Skills",
                },
                {
                  id: "contact",
                  title: "Contact",
                },
              ].map((item) => (
                <motion.a initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}>
                  <NavLink key={item.id} href={`#${item.id}`}>
                    {item.title}
                  </NavLink>
                </motion.a>
              ))}
            </div>
            <button className="md:hidden text-gray-200 hover:text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
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

        {/* About Section */}
        <div className="container z-40 relative mx-auto px-6 max-w-7xl">
          <Section id="about" title="About Me">
            <div className="bg-gray-800/70 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-[1px_1px_10px_inset_#747bff] hover:shadow-[1px_1px_15px_inset_#747bff]   transition-all duration-500">
              <div className="flex justify-between items-center gap-8 ">
                <div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-100">
                    I'm a passionate developer with a keen eye for design and a
                    love for creating efficient, scalable, and user-friendly
                    applications. With experience in modern web technologies, I
                    bring ideas to life through clean, maintainable code.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-200">
                    When I'm not coding, you can find me exploring new
                    technologies, or
                    enjoying the great outdoors.
                  </p>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Technologies I work with:
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Node.js",
                        "Next.js",
                        "Tailwind CSS",
                        "GraphQL",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-700/80 text-sm rounded-full border border-gray-600 text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative pointer-events-none">
                  <div className="absolute w-64 inset-0 bg-linear-to-br from-slate-500/20 to-slate-500/20 rounded-xl -rotate-6 ">
                    <div className="h-64 w-full bg-linear-to-br from-gray-700/80 to-gray-800/90 rounded-lg flex items-center justify-center border border-gray-600/30">
                      <img className="h-full w-full pointer-events-none object-cover rounded-lg mask-b-from-10%" src="../public/Shashank PP.jpg" alt="Shank" />
                    </div>
                  </div>
                  <div className="relative w-64 bg-gray-700/30 p-1 rounded-xl border border-gray-600/30">
                    <div className="h-64 w-full bg-linear-to-br from-gray-700/80 to-gray-800/90 rounded-lg flex items-center justify-center border border-gray-600/30">
                      <img
                        className="h-full select-none pointer-events-none w-full object-cover rounded-lg grayscale-100 hover:grayscale-0 transition-all duration-500"
                        src="https://siplwaikufrtalpcgole.supabase.co/storage/v1/object/sign/ProjectImages/ShashankVizag.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84NDdjMmJlMi0wZTA5LTRlMzItYTlmMy0wZjNjOTAwNjJhM2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcm9qZWN0SW1hZ2VzL1NoYXNoYW5rVml6YWcuanBnIiwiaWF0IjoxNzYxODEyMzg5LCJleHAiOjE4MjQ4ODQzODl9.oWN8sGd8cNJooBTCnG8QVAOG6FdzDVYRTBNn4o-NMjY"
                        alt="Shank"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Projects Section */}
          <Projects />
        </div>

        {/* Footer */}
        <footer className="border-t z-40 relative border-gray-800 backdrop-blur-[2px] py-12 mt-20 bg-linear-to-b from-gray-900/50 to-transparent">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Shashank</h3>
                <p className="text-gray-300">
                  Full-stack developer crafting exceptional digital experiences
                  with modern web technologies.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Navigation
                </h4>
                <ul className="space-y-2">
                  {["about", "projects", "skills", "contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        className="text-gray-300 hover:text-indigo-300 transition-colors duration-300 text-sm"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Connect
                </h4>
                <ul className="space-y-2">
                  {[
                    { name: "GitHub", url: "#" },
                    { name: "Twitter", url: "#" },
                    { name: "LinkedIn", url: "#" },
                    { name: "Email", url: "mailto:hello@example.com" },
                  ].map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        className="text-gray-300 hover:text-indigo-300 transition-colors duration-300 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Shashank. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
