import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

export default function About() {
    return (
        <div className="container z-40 relative mx-auto px-6 max-w-7xl">
            <Section id="about" title="About Me">
                <div className="bg-gray-800/70 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-[1px_1px_10px_inset_#747bff] hover:shadow-[1px_1px_15px_inset_#747bff]   transition-all duration-500">
                    <div className="flex justify-between items-center gap-8 flex-col xl:flex-row  ">
                        <div className="w-full xl:w-3/5">
                            <p className="text-lg leading-relaxed mb-6 text-gray-100">
                                I'm a <span className="font-bold text-[#FEFEFA]"> passionate developer</span> with a keen eye for design with detail and a
                                love for creating efficient, scalable, and accessible
                                applications. With experience in modern web technologies, I
                                bring <span className="font-bold text-[#FEFEFA]"> ideas to life</span> through clean, maintainable code.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-200">
                                When I'm not coding, you can find me <span className="font-bold text-[#FEFEFA]"> enjoying the great outdoors</span>, reading <span className="font-bold text-[#FEFEFA]"> mythology</span> or <span className="font-bold text-[#FEFEFA]">exploring new technologies</span>.
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
                                        "Solidity",
                                        "Node.js",
                                        "Next.js",
                                        "Tailwind CSS",
                                        "SPFx",
                                        "Power Automate",
                                        "SharePoint On-Prem/ Online",
                                    ].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 bg-gray-700/80 text-sm rounded-full border border-gray-600 text-gray-200" >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5  flex justify-center">

                            <div className="relative group ">
                                <div className="absolute w-64 bg-gray-700/30 p-1 rounded-xl border border-gray-600/30 -rotate-10 grayscale-75 group-hover:grayscale-0 group-hover:-rotate-12 group-hover:shadow-[1px_1px_20px_inset_#747bff] group-hover:-translate-x-20 group-hover:scale-125 transition-all duration-500">
                                    <div className="h-64  w-full bg-linear-to-br from-gray-700/80 to-gray-800/90 rounded-lg flex items-center  justify-center border border-gray-600/30">
                                        <img
                                            className="h-full    select-none  w-full object-cover rounded-lg  "
                                            src="https://siplwaikufrtalpcgole.supabase.co/storage/v1/object/sign/ProjectImages/ShashankAppikonda.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84NDdjMmJlMi0wZTA5LTRlMzItYTlmMy0wZjNjOTAwNjJhM2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcm9qZWN0SW1hZ2VzL1NoYXNoYW5rQXBwaWtvbmRhLmpwZyIsImlhdCI6MTc2MTgzMzEwNywiZXhwIjoxNzkzMzY5MTA3fQ.ZxcZGlnDhcVy6YH3DP1lZKQ2gp2lEcrC-pDw835P4DI"
                                            style={{ transform: "scaleX(-1)", padding: 0 }}
                                            alt="Shank"
                                        />
                                    </div>
                                </div>

                                <div className="relative w-64 bg-gray-700/30 p-1 rounded-xl border border-gray-600/30 group-hover:translate-x-48 group-hover:rotate-12 group-hover:shadow-[1px_1px_20px_inset_#747bff] grayscale-75 group-hover:grayscale-0  group-hover:scale-[120%] transition-all duration-500">
                                    <div className="h-64  w-full bg-linear-to-br from-gray-700/80 to-gray-800/90 rounded-lg flex items-center  justify-center border border-gray-600/30">
                                        <img
                                            className="h-full    select-none  w-full object-cover rounded-lg  "
                                            src="https://siplwaikufrtalpcgole.supabase.co/storage/v1/object/sign/ProjectImages/ShashankVizag.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84NDdjMmJlMi0wZTA5LTRlMzItYTlmMy0wZjNjOTAwNjJhM2UiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQcm9qZWN0SW1hZ2VzL1NoYXNoYW5rVml6YWcuanBnIiwiaWF0IjoxNzYxODEyMzg5LCJleHAiOjE4MjQ4ODQzODl9.oWN8sGd8cNJooBTCnG8QVAOG6FdzDVYRTBNn4o-NMjY"
                                            alt="Shank"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

        </div>
    )
}
