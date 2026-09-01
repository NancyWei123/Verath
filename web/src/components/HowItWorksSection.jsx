import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Cpu, Database, Sparkles, ArrowRight, Check } from 'lucide-react';

const steps = [
    {
        num: "01",
        title: "Capture Spoken or Text Input",
        short: "Record anywhere",
        icon: Mic,
        detail: "Record voice notes using the mobile Expo app, web dashboard microphone, terminal CLI (`scripts/record_cli.py`), or direct API endpoints (`POST /record` / `POST /record/upload`).",
        features: ["Local Whisper STT", "Mobile & Web sync", "Background job queue", "Multipart file upload"]
    },
    {
        num: "02",
        title: "Extract Intent & Speech Corrections",
        short: "AI Processing",
        icon: Cpu,
        detail: "Verath's extraction pipeline detects self-corrections (e.g. 'meet on Monday... no wait, Tuesday'), classifies intent (`meeting`, `deadline`, `task`), and extracts temporal entities using NLP + `dateparser`.",
        features: ["Speech correction engine", "Intent classifier", "Entity & date parser", "Importance scoring"]
    },
    {
        num: "03",
        title: "Dual Persistence Storage",
        short: "MongoDB + Vector DB",
        icon: Database,
        detail: "Memories receive a UUID and get atomically saved to MongoDB (full document history) and ChromaDB vector embeddings with per-user collection isolation.",
        features: ["MongoDB document store", "ChromaDB vector store", "Per-user collection isolation", "Resilient vector repair"]
    },
    {
        num: "04",
        title: "Neural RAG & Grounded Recall",
        short: "Instant Q&A",
        icon: Sparkles,
        detail: "Ask questions in plain language ('What deadlines do I have this week?'). Verath retrieves candidate memories, re-ranks them via Cross-Encoder neural models, and generates grounded LLM responses with exact citations.",
        features: ["Hybrid vector search", "Cross-encoder re-ranking", "Zero-hallucination grounding", "Source citation links"]
    }
];

const HowItWorksSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-4"
                    >
                        <span>Simple 4-Step Pipeline</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight"
                    >
                        How Verath Remembers Everything
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
                    >
                        From spoken thought to neural retrieval in four lightning-fast stages.
                    </motion.p>
                </div>

                {/* Interactive Steps Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Step Navigation Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = activeStep === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    onClick={() => setActiveStep(idx)}
                                    whileHover={{ scale: 1.01 }}
                                    className={`p-5 rounded-2xl cursor-pointer border-2 transition-all duration-300 ${
                                        isActive
                                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-transparent shadow-lg shadow-violet-500/25'
                                            : 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100/80'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                                                isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                                            }`}>
                                                Step {step.num}
                                            </span>
                                            <h3 className={`font-bold text-base sm:text-lg ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                                {step.title}
                                            </h3>
                                        </div>
                                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Active Step Details Panel */}
                    <div className="lg:col-span-7">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 text-white shadow-2xl border border-gray-800 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                                            {React.createElement(steps[activeStep].icon, { className: "w-6 h-6 text-violet-400" })}
                                        </div>
                                        <div>
                                            <span className="text-xs uppercase tracking-wider text-violet-400 font-semibold">Stage {steps[activeStep].num}</span>
                                            <h4 className="text-xl sm:text-2xl font-bold">{steps[activeStep].title}</h4>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                                    {steps[activeStep].detail}
                                </p>

                                <div className="space-y-3">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Key Technologies & Capabilities</span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {steps[activeStep].features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl text-sm text-gray-200">
                                                <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                                <span>Automated pipeline latency: &lt; 800ms</span>
                                <div className="flex items-center gap-1 text-violet-400 font-medium cursor-pointer hover:underline" onClick={() => setActiveStep((activeStep + 1) % steps.length)}>
                                    <span>Next Step</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HowItWorksSection;
