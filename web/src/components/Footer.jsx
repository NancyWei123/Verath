import React from 'react';
import { MessageSquare, BookOpen, ExternalLink } from 'lucide-react';

const Footer = ({ onOpenDocs, onOpenDiscord, onOpenLegal }) => {
    const footerLinks = [
        {
            title: 'Product',
            links: [
                { label: 'Features', href: '#features' },
                { label: 'How it works', href: '#how-it-works' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', href: '#docs', onClick: onOpenDocs },
                { label: 'GitHub', href: 'https://github.com/Chetan0e/Verath', external: true },
                { label: 'Discord', href: '#discord', onClick: onOpenDiscord },
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

    const handleLinkClick = (e, link) => {
        if (link.onClick) {
            e.preventDefault();
            link.onClick();
        } else if (link.href.startsWith('#')) {
            const el = document.querySelector(link.href);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="relative border-t border-gray-200 bg-gray-50/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">

                {/* Top */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">

                    {/* Brand */}
                    <div className="max-w-xs">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-sm">V</span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900 tracking-tight">Verath</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mt-2">
                            Your intelligent digital memory system. Record, extract, search, and remember effortlessly.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <a
                                href="https://github.com/Chetan0e/Verath"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub Repository"
                                className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all shadow-sm"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                                href="#discord"
                                onClick={(e) => { e.preventDefault(); if (onOpenDiscord) onOpenDiscord(); }}
                                title="Discord Community"
                                className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all shadow-sm"
                            >
                                <MessageSquare className="w-4 h-4" />
                            </a>
                            <a
                                href="#docs"
                                onClick={(e) => { e.preventDefault(); if (onOpenDocs) onOpenDocs(); }}
                                title="Documentation"
                                className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all shadow-sm"
                            >
                                <BookOpen className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">{section.title}</h4>
                                <ul className="space-y-2.5">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                target={link.external ? "_blank" : undefined}
                                                rel={link.external ? "noopener noreferrer" : undefined}
                                                onClick={(e) => handleLinkClick(e, link)}
                                                className="text-sm text-gray-600 hover:text-violet-600 transition-colors duration-300"
                                            >
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
                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© 2026 Verath Memory Systems. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => onOpenLegal && onOpenLegal('privacy')}
                            className="hover:text-gray-800 transition-colors"
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => onOpenLegal && onOpenLegal('terms')}
                            className="hover:text-gray-800 transition-colors"
                        >
                            Terms of Service
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;