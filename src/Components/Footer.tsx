function Footer() {

    return (
        <footer className="container mx-auto z-40 relative max-w-7xl px-6 border-t border-gray-800 backdrop-blur-[2px] py-12 mt-20 bg-linear-to-b from-gray-900/50 to-transparent">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Shashank</h3>
                        <p className="text-gray-300">
                            Frontend developer crafting exceptional digital experiences
                            with modern web technologies.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {["about", "projects", "contact"].map((item) => (
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
                                { name: "GitHub", url: "https://github.com/0xShashank7" },
                                { name: "Twitter", url: "https://twitter.com/0xShashank" },
                                { name: "LinkedIn", url: "https://www.linkedin.com/in/0xShashank/" },
                                { name: "Email", url: "mailto:shashankkk7@protonmail.com" },
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
            </div>
        </footer>
    )
}

export default Footer