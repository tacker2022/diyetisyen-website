"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import Link from "next/link";

export default function AnnouncementPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has seen the popup recently
        const hasSeenPopup = localStorage.getItem("hasSeenMovingPopup");

        if (!hasSeenPopup) {
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Save to local storage so it doesn't pop up again for this session/browsing
        localStorage.setItem("hasSeenMovingPopup", "true");
    };

    const handleCtaClick = () => {
        handleClose();
        // Determine target based on click, smooth scroll logic is handled by Next.js Link text hash usually, 
        // but if we want to be sure, we close just before.
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-cream w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-sage/20"
                    >
                        {/* Decorative header background */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sage via-gold to-sage" />

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal transition-colors p-1 rounded-full hover:bg-black/5"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 text-sage mb-6">
                                <MapPin className="w-8 h-8" />
                            </div>

                            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-4 text-balance">
                                Yeni Bir Başlangıç, <br />
                                <span className="text-sage">Aynı Bilimsel Yaklaşım</span>
                            </h3>

                            <p className="text-charcoal/80 mb-8 leading-relaxed">
                                Ümraniye Çarşı’dan <strong>Avrupa Konutları</strong>’na taşındık.
                                Sağlığınıza aynı özenle, daha ferah ve modern bir ortamda eşlik ediyoruz.
                            </p>

                            <Link
                                href="#iletisim"
                                onClick={handleCtaClick}
                                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-sage text-white font-bold rounded-xl hover:bg-gold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                            >
                                Yeni Adresimizi Gör
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
