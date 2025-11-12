import { motion, AnimatePresence } from "framer-motion";
import { supabase } from '../lib/supabase';
import { useState, useEffect } from 'react';
import type { Project } from '../types';

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

// Projects Section
export default function Projects() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from('ProjectsDB')
                .select('*')
                .order('Order', { ascending: true });
            if (error) {
                console.log(error);
            }
            else {
                setProjects(data);
                setLoading(false);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [])

    return (
        <div className="container mx-auto z-40 relative max-w-7xl px-6" id="projects" title="Featured Projects">
            <motion.h2
                className="text-4xl font-bold mb-6 text-white relative inline-block"
            >Featured Projects</motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    projects.length > 0 && !loading
                        ?
                        projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, }}
                                whileHover={{ y: -5 }}
                                className="group bg-gray-800/70 rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden transition-all duration-300 hover:bg-gray-800/80"
                            >
                                <div className="relative h-48 bg-gray-700/80 rounded-xl mb-6 overflow-hidden">
                                    <motion.img
                                        src={project.Image_URL ? project.Image_URL : "https://siplwaikufrtalpcgole.supabase.co/storage/v1/object/sign/ProjectImages/Coming%20Soon.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84NDdjMmJlMi0wZTA5LTRlMzItYTlmMy0wZjNjOTAwNjJhM2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcm9qZWN0SW1hZ2VzL0NvbWluZyBTb29uLnBuZyIsImlhdCI6MTc2MTgxMjE5NywiZXhwIjoxODI0ODg0MTk3fQ.jJ7T0L4p3LNoYI4B4JLMcIdStnMBgc200TQiAdC23i8"}
                                        alt={project.Title}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    />
                                    {project.status
                                        &&
                                        <div className="absolute top-3 right-2">

                                            <motion.span
                                                className="px-6 text-base font-mono py-1 shadow-[1px_1px_20px_inset_#747bff] border-2 backdrop-blur-3xl border-[#747bff] text-indigo-300 hover:shadow-[1px_1px_50px_inset_#747bff] rounded-full font-medium transition-all duration-300  hover:scale-125 scale-90"
                                            >
                                                {project.status}
                                            </motion.span>
                                        </div>}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-end p-4">
                                        <div className="space-y-2 w-full">
                                            <div className="flex flex-wrap gap-2">
                                                {project?.tags?.map((tag, i) => (
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

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                                    {project.Title}
                                </h3>

                                <p className="text-gray-400 mb-4">{project.Description}</p>

                                <div className="flex space-x-4 mt-6">
                                    {project.Project_URL && <a
                                        href={project.Project_URL} target="_blank"
                                        className=" flex items-center group gap-2 " >
                                        <span className=" hover:text-[#747bff] transition-colors duration-500" >View Project</span>
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </a>}

                                    {project.GitHub_URL && <a href={project.GitHub_URL} target="_blank" className="flex items-center group gap-2">
                                        <span className=" hover:text-[#747bff] transition-colors duration-500" >Source Code</span>
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            />
                                        </svg>
                                    </a>}
                                </div>
                            </motion.div>
                        ))
                        :
                        <AnimatePresence>
                            {[1, 2, 3].map((i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group" >
                                    <SkeletonCard />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                }
            </div>
        </div>
    )
}
