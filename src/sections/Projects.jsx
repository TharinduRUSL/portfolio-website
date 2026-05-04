import React from 'react';
import { ArrowUpRight } from "lucide-react"; 
import { FaGithub } from "react-icons/fa";


const projects = [
    {
        title: "Fintech Dashboard",
        description: "A comprehensive financial analytics platform with real-time data visualization",
        image: "/project/Project 01.jpeg",
        tags: ["React", "Typescript", "NodeJS"],
        link: "#",
        github: "https://github.com/TharinduRUSL",
    },
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
        image: "/project/Project 02.jpeg",
        tags: ["React", "Typescript", "NodeJS"],
        link: "#",
        github: "https://github.com/TharinduRUSL",
    },
    {
        title: "AI Writing Assistant",
        description: "An intelligent tool that assists in content creation with real-time suggestions and improvements.",
        image: "/project/Project 03.jpeg",
        tags: ["React", "Typescript", "NodeJS"],
        link: "#",
        github: "https://github.com/TharinduRUSL",
    },
    {
        title: "Project Management Tool",
        description: "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
        image: "/project/Project 04.jpeg",
        tags: ["React", "Typescript", "NodeJS"],
        link: "#",
        github: "https://github.com/TharinduRUSL",
    },
];

const AnimatedBorderButton = ({ children }) => (
    <button className="relative inline-flex items-center gap-2 px-8 py-4 font-medium text-white transition-all rounded-full group bg-slate-950 hover:bg-slate-900 border border-white/10 overflow-hidden">
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
);

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-slate-950">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                        Projects that 
                        <span className="font-serif italic font-normal"> make an impact.</span>
                    </h2>
                    <p className="text-slate-400">
                        A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className="group relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a 
                                        href={project.link} 
                                        className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a 
                                        href={project.github} 
                                        className="p-3 bg-slate-800 text-white rounded-full hover:scale-110 transition-transform"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/TharinduRUSL" target="_blank" rel="noopener noreferrer">
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};