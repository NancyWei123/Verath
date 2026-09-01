import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = ({ onOpenDocs, onGetStarted }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Docs", href: "#docs", onClick: onOpenDocs },
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
    ];

    const handleLinkClick = (e, link) => {
        if (link.onClick) {
            e.preventDefault();
            link.onClick();
        } else if (link.href.startsWith("#")) {
            const el = document.querySelector(link.href);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500
            ${isScrolled
                    ? "py-2 sm:py-3"
                    : "py-3 sm:py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* Navbar Container */}
                <div
                    className={`flex items-center justify-between rounded-2xl border transition-all duration-500
                    ${isScrolled
                            ? "bg-white/95 backdrop-blur-xl border-gray-200 shadow-lg px-4 sm:px-6 py-3"
                            : "bg-white/90 backdrop-blur-md border-gray-200/50 shadow-sm px-3 sm:px-4 py-3"
                        }`}
                >

                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 sm:gap-3 cursor-pointer"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50" />

                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                                <span className="text-white font-bold text-sm sm:text-lg">
                                    V
                                </span>
                            </div>
                        </div>

                        <span className="text-gray-900 font-semibold text-lg sm:text-xl tracking-tight">
                            Verath
                        </span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link)}
                                whileHover={{ y: -2 }}
                                className="relative text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 group cursor-pointer"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center">
                        <motion.button
                            onClick={onGetStarted}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 0px 25px rgba(139,92,246,0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-sm font-medium shadow-lg shadow-violet-500/20"
                        >
                            <span className="relative z-10">
                                Get Started
                            </span>
                            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10" />
                        </motion.button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() =>
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden mt-4 rounded-2xl border-2 border-gray-200 bg-white/95 backdrop-blur-xl p-5 shadow-lg"
                        >
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => { setIsMobileMenuOpen(false); if (onGetStarted) onGetStarted(); }}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-medium shadow-lg shadow-violet-500/20"
                                >
                                    Get Started
                                </button>
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link)}
                                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-center py-2 font-medium text-sm"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;