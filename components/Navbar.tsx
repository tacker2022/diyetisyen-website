"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Instagram, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Hakkımda", href: "#hakkimda" },
        { name: "Hizmetler", href: "#hizmetler" },
        { name: "Kitap", href: "#kitap" },
        { name: "Galeri", href: "#galeri" },
        { name: "İletişim", href: "#iletisim" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-cream/80 backdrop-blur-md border-b border-sage/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-display text-2xl text-sage font-bold tracking-tight">
                            Dyt. Yeşim Nemutlu Torun
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-charcoal hover:text-gold transition-colors duration-300 font-medium font-body"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://www.instagram.com/diyetisyenyesimnemutlu/" target="_blank" rel="noopener noreferrer" className="text-sage hover:text-gold transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="https://wa.me/905400012324" target="_blank" rel="noopener noreferrer" className="bg-sage text-white px-4 py-2 rounded-full hover:bg-gold transition-colors duration-300 flex items-center gap-2 font-medium text-sm">
                            <Phone size={16} />
                            Randevu Al
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-charcoal hover:text-sage transition-colors p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream border-b border-sage/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-charcoal hover:text-gold font-medium text-lg"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex gap-4">
                                <a href="https://wa.me/905400012324" className="flex-1 bg-sage text-white text-center py-3 rounded-lg font-medium">
                                    Randevu Al
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
