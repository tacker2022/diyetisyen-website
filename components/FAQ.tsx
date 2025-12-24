"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
    {
        question: "Online diyet hizmetiniz var mı?",
        answer: "Evet, dünyanın her yerinden danışanlarıma online beslenme danışmanlığı veriyorum. Görüntülü görüşmeler ve WhatsApp üzerinden süreci en az yüz yüze görüşme kadar detaylı ve verimli bir şekilde yürütüyoruz."
    },
    {
        question: "Süreç nasıl işliyor?",
        answer: "İlk görüşmemizde detaylı bir anamnez (beslenme öyküsü) alıyor, yaşam tarzınızı ve hedeflerinizi konuşuyoruz. Kan tahlillerinizi analiz ettikten sonra tamamen size özel bir beslenme programı hazırlıyorum. Ardından haftalık kontrollerle ilerlemenizi takip ediyoruz."
    },
    {
        question: "Kan tahlili istiyor musunuz?",
        answer: "Kesinlikle. Sağlıklı ve kalıcı bir beslenme programı oluşturabilmek için son 6 ay içinde yapılmış kan tahlillerinizi inceliyorum. Eğer güncel tahliliniz yoksa, gerekli parametreleri içeren bir liste iletiyorum."
    },
    {
        question: "Sadece zayıflama diyeti mi yazıyorsunuz?",
        answer: "Hayır. Kilo alma, hastalıklara özgü beslenme (diyabet, tiroid, kalp-damar vb.), hamilelik ve emzirme dönemi beslenmesi, çocuk ve ergen beslenmesi, sporcu beslenmesi gibi geniş bir yelpazede hizmet veriyorum."
    },
    {
        question: "Ödeme ve randevu işlemleri nasıl yapılıyor?",
        answer: "Randevu oluşturmak için web sitemizdeki WhatsApp butonunu kullanabilir veya verilen numarayı arayabilirsiniz. Ödemeleri havale/EFT yoluyla güvenli bir şekilde gerçekleştirebilirsiniz."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/10 text-sage text-sm font-semibold mb-4">
                        <HelpCircle size={16} />
                        <span>Aklınıza Takılanlar</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
                        Sıkça Sorulan <span className="text-sage">Sorular</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-sage/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-sage' : 'text-charcoal'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-colors flex-shrink-0 ml-4 ${openIndex === index ? 'bg-sage text-white' : 'bg-cream text-charcoal/50'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-charcoal/70 leading-relaxed border-t border-sage/5 mt-[-1px]">
                                            <div className="pt-4">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
