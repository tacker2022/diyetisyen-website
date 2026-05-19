"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Sparkles, HeartPulse } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Detaylı Analiz & Görüşme",
    desc: "İlk randevunuzda vücut bileşimi analiz cihazımızla bölgesel kas, yağ ve su dağılımınızı ölçüyoruz. Beslenme alışkanlıklarınızı ve hedeflerinizi konuşuyoruz.",
    icon: ClipboardCheck,
    color: "bg-sage/10 text-sage"
  },
  {
    num: "02",
    title: "Kişiye Özel Beslenme Planı",
    desc: "Kan tahlili sonuçlarınızı tıbbi ve metabolik açıdan değerlendiriyor; yaşam tarzınıza, sevdiğiniz besinlere ve hedefinize uygun tamamen size özel listeler hazırlıyoruz.",
    icon: Sparkles,
    color: "bg-gold/10 text-gold"
  },
  {
    num: "03",
    title: "Haftalık Takip & Sürdürülebilirlik",
    desc: "Her hafta yapacağımız kontrollerle gelişiminizi izliyor, listelerinizi güncelliyoruz. WhatsApp üzerinden sürekli motivasyon desteğiyle sağlıklı beslenmeyi yaşam tarzı haline getiriyoruz.",
    icon: HeartPulse,
    color: "bg-sage/20 text-sage"
  }
];

export default function ProcessRoadmap() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl transform -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-base text-sage font-semibold tracking-wide uppercase mb-2">Nasıl Çalışıyoruz?</h2>
          <p className="font-display text-3xl md:text-4xl font-bold text-charcoal">
            Sağlıklı Yaşama Giden <span className="text-sage">3 Adımlı Yol Haritamız</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-sage/10 -translate-y-[80px] z-0" />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-cream rounded-3xl p-8 border border-sage/10 shadow-sm relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left hover:-translate-y-1 transition-transform duration-300 group"
              >
                {/* Step Number Badge */}
                <span className="absolute top-6 right-8 text-5xl font-display font-light text-sage/10 group-hover:text-sage/35 transition-colors">
                  {step.num}
                </span>

                {/* Icon Wrapper */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-inner`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed font-body text-sm">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
