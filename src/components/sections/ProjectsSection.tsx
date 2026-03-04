"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type Category = "All" | "AI Agents & Automation" | "Web Development";

interface Project {
    id: number;
    title: string;
    year: string;
    category: Category;
    tags: string[];
    description: string;
    badge: "Live" | "Built";
}

const projects: Project[] = [
    {
        id: 1,
        title: "Automated Daily Newsletter Agent",
        year: "2025",
        category: "AI Agents & Automation",
        tags: ["n8n", "LLM", "Email API", "Automation"],
        description: "AI agent that collects city-specific news, summarizes content using LLMs, and delivers formatted daily email newsletters automatically via n8n and email APIs.",
        badge: "Live",
    },
    {
        id: 2,
        title: "Restaurant Chat Assistant",
        year: "2025",
        category: "AI Agents & Automation",
        tags: ["LLM", "Booking API", "Knowledge Base", "Chatbot"],
        description: "Conversational AI assistant handling menu queries, table reservations, and FAQs — powered by structured LLM prompts and a restaurant-specific knowledge base.",
        badge: "Live",
    },
    {
        id: 3,
        title: "Luxury Real Estate Lead Gen & Automation Agent",
        year: "2025",
        category: "AI Agents & Automation",
        tags: ["CRM", "AI Agent", "Lead Qualification", "Messaging API"],
        description: "Intelligent agent that qualifies luxury real estate leads, automates personalized follow-ups, and routes high-intent prospects to the sales team.",
        badge: "Live",
    },
    {
        id: 4,
        title: "AI Customer Support Bot",
        year: "2025",
        category: "AI Agents & Automation",
        tags: ["Python", "Gemini API", "Webhook", "NLP"],
        description: "Fully automated customer support chatbot that handles FAQs, ticket creation, and escalation logic using Gemini API and webhook-based event triggers.",
        badge: "Built",
    },
    {
        id: 5,
        title: "Social Media Content Automation Pipeline",
        year: "2025",
        category: "AI Agents & Automation",
        tags: ["n8n", "OpenAI", "Buffer API", "Automation"],
        description: "End-to-end automation that generates weekly social media content using LLMs, schedules posts via Buffer API, and tracks engagement.",
        badge: "Built",
    },
    {
        id: 6,
        title: "AI Voice Appointment Booking Agent",
        year: "2025",
        category: "AI Agents & Automation",
        tags: ["Python", "Twilio", "LLM", "Calendar API"],
        description: "Voice-enabled AI agent that handles inbound appointment booking calls, understands natural language, and checks calendar availability.",
        badge: "Built",
    },
    {
        id: 7,
        title: "E-Commerce Order Tracking Chatbot",
        year: "2025",
        category: "AI Agents & Automation",
        tags: ["Chatbot", "API Integration", "n8n", "LLM"],
        description: "Intelligent chatbot integrated into e-commerce platforms that fetches real-time order status, handles return requests, and answers product queries.",
        badge: "Built",
    },
    {
        id: 13,
        title: "Watsys Consulting Engineering Web Project",
        year: "2024",
        category: "Web Development",
        tags: ["Web Development", "Next.js", "Engineering", "Consulting"],
        description: "A comprehensive web platform designed for an engineering consulting firm to showcase services, resources, and case studies effectively.",
        badge: "Live",
    },
    {
        id: 8,
        title: "Personalized Healthcare Solutions",
        year: "Built",
        category: "Web Development",
        tags: ["HTML", "CSS", "JavaScript", "Machine Learning"],
        description: "Responsive web application that integrates ML models to deliver personalized health recommendations based on user inputs.",
        badge: "Live",
    },
    {
        id: 9,
        title: "Portfolio Builder",
        year: "2025",
        category: "Web Development",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        description: "A drag-and-drop portfolio generator that lets developers create and export a fully responsive personal portfolio site by filling in a structured form.",
        badge: "Built",
    },
    {
        id: 10,
        title: "Smart Expense Tracker",
        year: "2025",
        category: "Web Development",
        tags: ["JavaScript", "CSS", "LocalStorage", "Data Viz"],
        description: "A clean, interactive expense tracking web app with category-wise breakdowns, monthly summaries, and visual charts.",
        badge: "Built",
    },
    {
        id: 11,
        title: "AI Blog Platform",
        year: "2025",
        category: "Web Development",
        tags: ["HTML", "CSS", "JavaScript", "Gemini API"],
        description: "A minimal blogging platform where users type a topic and the Gemini API auto-generates a full structured blog post.",
        badge: "Built",
    },
    {
        id: 12,
        title: "Weather Intelligence Dashboard",
        year: "2024",
        category: "Web Development",
        tags: ["JavaScript", "OpenWeather API", "CSS", "Responsive"],
        description: "Real-time weather dashboard with location detection, 7-day forecasts, air quality index, and animated weather visuals.",
        badge: "Built",
    },
];

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState<Category>("All");

    const filteredProjects = projects.filter(
        (project) => activeTab === "All" || project.category === activeTab
    );

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Selected <span className="text-primary italic">Works</span>
                    </motion.h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
                        {(["All", "AI Agents & Automation", "Web Development"] as Category[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all relative ${activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary/80 backdrop-blur-md rounded-full -z-10 shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative flex flex-col h-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden glow-card"
                            >
                                {/* Project Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md border ${project.badge === "Live"
                                        ? "bg-green-500/10 border-green-500/30 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                                        : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                                        }`}>
                                        {project.badge}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="text-sm font-medium text-primary-light mb-2">{project.category} · {project.year}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs font-medium bg-black/50 border border-white/5 rounded-md text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-auto pt-4 border-t border-white/5 flex gap-4">
                                        <a href="#" className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors border border-white/5 flex items-center justify-center group/btn">
                                            View Project <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                                        </a>
                                    </div>
                                </div>

                                {/* Hover gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        <Github className="mr-2 w-5 h-5" /> See more on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
