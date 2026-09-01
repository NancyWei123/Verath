import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Terminal, Key, Cpu, Code, Check, Copy } from 'lucide-react';

const docsTabs = [
    {
        id: 'quickstart',
        title: 'Quickstart Guide',
        icon: Terminal,
        content: {
            heading: 'Getting Started with Verath',
            desc: 'Verath consists of a FastAPI backend (Python 3.11+), MongoDB document store, ChromaDB vector store, and React / Expo clients.',
            code: `# 1. Clone the repository
git clone https://github.com/Chetan0e/Verath.git
cd Verath

# 2. Configure environment variables
cp .env.example .env

# 3. Launch via Docker Compose (Recommended)
docker-compose up -d --build

# Or start Python backend locally:
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate
pip install -r backend/requirements.txt
uvicorn app.main:app --reload --port 8000`
        }
    },
    {
        id: 'api',
        title: 'API Reference',
        icon: Code,
        content: {
            heading: 'RESTful API Endpoints',
            desc: 'The FastAPI server provides endpoints for memory capture, hybrid RAG query, timeline retrieval, memory graph, and export.',
            endpoints: [
                { method: 'POST', path: '/auth/signup', desc: 'Register a new user account with isolated ChromaDB vector collection.' },
                { method: 'POST', path: '/auth/login', desc: 'Authenticate and receive JWT access token + HTTP-only refresh token.' },
                { method: 'POST', path: '/record', desc: 'Capture voice recording or raw text note for automated processing.' },
                { method: 'POST', path: '/query', desc: 'Hybrid RAG retrieval with vector search, cross-encoder re-ranking, and grounded LLM output.' },
                { method: 'GET', path: '/memories', desc: 'Retrieve paginated memory timeline with filters for intent and date range.' },
                { method: 'GET', path: '/graph', desc: 'Fetch entity and topic graph nodes/edges for mind-map rendering.' },
                { method: 'POST', path: '/export', desc: 'Download memory history as formatted JSON or CSV.' }
            ]
        }
    },
    {
        id: 'auth',
        title: 'Authentication & Security',
        icon: Key,
        content: {
            heading: 'JWT Authentication & Privacy Controls',
            desc: 'All endpoints (except public auth) require a Bearer token in the Authorization header. Rate limits are enforced per client IP address.',
            code: `# Example authenticated query request:
curl -X POST "http://localhost:8000/query" \\
  -H "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "What tasks do I have scheduled for this Friday?",
    "top_k": 5
  }'`
        }
    },
    {
        id: 'rag',
        title: 'Hybrid RAG Architecture',
        icon: Cpu,
        content: {
            heading: 'Two-Stage Retrieval & Grounded Generation',
            desc: 'Standard vector search often returns irrelevant neighbors. Verath uses a two-stage retrieval pipeline to guarantee zero-hallucination accuracy.',
            steps: [
                '1. Candidate Retrieval: ChromaDB retrieves the top 20 candidate vectors using Gemini embeddings.',
                '2. Cross-Encoder Re-Ranking: A neural cross-encoder scores candidate relevance relative to the explicit query.',
                '3. Grounded Prompting: The top 5 re-ranked memories are injected into Groq/Gemini LLM system context.',
                '4. Citation & Confidence: The output returns the final answer alongside confidence metrics and memory IDs.'
            ]
        }
    }
];

const DocsModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('quickstart');
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const currentDoc = docsTabs.find(tab => tab.id === activeTab);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
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
                    className="relative w-full max-w-5xl h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row z-10"
                >
                    {/* Header for Mobile */}
                    <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-violet-600" />
                            <span className="font-bold text-gray-900">Verath Documentation</span>
                        </div>
                        <button onClick={onClose} className="p-2 rounded-lg text-gray-500 hover:bg-gray-200">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-4 flex flex-col justify-between flex-shrink-0">
                        <div>
                            <div className="hidden md:flex items-center gap-3 mb-6 px-2">
                                <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white">
                                    <BookOpen className="w-4 h-4" />
                                </div>
                                <span className="font-bold text-gray-900 text-base">Documentation</span>
                            </div>

                            <nav className="space-y-1">
                                {docsTabs.map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                                isActive
                                                    ? 'bg-violet-600 text-white shadow-md shadow-violet-500/20'
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span>{tab.title}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        <div className="hidden md:block pt-4 border-t border-gray-200 text-xs text-gray-500 px-2">
                            <span>Verath v3.0.0 API Docs</span>
                        </div>
                    </div>

                    {/* Content Panel */}
                    <div className="flex-1 p-6 md:p-8 overflow-y-auto relative flex flex-col justify-between">
                        <button
                            onClick={onClose}
                            className="hidden md:flex absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {currentDoc.content.heading}
                            </h2>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {currentDoc.content.desc}
                            </p>

                            {/* Code snippet view */}
                            {currentDoc.content.code && (
                                <div className="relative rounded-2xl bg-gray-900 text-gray-100 p-4 font-mono text-xs overflow-x-auto leading-relaxed border border-gray-800 shadow-inner">
                                    <button
                                        onClick={() => handleCopy(currentDoc.content.code)}
                                        className="absolute top-3 right-3 p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                    <pre>{currentDoc.content.code}</pre>
                                </div>
                            )}

                            {/* Endpoints list */}
                            {currentDoc.content.endpoints && (
                                <div className="space-y-3">
                                    {currentDoc.content.endpoints.map((ep, idx) => (
                                        <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-center gap-3">
                                            <span className={`text-xs font-bold px-2.5 py-1 rounded-md w-fit ${
                                                ep.method === 'POST' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                                            }`}>
                                                {ep.method}
                                            </span>
                                            <code className="font-mono text-xs font-bold text-gray-900">{ep.path}</code>
                                            <span className="text-xs text-gray-600 sm:ml-auto">{ep.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Steps list */}
                            {currentDoc.content.steps && (
                                <div className="space-y-3">
                                    {currentDoc.content.steps.map((step, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-violet-50/50 border border-violet-100 text-sm text-gray-800 leading-relaxed">
                                            {step}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                            <span>Need more help? Check the GitHub repository or join Discord.</span>
                            <a href="https://github.com/Chetan0e/Verath" target="_blank" rel="noopener noreferrer" className="text-violet-600 font-semibold hover:underline">
                                View GitHub Repo &rarr;
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default DocsModal;
