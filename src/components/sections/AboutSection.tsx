"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(from + (to - from) * progress);
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(to);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration, isInView]);

    // Format to 2 decimal places if there is a decimal
    const formattedCount = Number.isInteger(to) ? Math.floor(count) : count.toFixed(2);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold font-space-grotesk text-white">
            {formattedCount}
            <span className="text-primary">{suffix}</span>
        </div>
    );
}

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { label: "Projects Built", value: 8, suffix: "+" },
        { label: "CGPA", value: 8.43, suffix: "" },
        { label: "AI Agents in Production", value: 3, suffix: "" },
        { label: "Automation Mindset", value: 100, suffix: "%" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            {/* Decorative side accent blur */}
            <div className="absolute top-1/2 -right-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-col lg:flex-row gap-16"
                >
                    {/* Left Text Column */}
                    <div className="lg:w-1/2">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
                            About Me
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                            I don't just write code — <br />
                            <span className="text-gray-400">I build intelligent systems.</span>
                        </motion.h3>
                        <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed mb-6">
                            I'm an AI Agent and Software Developer from India, passionate about
                            building automation-first workflows, AI chatbots, and end-to-end
                            intelligent agents.
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed">
                            I combine web development with modern LLMs, n8n, and API integrations
                            to engineer systems that save time and solve real business challenges.
                            Whether it's deploying a real-time reservation chatbot or developing
                            full-stack responsive web apps, my goal is always seamless automation
                            and premium user experiences.
                        </motion.p>
                    </div>

                    {/* Right Stats Column */}
                    <div className="lg:w-1/2 relative">
                        {/* Outline Card styling */}
                        <motion.div
                            variants={itemVariants}
                            className="absolute inset-0 border border-primary/20 rounded-3xl -rotate-2 scale-105 z-0"
                        />
                        <motion.div
                            variants={itemVariants}
                            className="relative bg-white/5 border border-white/10 rounded-3xl p-10 z-10 backdrop-blur-md glow-card"
                        >
                            <div className="grid grid-cols-2 gap-10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex flex-col space-y-2">
                                        <Counter from={0} to={stat.value} suffix={stat.suffix} />
                                        <span className="text-sm text-gray-400 font-medium tracking-wide">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative mini grid for visual interest */}
                            <div className="absolute top-6 right-6 flex gap-1 opacity-20">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
