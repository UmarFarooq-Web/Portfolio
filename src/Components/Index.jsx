import React, { useState, useEffect } from 'react'
import ParticleBackground from './ParticleBackground'
import { animate, motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import { Download, ChevronDown, Github, Linkedin, Mail, Code2, Database, Globe, Smartphone, Brain, Zap } from "lucide-react"
import SkillCard from './SkillCard'
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaRocket } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPostman } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import ProjectCard from './ProjectCard'
import FloatingOrb from './FloatingOrb'


const Index = () => {
    const [scrollY, setScrollY] = useState(0);
    const [displayText, setDisplayText] = useState('Copy Email')

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCopyEmailBtn = async () => {
        await navigator.clipboard.writeText("umarfarooq.sudo@gmail.com");

        setDisplayText("Email Copied")

        const timer = setTimeout(() => {
            setDisplayText("Copy Email")

            clearTimeout(timer);
        }, 2000);

    }


    const skills = [
        {
            name: "React Development",
            level: 90,
            icon: <FaReact />,
            description: "Experienced in building interactive UIs using React and component-based architecture"
        },
        {
            name: "JavaScript",
            level: 92,
            icon: <SiJavascript />,
            description: "Strong knowledge of ES6+, DOM manipulation, asynchronous programming, and event handling"
        },
        {
            name: "Express & Node.js",
            level: 85,
            icon: <FaNodeJs />,
            description: "Skilled in building RESTful APIs and server-side logic using Node.js and Express.js"
        },
        {
            name: "MongoDB & Mongoose",
            level: 80,
            icon: <SiMongodb />,
            description: "Proficient in schema design, data modeling, and integration with Mongoose"
        },
        {
            name: "HTML & CSS / Tailwind",
            level: 88,
            icon: <FaHtml5 />,
            description: "Semantic HTML, responsive design, utility-first styling with Tailwind CSS"
        },
        {
            name: "Web Debugging & Optimization",
            level: 82,
            icon: <FaTools />,
            description: "Skilled in performance debugging, developer tools usage, and best practices"
        },
        {
            name: "Project Deployment",
            level: 80,
            icon: <FaRocket />,
            description: "Experience with deploying apps on platforms like Vercel, Render, and GitHub Pages"
        },
        {
            name: "Git & Version Control",
            level: 85,
            icon: <FaGitAlt />,
            description: "Proficient with Git, GitHub workflows, and collaborative version control"
        },
        {
            name: "Postman",
            level: 80,
            icon: <SiPostman />,
            description: "Efficient in testing REST APIs, managing environments, and automating requests"
        },
        {
            name: "VS Code",
            level: 90,
            icon: <VscVscodeInsiders />,
            description: "Power user of VS Code with extensions, themes, and productivity tools"
        },
        {
            name: "Web Debugging & Optimization",
            level: 82,
            icon: <FaTools />,
            description: "Skilled in performance debugging, developer tools usage, and best practices"
        },
        {
            name: "Project Deployment",
            level: 80,
            icon: <FaRocket />,
            description: "Experience with deploying apps on platforms like Vercel, Render, and GitHub Pages"
        }
    ];

    const projectstemp = [
        {
            title: "AI-Powered Dashboard",
            description: "A sophisticated analytics dashboard with real-time data visualization, machine learning insights, and predictive analytics. Built with React, D3.js, and Python backend.",
            technologies: ["React", "TypeScript", "D3.js", "Python", "TensorFlow", "WebSocket"],
            image: "/api/placeholder/600/400",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            featured: true
        },
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and advanced search capabilities.",
            technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
            image: "/api/placeholder/400/300",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        },
        {
            title: "Real-time Chat App",
            description: "Scalable messaging application with video calls, file sharing, and end-to-end encryption.",
            technologies: ["React", "Socket.io", "WebRTC", "Express", "PostgreSQL"],
            image: "/api/placeholder/400/300",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        },
        {
            title: "DevOps Automation Suite",
            description: "Comprehensive CI/CD pipeline automation with monitoring, logging, and deployment management.",
            technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
            image: "/api/placeholder/400/300",
            githubUrl: "https://github.com"
        }
    ];

    const projects = [
        {
            title: "Chat App",
            description: "A real-time chat application with support for private messaging, typing indicators, and scalable socket-based communication.",
            technologies: ["React", "Socket.io", "Express", "Node.js"],
            image: "",
            liveUrl: "", // Add if hosted
            githubUrl: "https://github.com/UmarFarooq-Web/NexChat---ChatApplication",
        },
        {
            title: "E-Commerce Store",
            description: "A modern e-commerce website with admin panel, category-based product management, and cart functionality.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
            image: "",
            liveUrl: "", // Add if hosted
            githubUrl: "https://github.com/UmarFarooq-Web/BuYNest---E-commerce-Website"
        },
        {
            title: "Cinema Management System",
            description: "A desktop application developed using Windows Forms in C# for managing cinema operations including movies, schedules, tickets, and customer records. It features a user-friendly interface and a connected SQL database for persistent storage.",
            technologies: ["C#", "WinForms", "SQL Server", "ADO.NET"],
            image: "",
            liveUrl: "",
            githubUrl: "https://github.com/UmarFarooq77-sudo/Cinema-Management-System"
        },
        {
            title: "Library Management System",
            description: "A C# GUI-based library system using a relational SQL database. Allows managing books, members, and issue/return operations. Built collaboratively for learning.",
            technologies: ["C#", "WinForms", "SQL Server", "ADO.NET"],
            image: "",
            githubUrl: "https://github.com/UmarFarooq77-sudo/Library-Management-System"
        },
    ];



    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden'>
            <ParticleBackground />
            <FloatingOrb size="large" color="cyan" className="top-1/4 left-1/4" delay={0} />
            <FloatingOrb size="medium" color="purple" className="top-1/3 right-1/4" delay={2} />
            <FloatingOrb size="small" color="pink" className="bottom-1/4 left-1/3" delay={4} />
            <FloatingOrb size="medium" color="cyan" className="bottom-1/3 right-1/3" delay={1} />

            {/* Navigation */}
            <div className='fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10'>
                <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='text-2xl font-bold text-gradient'
                    >
                        &lt;DevPortfolio /&gt;
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex space-x-8"
                    >
                        {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-[#00ffff] transition-all duration-300 relative group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffff] transition-all duration-200 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </motion.div>

                </div>
            </div>

            {/* Hero Section */}
            <section className="min-h-screen mt-22 sm:mt-0 flex items-center justify-center relative" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                            <span className="text-white">Hello, I'm</span>
                            <br />
                            <span className="text-gradient animate-text-glow">Umar Farooq</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-2xl md:text-3xl mb-8 text-gray-300"
                    >
                        <AnimatedText
                            text="Full-Stack Developer & AI Enthusiast"
                            className="text-[#00ffff] font-light"
                            delay={1000}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Crafting innovative digital experiences with cutting-edge technologies.
                        Passionate about creating scalable solutions that push the boundaries of what's possible.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <motion.button
                            className="px-8 cursor-pointer py-4 bg-gradient-to-r from-[#00ffff] to-[#0080ff] text-black font-bold rounded-lg text-lg shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all duration-100 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View My Work
                        </motion.button>

                        <motion.a
                            className="cursor-pointer px-8 py-4 glass-effect border border-[#00ffff]/30 text-[#00ffff] rounded-lg text-lg hover:border-[#00ffff]/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-100 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href='/Umar_Farooq_Resume.pdf'
                            download={'Umar Farooq Resume.pdf'}
                        >
                            <Download size={20} />
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={32} className="text-[#00ffff] animate-pulse" />
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="sm:pb-20 pb-5 pt-24 sm:py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-6 text-gradient">About Me</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-[#bf00ff] mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-effect sm:p-8 p-4 rounded-lg neon-border">
                                <p className="sm:text-lg text-[15px] text-gray-300 leading-relaxed mb-6">
                                    Hey, I'm Umar — a <span className='text-gradient'> Undergraduate student</span> with a passion for creating meaningful and functional digital experiences. I'm currently pursuing my <span className='text-gradient'>Bachelor's in Computer Science</span> at <span className='text-gradient'>University Of Engineering and Technology</span>, where I maintain a <span className='text-gradient'> CGPA of 3.75.</span> My journey into tech started out of curiosity, but it quickly became a way for me to express creativity, solve real-world problems, and build a better future.


                                </p>
                                <p className="sm:text-lg text-[15px] text-gray-300 leading-relaxed mb-6">
                                    I'm constantly learning and applying new ideas — not just in the classroom, but through personal projects that challenge and grow my skills. I believe in consistency, self-improvement, and staying hungry to learn — whether I’m debugging a stubborn issue or simply chasing the next personal milestone.
                                </p>
                                <div className="flex gap-4">
                                    <motion.a
                                        href="https://github.com/UmarFarooq-Web"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 glass-effect rounded-lg border border-[#00ffff]/30 hover:border-[#00ffff]/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Github size={24} className="text-[#00ffff]" />
                                    </motion.a>
                                    <motion.a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 glass-effect rounded-lg border border-[#00ffff]/30 hover:border-[#00ffff]/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Linkedin size={24} className="text-[#00ffff]" />
                                    </motion.a>
                                    <motion.a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=umarfarooq@gmail.com"
                                        className="p-3 glass-effect rounded-lg border border-[#00ffff]/30 hover:border-[#00ffff]/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        target='_blank'
                                    >
                                        <Mail size={24} className="text-[#00ffff]" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square glass-effect rounded-lg neon-border p-8 items-center justify-center hidden md:flex">
                                <div className="text-center">
                                    <motion.div
                                        className="w-32 h-32 bg-gradient-to-br from-[#00ffff]/30 to-[#bf00ff]/30 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl text-[#00ffff]"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        &lt;/&gt;
                                    </motion.div>
                                    {/* <h3 className="text-2xl font-bold text-gradient mb-4">5+ Years</h3>
                                    <p className="text-gray-300">of Professional Experience</p> */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="sm:py-20 py-5 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-[#bf00ff] mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <SkillCard key={skill.name} {...skill} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section id="projects" className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-[#bf00ff] mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} {...project} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section id="contact" className="py-20 relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-6 text-gradient">Let's Work Together</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-[#bf00ff] mx-auto rounded-full mb-8" />
                        <p className="text-xl text-gray-300 mb-12">
                            Ready to bring your ideas to life? Let's create something amazing together.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-effect p-8 rounded-lg neon-border"
                    >
                        <div className="flex justify-center w-full mb-8">
                            <div className="flex justify-center gap-4 md:gap-14">
                                <motion.a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 glass-effect rounded-lg border border-[#00ffff]/30 hover:border-[#00ffff]/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Github size={24} className="text-[#00ffff]" />
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 glass-effect rounded-lg border border-[#00ffff]/30 hover:border-[#00ffff]/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Linkedin size={24} className="text-[#00ffff]" />
                                </motion.a>
                                <motion.a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=umarfarooq@gmail.com"
                                    className="p-3 glass-effect rounded-lg border border-[#00ffff]/30 hover:border-[#00ffff]/60 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    target='_blank'
                                >
                                    <Mail size={24} className="text-[#00ffff]" />
                                </motion.a>
                            </div>
                        </div>

                        <motion.button
                            className="px-8 cursor-pointer py-4 bg-gradient-to-r from-[#00ffff] to-[#0080ff] text-black font-bold rounded-lg text-lg shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleCopyEmailBtn}
                        >
                            {displayText}
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-400">
                        © 2025 Umar Farooq. Crafted with passion and cutting-edge technology.
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Index