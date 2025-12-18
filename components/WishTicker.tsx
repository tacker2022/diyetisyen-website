"use client";

import { motion } from "framer-motion";

export default function WishTicker() {
    return (
        <div className="bg-sage py-4 overflow-hidden border-t border-b border-white/10 relative z-20">
            <div className="flex select-none">
                <motion.div
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap min-w-full"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center mx-4">
                            <span className="text-cream font-display text-2xl md:text-3xl lg:text-4xl font-light italic tracking-wider opacity-90 mx-8">
                                Sağlıcakla Kalın
                            </span>
                            <span className="w-2 h-2 bg-gold rounded-full opacity-50"></span>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap min-w-full absolute left-full top-0 pl-16 md:pl-0"
                    aria-hidden="true"
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center mx-4">
                            <span className="text-cream font-display text-2xl md:text-3xl lg:text-4xl font-light italic tracking-wider opacity-90 mx-8">
                                Sağlıcakla Kalın
                            </span>
                            <span className="w-2 h-2 bg-gold rounded-full opacity-50"></span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
