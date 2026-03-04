"use client";

import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "AI Agent Development",
        description: "End-to-end intelligent agents for automation, lead generation, and business logic.",
    },
    {
        id: "02",
        title: "Workflow Automation",
        description: "n8n pipelines, webhook-based automations, and event-driven systems.",
    },
    {
        id: "03",
        title: "Chatbot Engineering",
        description: "LLM-powered chatbots for customer support, bookings, and FAQs.",
    },
    {
        id: "04",
        title: "Web Development",
        description: "Responsive, interactive web apps using HTML, CSS, JavaScript, and ML integrations.",
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Capabilities & <span className="text-primary italic">Expertise</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/5 overflow-hidden glow-card"
                        >
                            {/* Animated number background */}
                            <div className="absolute -top-10 -right-4 text-[12rem] font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 select-none z-0">
                                {service.id}
                            </div>

                            <div className="relative z-10">
                                <div className="text-sm font-bold text-primary mb-4 tracking-widest uppercase">
                                    Service / {service.id}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed max-w-sm">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover line indicator */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-light w-0 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
