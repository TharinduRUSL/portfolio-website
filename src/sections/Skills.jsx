import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Network, 
  Database, 
  Terminal,
  Search
} from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="w-6 h-6" />,
        skills: ["React", "Tailwind CSS", "Bootstrap", "Vite", "JavaScript (ES6+)"],
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "Backend & Systems",
        icon: <Server className="w-6 h-6" />,
        skills: ["Node.js", "Express", "RESTful APIs", "Firebase", "SQL"],
        gradient: "from-emerald-500/20 to-teal-500/20",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "UI/UX & Design",
        icon: <Code2 className="w-6 h-6" />,
        skills: ["Figma", "Responsive Design", "Frontend Architecture", "UI Prototyping"],
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Networking & IT",
        icon: <Network className="w-6 h-6" />,
        skills: ["Cisco Packet Tracer", "Network Topology", "Copper Cabling", "Systems Integration"],
        gradient: "from-orange-500/20 to-yellow-500/20",
        border: "group-hover:border-orange-500/50"
    },
    {
        title: "Information Systems",
        icon: <Database className="w-6 h-6" />,
        skills: ["Project Management", "ERP Systems", "Quality Standards (ISO/CMM)", "SDLC"],
        gradient: "from-pink-500/20 to-rose-500/20",
        border: "group-hover:border-pink-500/50"
    },
    {
        title: "Workflow & Tools",
        icon: <Terminal className="w-6 h-6" />,
        skills: ["Git & GitHub", "VS Code", "English Communication", "Bhatkhande Sangeet"],
        gradient: "from-cyan-500/20 to-blue-500/20",
        border: "group-hover:border-cyan-500/50"
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 relative bg-slate-950 overflow-hidden">
            {/* Animated background glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic font-serif">Toolstack.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        A specialized blend of Information Systems management and modern full-stack development, 
                        tailored for scalable and efficient digital solutions.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div 
                            key={idx}
                            className={`group relative p-8 rounded-3xl border border-white/5 bg-slate-900/20 backdrop-blur-md transition-all duration-500 ${category.border} hover:-translate-y-2`}
                        >
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-slate-800/50 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 text-white">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, sIdx) => (
                                        <div 
                                            key={sIdx}
                                            className="px-4 py-1.5 rounded-xl bg-slate-800/30 border border-white/5 text-slate-400 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Hint */}
                <div className="mt-20 flex justify-center">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 text-sm italic">
                        <Search className="w-4 h-4 text-blue-400" />
                        Always exploring new technologies and management frameworks.
                    </div>
                </div>
            </div>
        </section>
    );
};