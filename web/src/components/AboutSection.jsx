import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap, Lock, Code2, Users, Heart } from 'lucide-react';

const pillars = [
    {
        icon: Lock,
        title: "Privacy First Architecture",
        desc: "Your memories are personal. Verath enforces per-user vector isolation in ChromaDB, local Whisper audio transcription, and zero data training."
    },
    {
        icon: Sparkles,
        title: "Grounded Zero-Hallucination Answers",
        desc: "Strict retrieval-augmented generation ensures LLM outputs are 100% grounded in your stored memories, backed by explicit source citations."
    },
    {
        icon: Zap,
        title: "Sub-Second Neural Search",
        desc: "Combines dense embeddings with cross-encoder re-ranking for instantaneous natural language retrieval across thousands of memories."
    },
    {
        icon: Code2,
        title: "Open Source Foundation",
        desc: "Built transparently on modern open technology: FastAPI, React 19, MongoDB, ChromaDB, and OpenAI Whisper."
    }
];

const techStack = [
    "Python 3.11", "FastAPI", "React 19", "Tailwind CSS", "ChromaDB", "MongoDB", "Whisper STT", "Framer Motion", "Groq / Gemini LLM", "APScheduler"
];

const AboutSection = () => {
    return (
        <section id="about" className="py-20 lg:py-28 bg-gray-900 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-semibold mb-4"
                    >
                        <Heart className="w-4 h-4 text-violet-400" />
                        <span>Our Mission & Vision</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight"
                    >
                        Augmenting Human Intelligence Through Digital Memory
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed"
                    >
                        Human memory is fragile—ideas slip away, commitments get forgotten, and context decays over time. Verath is engineered as an infallible digital companion that records, structures, and recalls your thoughts effortlessly.
                    </motion.p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
                    {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700/60 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-violet-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tech Stack Bar */}
                <div className="pt-10 border-t border-gray-800 text-center">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-4">
                        Powered by Modern Open Source Infrastructure
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        {techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3.5 py-1.5 rounded-xl bg-gray-800 border border-gray-700 text-xs sm:text-sm font-medium text-gray-300 hover:border-violet-500 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
