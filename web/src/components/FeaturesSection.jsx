import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    Search,
    ShieldCheck,
    Bell,
    Share2,
    Database,
    Zap,
    Trash2,
    Sparkles,
    CheckCircle2
} from 'lucide-react';

const featuresList = [
    {
        icon: Brain,
        title: "Speech Self-Correction Parsing",
        badge: "v3.0 Core",
        desc: "Understands natural speech hesitations and self-corrections. Say 'Let's meet Tuesday... wait, no, Thursday at 3 PM', and Verath resolves the true intent accurately.",
        color: "from-purple-500 to-indigo-600",
        lightBg: "bg-purple-50",
        borderColor: "border-purple-200"
    },
    {
        icon: Search,
        title: "Hybrid Semantic RAG & Re-Ranking",
        badge: "Neural RAG",
        desc: "Combines dense vector retrieval in ChromaDB with cross-encoder neural re-ranking. Queries yield exact grounded answers backed by source citations.",
        color: "from-blue-500 to-cyan-600",
        lightBg: "bg-blue-50",
        borderColor: "border-blue-200"
    },
    {
        icon: Database,
        title: "Dual Persistence Architecture",
        badge: "MongoDB + ChromaDB",
        desc: "Full transcript and structured metadata preserved in MongoDB, with atomic vector synchronization in per-user isolated ChromaDB collections.",
        color: "from-emerald-500 to-teal-600",
        lightBg: "bg-emerald-50",
        borderColor: "border-emerald-200"
    },
    {
        icon: Zap,
        title: "Intent & Entity Classification",
        badge: "NLP Pipeline",
        desc: "Automatically categorizes inputs into meetings, deadlines, tasks, and commitments. Extracts dates, people, locations, and action items effortlessly.",
        color: "from-amber-500 to-orange-600",
        lightBg: "bg-amber-50",
        borderColor: "border-amber-200"
    },
    {
        icon: Bell,
        title: "Smart Reminder Scheduler",
        badge: "APScheduler Queue",
        desc: "Extracts temporal deadlines from conversations and schedules automated reminders every 15 minutes to keep you ahead of your schedule.",
        color: "from-rose-500 to-pink-600",
        lightBg: "bg-rose-50",
        borderColor: "border-rose-200"
    },
    {
        icon: Share2,
        title: "Interactive Memory Graph",
        badge: "GET /graph",
        desc: "Visualize relationships between entities, topics, and events across your timeline. Explore connected thoughts like an external digital brain.",
        color: "from-violet-500 to-purple-600",
        lightBg: "bg-violet-50",
        borderColor: "border-violet-200"
    },
    {
        icon: ShieldCheck,
        title: "Privacy Mode & Local Whisper",
        badge: "Privacy First",
        desc: "One-click per-user privacy pause button. Transcribe audio locally using OpenAI Whisper without uploading raw audio files to public cloud storage.",
        color: "from-indigo-500 to-blue-600",
        lightBg: "bg-indigo-50",
        borderColor: "border-indigo-200"
    },
    {
        icon: Trash2,
        title: "Atomic Export & Full Deletion",
        badge: "Data Ownership",
        desc: "Export your entire digital memory into formatted JSON or CSV anytime. Delete individual memories with atomic cleanup from both MongoDB and ChromaDB.",
        color: "from-slate-600 to-gray-800",
        lightBg: "bg-gray-100",
        borderColor: "border-gray-300"
    }
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/80 border border-violet-200 text-violet-700 text-xs sm:text-sm font-semibold mb-4"
                    >
                        <Sparkles className="w-4 h-4 text-violet-600" />
                        <span>Comprehensive Intelligence</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight"
                    >
                        Engineered for Complete Digital Memory
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
                    >
                        Verath combines speech recognition, neural RAG, and structural database architecture to give you an infallible second brain.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {featuresList.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            whileHover={{ y: -6 }}
                            className={`p-6 rounded-2xl bg-white border ${item.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${item.lightBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                                        {item.badge}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-violet-600 group-hover:translate-x-1 transition-transform">
                                <CheckCircle2 className="w-4 h-4 text-violet-500" />
                                <span>Fully Automated</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;
