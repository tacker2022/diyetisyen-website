"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

// Placeholder data - Can be updated with real reviews later
const REVIEWS = [
    {
        initial: "A.Y.",
        text: "Yeşim Hanım ile 3 ayda 12 kilo verdim. Sadece diyet listesi değil, sağlıklı beslenmeyi yaşam tarzı haline getirmeyi öğretti. Enerjim hiç düşmeden zayıfladım!",
        tag: "Kilo Verme",
        stats: "3 Ayda -12kg"
    },
    {
        initial: "M.K.",
        text: "İnsülin direncim vardı ve kilo veremiyordum. Yeşim Hanım'ın fonksiyonel tıp yaklaşımıyla hem değerlerim düzeldi hem de ideal kiloma ulaştım. İyi ki varsınız!",
        tag: "Fonksiyonel Beslenme",
        stats: "Sağlıklı Yaşam"
    },
    {
        initial: "S.D.",
        text: "Online diyet ile bu kadar verim alacağımı düşünmemiştim. Her an ulaşılabilir olması ve motivasyonu ile süreci çok kolaylaştırdı. Teşekkürler!",
        tag: "Online Diyet",
        stats: "2 Ayda -7kg"
    },
    {
        initial: "B.T.",
        text: "Sporcu beslenmesi konusunda uzman birine ihtiyacım vardı. Performansım artarken yağ oranım düştü. Profesyonel yaklaşımı için teşekkür ederim.",
        tag: "Sporcu Beslenmesi",
        stats: "Yağ Kaybı"
    },
    {
        initial: "Z.E.",
        text: "Hamilelik sürecimde aldığım kiloları Yeşim Hanım sayesinde sağlıklı bir şekilde verdim. Emzirme döneminde sütüm azalmadan zayıfladım.",
        tag: "Anne & Bebek",
        stats: "6 Ayda -18kg"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-sage/5 skew-y-3 transform origin-top-left z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-base text-sage font-semibold tracking-wide uppercase mb-2">Başarı Hikayeleri</h2>
                    <p className="font-display text-3xl md:text-4xl font-bold text-charcoal">
                        Danışanlarımın <span className="text-sage">Değişim Yolculuğu</span>
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks for nice fade effect on edges */}
                    <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 md:gap-8"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 50, // Slow continuous scroll
                        }}
                        style={{ width: "max-content" }}
                    >
                        {/* Double the array to create seamless loop effect */}
                        {[...REVIEWS, ...REVIEWS].map((review, i) => (
                            <div
                                key={i}
                                className="w-[300px] md:w-[400px] flex-shrink-0 bg-cream p-8 rounded-2xl shadow-lg border border-sage/10 relative group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <Quote className="absolute top-6 right-6 text-sage/20 w-8 h-8 group-hover:text-sage/40 transition-colors" />

                                <div className="flex items-center gap-1 text-gold mb-4">
                                    {[...Array(5)].map((_, starI) => (
                                        <Star key={starI} size={16} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-charcoal/80 mb-6 italic leading-relaxed min-h-[80px]">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center justify-between border-t border-sage/10 pt-4 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold text-sm">
                                            {review.initial}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-charcoal">{review.tag}</div>
                                            <div className="text-xs text-sage font-medium bg-sage/10 px-2 py-0.5 rounded-full inline-block mt-1">
                                                {review.stats}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
