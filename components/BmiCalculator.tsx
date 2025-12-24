"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, RefreshCw, CheckCircle2 } from "lucide-react";

export default function BmiCalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState<number | null>(null);
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    const calculateBMI = () => {
        if (!height || !weight) return;

        const h = parseFloat(height) / 100; // cm to m
        const w = parseFloat(weight);
        const bmiValue = parseFloat((w / (h * h)).toFixed(1));

        setBmi(bmiValue);

        if (bmiValue < 18.5) {
            setStatus("Zayıf");
            setMessage("Sağlıklı bir şekilde ideal kilonuza ulaşmak için beslenme programınızı birlikte planlayalım.");
            setColor("text-blue-500");
        } else if (bmiValue >= 18.5 && bmiValue < 25) {
            setStatus("Normal");
            setMessage("Harikasınız! Mevcut formunuzu korumak ve sağlıklı yaşamı sürdürmek için yanınızdayım.");
            setColor("text-sage");
        } else if (bmiValue >= 25 && bmiValue < 30) {
            setStatus("Fazla Kilolu");
            setMessage("Endişelenmeyin, küçük değişikliklerle büyük farklar yaratabiliriz. Hemen başlayalım!");
            setColor("text-orange-500");
        } else {
            setStatus("Obezite");
            setMessage("Sağlığınız için profesyonel bir adım atmanın tam zamanı. Size özel bir yol haritası hazırlayalım.");
            setColor("text-red-500");
        }
    };

    const resetCalculator = () => {
        setHeight("");
        setWeight("");
        setBmi(null);
        setStatus("");
        setMessage("");
    };

    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-sage/10">
                    <div className="grid md:grid-cols-2">
                        {/* Left Side: Form */}
                        <div className="p-8 md:p-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 text-sage text-sm font-semibold mb-6">
                                <Calculator size={16} />
                                <span>İdeal Kilo Hesaplama</span>
                            </div>

                            <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
                                Vücut Kitle İndeksinizi <span className="text-sage">Öğrenin</span>
                            </h2>
                            <p className="text-charcoal/60 mb-8 font-body">
                                Sağlık yolculuğunuza nerede başlayacağınızı bilmek ister misiniz? Değerlerinizi girin, durumunuzu hemen analiz edelim.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="height" className="block text-sm font-medium text-charcoal/80 mb-2">Boyunuz (cm)</label>
                                    <input
                                        type="number"
                                        id="height"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        placeholder="Örn: 170"
                                        className="w-full px-4 py-3 rounded-xl bg-cream border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all placeholder:text-charcoal/30 text-charcoal font-medium"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="weight" className="block text-sm font-medium text-charcoal/80 mb-2">Kilonuz (kg)</label>
                                    <input
                                        type="number"
                                        id="weight"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        placeholder="Örn: 65"
                                        className="w-full px-4 py-3 rounded-xl bg-cream border border-sage/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all placeholder:text-charcoal/30 text-charcoal font-medium"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={calculateBMI}
                                    disabled={!height || !weight}
                                    className="w-full py-4 bg-sage text-white font-bold rounded-xl shadow-lg hover:bg-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    Hemen Hesapla
                                    <ArrowRight size={20} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Right Side: Result */}
                        <div className="bg-charcoal p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            {/* Texture */}
                            <div className="absolute inset-0 bg-sage/10 mix-blend-overlay" />

                            <AnimatePresence mode="wait">
                                {bmi ? (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="relative z-10 text-center"
                                    >
                                        <div className="mb-2 text-white/60 font-medium tracking-widest text-sm uppercase">VKİ Değeriniz</div>
                                        <div className="text-6xl font-display font-bold text-white mb-2">{bmi}</div>
                                        <div className={`text-2xl font-bold mb-6 ${color}`}>{status}</div>

                                        <div className="bg-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm border border-white/5">
                                            <p className="text-white/90 leading-relaxed italic">
                                                "{message}"
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <a
                                                href="https://wa.me/905400012324"
                                                target="_blank"
                                                className="w-full py-3 bg-gold text-charcoal font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                                            >
                                                <CheckCircle2 size={18} />
                                                Randevu Oluştur
                                            </a>
                                            <button
                                                onClick={resetCalculator}
                                                className="text-white/40 hover:text-white text-sm flex items-center justify-center gap-2 transition-colors py-2"
                                            >
                                                <RefreshCw size={14} />
                                                Tekrar Hesapla
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="relative z-10 text-center text-white/40"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center border border-white/10">
                                            <Calculator size={48} />
                                        </div>
                                        <h3 className="text-xl font-medium text-white mb-2">Sonuç Bekleniyor</h3>
                                        <p className="text-sm max-w-xs mx-auto">
                                            Sol taraftaki forma boy ve kilo bilgilerinizi girerek raporunuzu anında görebilirsiniz.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
