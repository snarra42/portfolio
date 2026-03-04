"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function ContactSection() {
    const currentYear = new Date().getFullYear();

    return (
        <section id="contact" className="pt-24 pb-10 relative overflow-hidden bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Main CTA */}
                <div className="flex flex-col items-center text-center justify-center min-h-[50vh] mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Soft background glow */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 relative z-10 w-full max-w-5xl">
                            Let's build something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-purple-800 italic pr-2">intelligent</span>
                            together!
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 relative z-10">
                            <a
                                href="mailto:tharunsaidevarla@gmail.com"
                                className="flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Shoot me an email</span>
                            </a>
                            <a
                                href="tel:+919652664259"
                                className="flex items-center space-x-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                <span>+91 9652664259</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Marquee */}
                <div className="w-full overflow-hidden border-y border-white/5 py-4 mb-16 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

                    <div className="flex">
                        <motion.div
                            className="flex whitespace-nowrap text-8xl font-black text-white/[0.03] uppercase pointer-events-none"
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                        >
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex space-x-12 px-6 tracking-tighter">
                                    <span>tharun sai</span>
                                    <span>✦</span>
                                    <span>tharun sai</span>
                                    <span>✦</span>
                                    <span>tharun sai</span>
                                    <span>✦</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400 font-medium">
                        <a href="#home" className="hover:text-primary transition-colors">Home</a>
                        <span>|</span>
                        <a href="#about" className="hover:text-primary transition-colors">About</a>
                        <span>|</span>
                        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                        <span>|</span>
                        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                        <span>|</span>
                        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                        <span>|</span>
                        <a href="#services" className="hover:text-primary transition-colors">Services</a>
                    </div>

                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                            LinkedIn <ExternalLink className="w-3 h-3" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                            GitHub <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                <div className="text-center text-gray-600 text-xs mt-12">
                    © {currentYear} Devarla Tharun Sai. All rights reserved. Built with Next.js & Framer Motion.
                </div>
            </div>
        </section>
    );
}
