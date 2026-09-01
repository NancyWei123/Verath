import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileCheck } from 'lucide-react';

const legalDocs = {
    privacy: {
        title: "Privacy Policy",
        lastUpdated: "August 2026",
        icon: ShieldCheck,
        content: [
            {
                section: "1. Zero Cloud Training Guarantee",
                body: "Verath is designed to preserve the confidentiality of your personal digital memory. Your raw transcripts, voice audio, and memory vector embeddings are processed strictly for your own retrieval. We do not sell, share, or train foundation AI models on your user data."
            },
            {
                section: "2. Data Storage & Isolation",
                body: "All documents are stored in MongoDB with strict user-id scoping. Vector embeddings are stored in isolated ChromaDB collections created per individual account. Cross-account vector similarity queries are programmatically impossible."
            },
            {
                section: "3. Audio Processing & Retention",
                body: "Audio recorded via the mobile application or web dashboard is transcribed locally using OpenAI Whisper models. Once transcription and entity extraction are completed, raw audio buffer files are deleted immediately unless local retention is explicitly configured."
            },
            {
                section: "4. User Control & Deletion",
                body: "You retain 100% ownership of your data. You may export your entire memory store into formatted JSON or CSV at any time, or request complete atomic deletion of all MongoDB documents and ChromaDB vector embeddings."
            }
        ]
    },
    terms: {
        title: "Terms of Service",
        lastUpdated: "August 2026",
        icon: FileCheck,
        content: [
            {
                section: "1. Acceptance of Terms",
                body: "By creating an account or accessing Verath services (including web, mobile, CLI, or API interfaces), you agree to be bound by these Terms of Service."
            },
            {
                section: "2. Account Responsibilities",
                body: "You are responsible for maintaining the confidentiality of your JWT authentication credentials and API keys. Any action originating from your authenticated session is your responsibility."
            },
            {
                section: "3. Acceptable Use",
                body: "You agree not to use Verath to store illegal material, attempt unauthorized access to isolated database collections, or bypass system rate limits."
            },
            {
                section: "4. Disclaimer & Open Source Core",
                body: "Verath software is provided 'as is' without warranties of any kind. While engineered for maximum reliability and data integrity, you are encouraged to maintain regular memory exports."
            }
        ]
    }
};

const LegalModal = ({ isOpen, type, onClose }) => {
    if (!isOpen || !type || !legalDocs[type]) return null;

    const doc = legalDocs[type];
    const Icon = doc.icon;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-y-auto p-6 sm:p-10 z-10 flex flex-col justify-between"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center">
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{doc.title}</h2>
                                <span className="text-xs text-gray-500">Last Updated: {doc.lastUpdated}</span>
                            </div>
                        </div>

                        <div className="space-y-6 mt-6">
                            {doc.content.map((sec, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{sec.section}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{sec.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                        <span className="text-xs text-gray-500">© 2026 Verath Memory Systems</span>
                        <button
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs"
                        >
                            I Understand & Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LegalModal;
