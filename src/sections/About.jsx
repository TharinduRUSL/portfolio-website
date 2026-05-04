import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time."
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future
                            <span className="font-serif italic font-normal text-white">
                                {" "}one component at a time. {}
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-lg leading-relaxed">
                            <p>
                                I'm a passionate web designer and Information Systems undergraduate with extensive experience in 
                                crafting digital products that make a difference. My journey started with a curiosity for how 
                                things work on the web, and it has evolved into a deep expertise in modern frontend technologies.
                            </p>
                            <p>
                                I specialize in React, Tailwind CSS, and Vite, building everything from sleek landing pages to 
                                functional web applications. My approach combines technical excellence with a keen eye for 
                                design and user experience.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, working on UI/UX improvements, 
                                or contributing to the developer community.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to create digital experiences that are not just 
                                functional, but truly delightful — products that users love to 
                                use and developers love to maintain."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass rounded-2xl p-6 glow-border animate-fade-in hover:bg-white/5 transition-colors group"
                                style={{ animationDelay: `${400 + (idx * 100)}ms` }}
                            >
                                <div className="mb-4">
                                    <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};