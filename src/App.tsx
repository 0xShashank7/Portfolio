import { useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="relative text-gray-200 hover:text-white transition-colors duration-300 group font-medium"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// Skeleton Loader Component
const SkeletonCard = () => (
  <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 animate-pulse">
    <div className="h-48 bg-gray-700/50 rounded-xl mb-4"></div>
    <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-700/50 rounded w-full mb-4"></div>
    <div className="flex space-x-2">
      <div className="h-6 bg-gray-700/50 rounded-full w-16"></div>
      <div className="h-6 bg-gray-700/50 rounded-full w-20"></div>
    </div>
  </div>
);

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const titleVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { 
  //     opacity: 1, 
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut"
  //     }
  //   }
  // };

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
            delayChildren: 0.2
          }
        }
      }}
      className="py-20 scroll-mt-20"
    >
      <motion.h2 
        className="text-4xl font-bold mb-12 text-white relative inline-block"
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-400 hover:from-slate-300 hover:to-slate-300 transition-all duration-300"
          >
            Shashank
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <NavLink key={item} href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-4 py-2 bg-linear-to-r from-slate-600 to-slate-600 text-white rounded-lg hover:from-slate-500 hover:to-slate-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/30"
            >
              Get in Touch
            </a>
          </div>
          <button className="md:hidden text-gray-200 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center text-center px-6 pt-20 pb-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-gray-900"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23a0aec0\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="text-indigo-300 text-base mb-4 font-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hello there, I am
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Shashank Guntamukkala
          </motion.h1>
          
          <motion.h2 
            className="text-lg md:text-xl font-bold text-gray-100 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Full-Stack Nomad | Frontend Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Frontend Developer at a Big 4 firm, where I specialize in crafting exceptional digital experiences. My passion lies in developing accessible, human-centered products that make a meaningful impact
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="relative group px-8 py-4 bg-linear-to-r from-slate-600 to-slate-600 text-white rounded-lg font-medium overflow-hidden hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-linear-to-r from-slate-500 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            
            <motion.a 
              href="#projects" 
              className="px-8 py-4 border-2 border-indigo-400/30 text-indigo-300 hover:bg-indigo-500/10 rounded-lg font-medium transition-all duration-300 hover:border-indigo-400/50 hover:text-white"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </motion.section>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="bg-gray-800/70 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-100">
                  I'm a passionate developer with a keen eye for design and a love for creating
                  efficient, scalable, and user-friendly applications. With experience in modern
                  web technologies, I bring ideas to life through clean, maintainable code.
                </p>
                <p className="text-lg leading-relaxed text-gray-200">
                  When I'm not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or enjoying the great outdoors.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies I work with:</h3>
                  <div className="flex flex-wrap gap-3">
                    {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL'].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-700/80 text-sm rounded-full border border-gray-600 text-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-slate-500/20 to-slate-500/20 rounded-xl -rotate-3 scale-95"></div>
                <div className="relative bg-gray-700/30 p-1 rounded-xl border border-gray-600/30">
                  <div className="h-64 w-full bg-linear-to-br from-gray-700/80 to-gray-800/90 rounded-lg flex items-center justify-center border border-gray-600/30">
                    <span className="text-gray-300">Your Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Featured Projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <SkeletonCard />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {[
              {
                title: "Project One",
                description: "A modern web application built with React and Node.js that solves real-world problems.",
                tags: ["React", "Node.js", "MongoDB"],
                image: "https://via.placeholder.com/600x400/1f2937/9ca3af?text=Project+One"
              },
              {
                title: "Project Two",
                description: "An AI-powered tool that helps developers write better code faster.",
                tags: ["Python", "TensorFlow", "FastAPI"],
                image: "https://via.placeholder.com/600x400/1f2937/9ca3af?text=Project+Two"
              },
              {
                title: "Project Three",
                description: "A mobile-first progressive web app for task management.",
                tags: ["React Native", "Firebase", "Redux"],
                image: "https://via.placeholder.com/600x400/1f2937/9ca3af?text=Project+Three"
              }
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gray-800/70 rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden transition-all duration-300 hover:bg-gray-800/80"
              >
                <div className="relative h-48 bg-gray-700/80 rounded-xl mb-6 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 flex items-end p-4">
                    <div className="space-y-2 w-full">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 bg-indigo-500/20 text-xs text-indigo-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300"
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-gray-400 mb-4"
                >
                  {project.description}
                </p>
                
                <div 
                  className="flex space-x-4 mt-6"
                >
                  <a 
                    href="#" 
                    className="text-indigo-300 flex items-center group"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="text-gray-400 flex items-center group"
                  >
                    <span>Source Code</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'JavaScript', level: 90 },
              { name: 'TypeScript', level: 85 },
              { name: 'React', level: 88 },
              { name: 'Node.js', level: 82 },
              { name: 'Next.js', level: 80 },
              { name: 'Tailwind CSS', level: 85 },
              { name: 'GraphQL', level: 75 },
              { name: 'MongoDB', level: 78 },
              { name: 'Docker', level: 70 },
              { name: 'AWS', level: 68 },
              { name: 'Git', level: 85 },
              { name: 'Python', level: 75 },
            ].map((skill, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-gray-800/70 hover:bg-gray-800/80 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {skill.name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-700/80 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-linear-to-r from-slate-500 to-slate-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400 mt-1 inline-block">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's work together</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question, want to discuss a project, or just want to say hi, 
                I'll get back to you as soon as possible!
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email me at</p>
                    <a href="mailto:hello@example.com" className="text-indigo-400 hover:text-white transition-colors duration-300">
                      hello@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Let's chat</p>
                    <a href="#" className="text-indigo-400 hover:text-white transition-colors duration-300">
                      @shashankg
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600/50 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all pl-10"
                      placeholder="Your name"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600/50 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all pl-10"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600/50 text-gray-100 placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all pl-10"
                      placeholder="Your message"
                    ></textarea>
                    <div className="absolute top-3 left-3">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-slate-600 to-slate-600 hover:from-slate-500 hover:to-slate-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 mt-20 bg-linear-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Shashank</h3>
              <p className="text-gray-300">
                Full-stack developer crafting exceptional digital experiences with modern web technologies.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2">
                {['about', 'projects', 'skills', 'contact'].map((item) => (
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
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2">
                {[
                  { name: 'GitHub', url: '#' },
                  { name: 'Twitter', url: '#' },
                  { name: 'LinkedIn', url: '#' },
                  { name: 'Email', url: 'mailto:hello@example.com' },
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
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Subscribe to get notified about my latest projects and articles.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full text-white"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-r-lg transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Shashank. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App