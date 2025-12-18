"use client";

import { motion } from "framer-motion";

export default function WishTicker() {
    return (
        <div className="bg-sage py-4 overflow-hidden border-t border-b border-white/10 relative z-20">
            {/* Wrapper for the moving content */}
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    duration: 40, // Slower for elegance
                    ease: "linear",
                }}
                style={{ width: "max-content" }}
            >
                {/* First Set */}
                <div className="flex shrink-0">
                    {[...Array(8)].map((_, i) => (
                        <div key={`set1-${i}`} className="flex items-center">
                            <span className="text-cream font-display text-2xl md:text-3xl lg:text-4xl font-light italic tracking-wider opacity-90 mx-8">
                                Sağlıcakla Kalın
                            </span>
                            <span className="w-2 h-2 bg-gold rounded-full opacity-50"></span>
                        </div>
                    ))}
                </div>

                {/* Second Set (Duplicate for loop) */}
                <div className="flex shrink-0">
                    {[...Array(8)].map((_, i) => (
                        <div key={`set2-${i}`} className="flex items-center">
                            <span className="text-cream font-display text-2xl md:text-3xl lg:text-4xl font-light italic tracking-wider opacity-90 mx-8">
                                Sağlıcakla Kalın
                            </span>
                            <span className="w-2 h-2 bg-gold rounded-full opacity-50"></span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
