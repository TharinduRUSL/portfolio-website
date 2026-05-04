import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react"; 
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "GraphQL",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS",
    "Vercel", "Tailwind CSS", "Prisma", "Jest", "Cypress",
    "Figma", "Git", "GitHub Actions",
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src="/hero-bg.jpeg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Animated Background Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Web Designer • Information Systems Undergraduate
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Bridging <span className="text-primary glow-text">technology</span>
                                <br />
                                and design as an
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    IS Undergrad.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                                Hi, I'm Tharindu — a web designer and Information Systems undergraduate specializing in React, Tailwind CSS, and Vite.
                            </p>
                        </div>

                        {/* CTAs & Social Links */}
                        <div className="flex flex-wrap items-center gap-6 animate-fade-in animation-delay-300">
                            <div className="flex gap-4">
                                <Button size="lg">
                                    Contact Me <ArrowRight className="w-5 h-5" />
                                </Button>
                                <AnimatedBorderButton />
                            </div>

                            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                                {/* GitHub */}
                                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full glass hover:text-primary hover:scale-110 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full glass hover:text-primary hover:scale-110 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow" />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img
                                src="/profile-photo.png"
                                alt="H.M.T.S. Chandrasiri"
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>

                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">3+</div>
                                <div className="text-xs text-muted-foreground">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Marquee */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I Work With</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee whitespace-nowrap gap-10">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};