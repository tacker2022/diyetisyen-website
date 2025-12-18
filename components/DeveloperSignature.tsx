"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Phone, Globe } from "lucide-react";
import Image from "next/image";

export default function DeveloperSignature() {
    return (
        <div className="relative group inline-block">
            {/* Signature Text */}
            <div className="flex items-center gap-1 text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer select-none">
                <span>&lt;/&gt;</span>
                <span>Developed by</span>
                <span className="font-medium text-white/50 group-hover:text-white transition-colors">Talha Çalargün</span>
            </div>

            {/* Hover Card */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-bottom translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl p-6 border border-white/5 relative overflow-hidden">
                    {/* Decorative Top Glow */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

                    {/* Content */}
                    <div className="flex flex-col items-center text-center relative z-10">
                        {/* Profile Image Wrapper */}
                        <div className="relative w-24 h-24 mb-4 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] to-transparent">
                            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative">
                                <Image
                                    src="/images/developer-profile.png"
                                    alt="Talha Çalargün"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <h4 className="text-white font-display font-medium text-lg mb-1">Talha Çalargün</h4>
                        <p className="text-[#D4AF37] text-[10px] uppercase tracking-wider font-medium mb-6">
                            Digital Systems & Technology Developer
                        </p>

                        <div className="flex items-center gap-4 text-white/40">
                            <a href="https://www.linkedin.com/in/talhaemrecalargun/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors"><Linkedin size={18} /></a>
                            <a href="https://www.instagram.com/talhacalargun/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors"><Instagram size={18} /></a>
                            <a href="https://api.whatsapp.com/send/?phone=905372939874&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors"><Phone size={18} /></a>
                            <a href="https://talhacalargun.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors"><Globe size={18} /></a>
                        </div>
                    </div>

                    {/* Background Noise/Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-r border-b border-white/5 transform rotate-45" />
            </div>
        </div>
    );
}
