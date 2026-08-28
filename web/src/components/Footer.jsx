import React from 'react';
import { MessageSquare, BookOpen, ExternalLink } from 'lucide-react';

const Footer = () => {
    const footerLinks = [
        {
            title: 'Product',
            links: [
                { label: 'Features', href: '#features' },
                { label: 'How it works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', href: '#docs' },
                { label: 'GitHub', href: 'https://github.com/Chetan0e/Verath' },
                { label: 'Discord', href: '#discord' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '#about' },
                { label: 'Blog', href: '#blog' },
                { label: 'Contact', href: '#contact' },
            ],
        },
    ];

    return (
        <footer className="relative border-t border-gray-200 bg-gray-50/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">

                {/* Top */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">

                    {/* Brand */}
                    <div className="max-w-xs">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <span className="text-white font-bold text-xs">V</span>
                            </div>
                            <span className="text-lg font-semibold text-gray-900 tracking-tight">Verath</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mt-2">
                            Your intelligent digital memory.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <a href="https://github.com/Chetan0e/Verath" className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all">
                                <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="#discord" className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all">
                                <MessageSquare className="w-3 h-3" />
                            </a>
                            <a href="#docs" className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all">
                                <BookOpen className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    {/*
                     * FIX: Footer link columns previously used `grid-cols-3` with no
                     * responsive override. On narrow viewports the three columns squash
                     * and overflow. Changed to `grid-cols-2 sm:grid-cols-3` so mobile
                     * gets a comfortable 2-column layout that expands at sm+.
                     */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h4>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-gray-500">© 2026 Verath. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;