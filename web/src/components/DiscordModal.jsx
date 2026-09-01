import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Users, Sparkles, Hash, ArrowRight, ShieldCheck } from 'lucide-react';

const DiscordModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const channels = [
        { name: 'announcements', desc: 'Official updates, releases & version notes' },
        { name: 'showcase', desc: 'Share your custom workflows & memory integrations' },
        { name: 'feature-requests', desc: 'Vote and suggest new capabilities for v3.1' },
        { name: 'support', desc: 'Get help from community developers and contributors' }
    ];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-10"
                >
                    {/* Top Banner */}
                    <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-6 sm:p-8 text-white relative">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 uppercase tracking-wider">
                                Official Community
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Join the Verath Discord</h2>
                        <p className="text-indigo-100 text-sm mt-2">
                            Connect with 2,400+ developers, researchers, and productivity enthusiasts.
                        </p>

                        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/20 text-xs font-medium">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>180+ Online Now</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-indigo-200" />
                                <span>2,400+ Members</span>
                            </div>
                        </div>
                    </div>

                    {/* Channels List */}
                    <div className="p-6 sm:p-8 space-y-6">
                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                Popular Community Channels
                            </h3>
                            <div className="space-y-2.5">
                                {channels.map((ch, idx) => (
                                    <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-gray-100/80 transition-colors">
                                        <Hash className="w-4 h-4 text-violet-600 flex-shrink-0" />
                                        <div className="min-w-0">
                                            <span className="text-sm font-bold text-gray-900">{ch.name}</span>
                                            <p className="text-xs text-gray-500 truncate">{ch.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-violet-950 leading-relaxed">
                                Verath is open-source. Share feedback, request API features, or collaborate on custom memory extensions.
                            </p>
                        </div>

                        <div className="pt-2">
                            <a
                                href="https://discord.gg/verath"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.01]"
                            >
                                <span>Join Discord Server</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default DiscordModal;
