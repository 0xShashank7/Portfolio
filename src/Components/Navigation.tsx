import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

function Navigation() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (<nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xs py-3 shadow-xs" : "py-5"
            }`}
    >
        <div className="container mx-auto px-6 flex max-w-7xl justify-between items-center">
            <div className="hidden md:flex space-x-8 items-center">
                {[
                    {
                        id: "",
                        title: "Home",
                        link: '#'
                    },
                    {
                        id: "about",
                        title: "About",
                        link: '#about'
                    },
                    {
                        id: "projects",
                        title: "Projects",
                        link: '#projects'
                    },
                    {
                        id: "contact",
                        title: "Contact",
                        link: 'https://www.linkedin.com/in/0xShashank/'
                    },
                ].map((item) => (
                    <motion.a initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}>
                        <NavLink key={item.id} href={item.link}>
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

    )
}

export default Navigation