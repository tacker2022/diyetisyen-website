import { Scale, HeartPulse, Brain, Apple, Activity, Baby } from "lucide-react";

const services = [
    {
        title: "Kilo Yönetimi",
        description: "Kişisel metabolik hızınıza ve yaşam tarzınıza uygun, sürdürülebilir kilo alma veya verme programları.",
        icon: Scale,
    },
    {
        title: "Diyabet Beslenmesi",
        description: "Tip 1, Tip 2 diyabet ve insülin direnci durumlarında kan şekeri regülasyonuna yönelik tıbbi beslenme.",
        icon: Activity,
    },
    {
        title: "Fonksiyonel Tıp",
        description: "Kronik hastalıklara kökten çözüm getiren, bütüncül ve kişiye özel beslenme yaklaşımları.",
        icon: HeartPulse,
    },
    {
        title: "Obezite Tedavisi",
        description: "Multidisipliner yaklaşımla obezite cerrahisi öncesi ve sonrası diyet takibi.",
        icon: Apple,
    },
    {
        title: "Gebelik ve Emzirme",
        description: "Bebeğinizin ve sizin sağlığınız için, bu özel dönemlere uygun planlanmış beslenme programları.",
        icon: Baby,
    },
    {
        title: "Yeme Bozuklukları",
        description: "Psikodiyet yaklaşımı ile yeme davranış bozukluklarında (Anoreksiya, Bulimia vb.) beslenme terapisi.",
        icon: Brain,
    }
];

export default function Services() {
    return (
        <section id="hizmetler" className="py-24 bg-cream section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base text-sage font-semibold tracking-wide uppercase mb-2">Uzmanlık Alanlarım</h2>
                    <p className="font-display text-4xl font-bold text-charcoal mb-4">
                        Size Özel Beslenme Çözümleri
                    </p>
                    <p className="text-lg text-charcoal/60">
                        Sağlıklı bir beden ve zihin için bilimsel temelli, yaşamınıza entegre edilebilir hizmetler.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-sage/5 group"
                        >
                            <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-sage group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-sage transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-charcoal/60 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
