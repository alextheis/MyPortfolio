import { Code, User, Briefcase } from "lucide-react";
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative min-h-screen bg-transparent">
            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                            Passionate Web Developer & Tech Creator
                        </h3>
                        <p className="text-foreground/80 text-lg leading-relaxed">
                            With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
                        </p>
                        <p className="text-foreground/80 text-lg leading-relaxed">
                            I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center md:justify-start">
                            <a 
                                href="#contact" 
                                className="cosmic-button"
                            >
                                Get In Touch
                            </a>
                            <a 
                                href="#resume" 
                                className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-semibold hover:scale-105"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-foreground mb-2">Web Development</h4>
                                    <p className="text-foreground/80">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-foreground mb-2">UI/UX Design</h4>
                                    <p className="text-foreground/80">
                                        Designing intuitive user interfaces and seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-foreground mb-2">Project Management</h4>
                                    <p className="text-foreground/80">
                                        Leading projects from conception to completion with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
