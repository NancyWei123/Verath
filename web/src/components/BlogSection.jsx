import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, X, User, Tag } from 'lucide-react';

const blogPosts = [
    {
        id: 'post-1',
        title: 'Introducing Verath v3.0: Speech Self-Correction & Cross-Encoder RAG',
        date: 'August 28, 2026',
        readTime: '5 min read',
        tag: 'Product Release',
        author: 'Verath Core Team',
        summary: 'How we solved natural human hesitations in speech recognition and built a two-stage neural re-ranking engine for personal memory.',
        content: `When people speak naturally, they constantly self-correct: "Let's set up the demo for Tuesday... wait, no, Thursday at 2 PM."

Traditional speech recognition models pass raw transcripts into memory, resulting in conflicting dates and invalid reminders. 

In Verath v3.0, we introduced a specialized **Speech Self-Correction Parsing Engine**. By analyzing discourse markers and temporal overrides before vector embedding, Verath extracts the user's true intent accurately.

Additionally, v3.0 upgrades our retrieval pipeline to a two-stage architecture:
1. **Dense Vector Search**: ChromaDB narrows down candidate memories to top 20 hits.
2. **Cross-Encoder Re-Ranking**: A neural cross-encoder evaluates semantic coherence against the query, passing only the top 5 relevant memories to Groq/Gemini LLM context.`
    },
    {
        id: 'post-2',
        title: 'Why Simple Vector Search Isn\'t Enough for Personal Memory',
        date: 'August 15, 2026',
        readTime: '8 min read',
        tag: 'Architecture',
        author: 'Engineering',
        summary: 'Cosine distance alone falls short when retrieving complex temporal commitments. Here is how cross-encoders change the game.',
        content: `Standard RAG systems rely exclusively on single-vector similarity search (e.g. Cosine or Euclidean distance). While fast, vector distance fails on nuanced questions like "What promises did I make to Sarah last month?"

Why vector similarity struggles:
- **Keyword bias**: Overemphasizes exact word overlaps over temporal context.
- **Context dilution**: Long notes lose intent specificity when compressed into fixed-size embedding vectors.

To fix this, Verath implements a hybrid query engine. ChromaDB performs fast candidate retrieval, and a cross-encoder scores the joint query-memory pair to guarantee grounded, exact answers.`
    },
    {
        id: 'post-3',
        title: 'Local-First AI: Keeping Your Voice & Thoughts 100% Private',
        date: 'July 30, 2026',
        readTime: '6 min read',
        tag: 'Privacy & Security',
        author: 'Security Team',
        summary: 'An in-depth breakdown of isolated ChromaDB collections, local Whisper STT, and zero-retention cloud pipelines.',
        content: `Personal memory contains sensitive information—financial plans, healthcare notes, private thoughts. 

Verath was built with privacy as a foundational constraint:
- **Local Audio Processing**: Audio files are transcribed using local Whisper models before being discarded.
- **Per-User Vector Isolation**: Vector embeddings reside in isolated ChromaDB collections with separate access boundaries.
- **Privacy Mode Toggle**: Pause memory extraction with a single click anytime.`
    }
];

const BlogSection = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <section id="blog" className="py-20 lg:py-28 bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-4"
                    >
                        <BookOpen className="w-4 h-4 text-emerald-600" />
                        <span>Blog & Insights</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight"
                    >
                        Latest Engineering & Articles
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
                    >
                        Explore technical deep dives, release notes, and architecture benchmarks from the team behind Verath.
                    </motion.p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                            onClick={() => setSelectedPost(post)}
                            className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-100 text-violet-700">
                                        {post.tag}
                                    </span>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                                    {post.summary}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-violet-600 group-hover:translate-x-1 transition-transform">
                                <span>Read Full Article</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Article Reader Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-y-auto p-6 sm:p-10 z-10"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-100 text-violet-700">
                                    {selectedPost.tag}
                                </span>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {selectedPost.date}
                                </span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                {selectedPost.title}
                            </h2>

                            <div className="prose prose-violet max-w-none text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-8">
                                {selectedPost.content}
                            </div>

                            <div className="pt-6 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                                <span>Author: {selectedPost.author}</span>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium"
                                >
                                    Close Article
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BlogSection;
