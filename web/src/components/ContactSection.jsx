import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import Button from './Button';
import Input from './Input';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('general');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setName('');
            setEmail('');
            setMessage('');
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/80 border border-violet-200 text-violet-700 text-xs sm:text-sm font-semibold mb-4"
                    >
                        <Mail className="w-4 h-4 text-violet-600" />
                        <span>Direct Communication</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight"
                    >
                        Contact the Verath Team
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
                    >
                        Have questions about RAG architecture, custom integrations, or self-hosting? We are here to help.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Info Panel */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-900 to-indigo-950 text-white shadow-xl border border-violet-800">
                            <h3 className="text-2xl font-bold mb-4">We respond within 24 hours</h3>
                            <p className="text-violet-200 text-sm leading-relaxed mb-6">
                                Our core maintainers and engineering team read every inquiry to assist with deployments, API access, and bug reports.
                            </p>

                            <div className="space-y-4 pt-4 border-t border-violet-800/80 text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-violet-300" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-violet-300 block">Support Email</span>
                                        <a href="mailto:support@verath.ai" className="font-semibold hover:underline">support@verath.ai</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-violet-300" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-violet-300 block">Developer Discord</span>
                                        <a href="#discord" className="font-semibold hover:underline">discord.gg/verath</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-4">
                            <HelpCircle className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-base font-bold text-gray-900 mb-1">Looking for API documentation?</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Check out our interactive <a href="#docs" className="text-violet-600 font-semibold underline">Documentation viewer</a> for endpoint parameters, token authorization, and Docker quickstarts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Panel */}
                    <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl">
                        {submitted ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Message Received!</h3>
                                <p className="text-gray-600 text-sm max-w-md mx-auto">
                                    Thank you for reaching out. A team member will respond to your email shortly.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 px-6 py-2.5 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm hover:bg-gray-200"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Jane Doe"
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="jane@company.com"
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Topic / Category</label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-sm bg-white"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="enterprise">Enterprise Self-Hosting</option>
                                        <option value="bug">Bug Report & Feedback</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell us how we can help you..."
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-sm resize-none"
                                    />
                                </div>

                                <Button type="submit" loading={loading} className="w-full py-3">
                                    <span>Send Message</span>
                                    {!loading && <Send className="w-4 h-4 ml-2" />}
                                </Button>
                            </form>
                        )}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactSection;
