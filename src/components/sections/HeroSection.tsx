"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
    const roles = [
        "AI Agent Developer",
        "Automation Engineer",
        "Python Developer",
        "ML Engineer",
        "Web Developer",
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background Particles (Simplified CSS version) */}
            <div className="absolute inset-0 z-0 opacity-20">
                {isMounted && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary"
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [0, Math.random() * -100 - 50],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="md:w-3/5 text-left mb-12 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300 tracking-wide">
                            Open to opportunities
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
                    >
                        Hey! I'm <span className="text-primary">Tharun Sai,</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-10 md:h-14 mb-4 flex items-center"
                    >
                        <span className="text-xl md:text-3xl font-medium text-gray-400 mr-2">
                            Based in India ·{" "}
                        </span>
                        <motion.span
                            key={currentRoleIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary"
                        >
                            {roles[currentRoleIndex]}
                        </motion.span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed"
                    >
                        "Building automation-first workflows and intelligent AI agents that solve
                        real-world business problems."
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-white font-medium flex items-center justify-center hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] group"
                        >
                            View Work
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/Tharunnn.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium flex items-center justify-center hover:bg-white/5 transition-colors"
                        >
                            <Download className="mr-2 w-4 h-4" />
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/* Right Content / 3D Element Placeholder Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="md:w-2/5 flex justify-center relative mt-16 md:mt-0"
                >
                    {/* Abstract geometric animation representing "futuristic 3D" */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-primary/20 border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[10%] rounded-full border border-primary-light/30 border-t-primary-light"
                        />
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-primary to-purple-900 shadow-[0_0_50px_rgba(124,58,237,0.4)] z-10 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#050505] flex items-center justify-center border-2 border-white/20 relative">
                                <img
                                    src="/profile.jpeg"
                                    alt="Devarla Tharun Sai"
                                    className="w-[95%] h-[95%] object-contain rounded-full mt-2"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Marquee Bottom Strip */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden bg-white/5 border-t border-white/10 py-3 backdrop-blur-sm">
                <div className="flex whitespace-nowrap">
                    <motion.div
                        className="flex items-center space-x-8 text-sm font-medium text-gray-400 tracking-wider"
                        animate={{ x: [0, -1035] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-8">
                                <span>✦</span>
                                <span>Python</span>
                                <span>✦</span>
                                <span>Java</span>
                                <span>✦</span>
                                <span>AI Agents</span>
                                <span>✦</span>
                                <span>n8n</span>
                                <span>✦</span>
                                <span>LLMs</span>
                                <span>✦</span>
                                <span>Machine Learning</span>
                                <span>✦</span>
                                <span>Automation</span>
                                <span>✦</span>
                                <span>Prompt Engineering</span>
                                <span>✦</span>
                                <span>Gemini API</span>
                                <span>✦</span>
                                <span>Workflow Design</span>
                                <span>✦</span>
                                <span>API Integration</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
