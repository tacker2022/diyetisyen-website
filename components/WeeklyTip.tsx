"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Quote } from "lucide-react";

const TIPS = [
    {
        title: "Tarçının Gücü",
        content: "Bu hafta suyunuza bir çubuk tarçın ekleyin. Kan şekerinizi dengelemeye yardımcı olurken, tatlı krizlerinizin de önüne geçecektir.",
    },
    {
        title: "Su Tüketimi",
        content: "Güne bir bardak ılık su ile başlamayı deneyin. Metabolizmanızı uykudan uyandırmanın en nazik ve etkili yoludur.",
    },
    {
        title: "Renkli Tabaklar",
        content: "Öğünlerinizde tabağınızın yarısını rengarenk sebzelerle doldurun. Ne kadar çok renk, o kadar çok antioksidan!",
    },
    {
        title: "Yavaş Yeme",
        content: "Yemeğinizi çiğnerken çatalı tabağa bırakmayı deneyin. Beyninizin 'doydum' sinyalini alması için ona zaman tanıyın.",
    },
    {
        title: "Kaliteli Uyku",
        content: "Akşam 22:00'den sonra mavi ışık (telefon/tablet) maruziyetini azaltmak, uyku kalitenizi ve dolayısıyla metabolizma hızınızı artırır.",
    }
];

export default function WeeklyTip() {
    const [tip, setTip] = useState(TIPS[0]);

    useEffect(() => {
        // Calculate the current week number of the year to show a consistent tip for the week
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);
        const week = Math.floor(day / 7);

        // Select tip based on week number modulo total tips
        const tipIndex = week % TIPS.length;
        setTip(TIPS[tipIndex]);
    }, []);

    return (
        <section className="py-12 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-sage to-[#4a805f] rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden text-center md:text-left md:flex-row flex flex-col items-center justify-between gap-8"
                >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/20 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />

                    {/* Icon Section */}
                    <div className="flex-shrink-0 relative z-10">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner rotate-3">
                            <Leaf className="text-white w-10 h-10" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 relative z-10 text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-wider uppercase mb-3 border border-gold/20">
                            <Sparkles size={12} />
                            Haftanın İpucu
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                            {tip.title}
                        </h3>
                        <div className="relative">
                            <Quote className="absolute -top-2 -left-4 w-6 h-6 text-white/20 transform -scale-x-100" />
                            <p className="text-white/90 text-lg leading-relaxed font-light italic">
                                {tip.content}
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
