"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Python", icon: "python-plain" },
    { name: "Java", icon: "java-plain" },
    { name: "C++", icon: "cplusplus-plain" },
    { name: "JavaScript", icon: "javascript-plain" },
    { name: "HTML5", icon: "html5-plain" },
    { name: "CSS3", icon: "css3-plain" },
    { name: "SQL", icon: "azuresqldatabase-plain", override: true, customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-plain.svg" },
    { name: "VS Code", icon: "vscode-plain" },
    { name: "Git", icon: "git-plain" },
    { name: "GitHub", icon: "github-original" },
    { name: "Linux", icon: "linux-plain" },
    { name: "Windows", icon: "windows8-original" },
];

const concepts = [
    "n8n Automation", "Gemini API", "OpenAI API", "LangChain Basics",
    "Prompt Engineering", "Machine Learning", "Deep Learning",
    "Webhook Automations", "Event-driven Pipelines"
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        My Favorite <span className="text-primary italic">Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Tools, technologies, and concepts I use to engineer intelligent systems.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Technologies Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl font-bold mb-8 text-white border-b border-white/10 pb-4">Core Technologies</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/10 transition-colors group cursor-none"
                                >
                                    {skill.override ? (
                                        <img
                                            src={skill.customUrl}
                                            alt={skill.name}
                                            className="w-10 h-10 mb-3 opacity-70 group-hover:opacity-100 invert"
                                        />
                                    ) : (
                                        <img
                                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon.split('-')[0]}/${skill.icon}.svg`}
                                            alt={skill.name}
                                            className="w-10 h-10 mb-3 opacity-70 group-hover:opacity-100 transition-opacity invert"
                                            style={{ filter: skill.icon.includes('original') && !skill.icon.includes('github') ? 'none' : 'invert(1) brightness(0.8)' }}
                                        />
                                    )}
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Concepts List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-8 text-white border-b border-white/10 pb-4">Specialized Concepts</h3>
                        <div className="flex flex-col gap-3">
                            {concepts.map((concept, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * (idx % 5) }}
                                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-primary/30 group"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary mr-4 transition-colors shadow-[0_0_10px_rgba(124,58,237,0)] group-hover:shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
                                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{concept}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
