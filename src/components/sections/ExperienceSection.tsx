"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Machine Learning Intern",
        company: "Bharat Intern",
        period: "Ongoing",
        description: "Developed Wine Quality Prediction and House Price Prediction models in Python with focus on accuracy, evaluation metrics, and reporting.",
        tags: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
        role: "IUCEE NEP Scholar",
        company: "IUCEE",
        period: "Past",
        description: "Contributed to technology-enabled learning initiatives aligned with India's National Education Policy.",
        tags: ["EdTech", "NEP", "Research"]
    }
];

const education = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Kalasalingam Academy of Research and Education",
        location: "Tamil Nadu, India",
        period: "Oct 2021 – May 2025",
        grade: "CGPA: 8.43"
    },
    {
        degree: "MPC (Intermediate)",
        institution: "Narayana Junior College",
        location: "Anantapur, India",
        period: "Jun 2019 – Mar 2021",
        grade: "Score: 966/1000"
    },
    {
        degree: "High School",
        institution: "Jnana Bharathi High School",
        location: "Anantapur, India",
        period: "Jun 2018 – Apr 2019",
        grade: "CGPA: 9.8"
    }
];

const certifications = [
    { name: "Data Science Professional", issuer: "Oracle", icon: "🏅" },
    { name: "Git and GitHub Workshop", issuer: "College Management", icon: "🏅" }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Decorative Blur */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Experience Section */}
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 flex items-center"
                    >
                        <span className="w-8 h-1 bg-primary mr-4 rounded-full" />
                        Professional <span className="text-gray-400 font-light ml-2">Experience</span>
                    </motion.h2>

                    <div className="space-y-8 relative">
                        {/* Timeline rule */}
                        <div className="absolute left-6 top-8 bottom-8 w-px bg-white/10 hidden md:block" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-0 md:pl-16 group"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[21px] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-black hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(124,58,237,0.8)]" />

                                <div className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all glow-card">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                                            <div className="text-gray-400 font-medium mb-2">{exp.company}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed mb-6">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-black/40 border border-white/5 rounded-full text-xs text-gray-300 font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Education Section */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-10 flex items-center"
                        >
                            <span className="w-8 h-1 bg-primary-light mr-4 rounded-full" />
                            Education
                        </motion.h2>

                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-transparent border-l-2 border-white/10 pl-6 py-2 hover:border-primary transition-colors"
                                >
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                                    <div className="text-primary-light text-sm font-medium mb-2">{edu.institution}</div>
                                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 gap-1 sm:gap-4 mb-2">
                                        <span>{edu.period}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>{edu.location}</span>
                                    </div>
                                    <div className="inline-block px-2 py-1 bg-white/5 rounded text-xs font-mono text-gray-300 border border-white/5">
                                        {edu.grade}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-10 flex items-center"
                        >
                            <span className="w-8 h-1 bg-white/80 mr-4 rounded-full" />
                            Certifications
                        </motion.h2>

                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center p-6 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-primary/50 transition-colors group glow-card"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mr-6 group-hover:scale-110 transition-transform">
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                                        <div className="text-sm font-medium text-gray-400">{cert.issuer}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
