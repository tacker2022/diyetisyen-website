import { Scale, HeartPulse, Brain, Apple, Activity, Baby } from "lucide-react";

const services = [
    {
        title: "Kilo Yönetimi",
        description: "Bireysel metabolizma hızınıza, hormonal dengenize ve günlük rutininize göre tasarlanan, kalıcı ve sağlıklı kilo kontrol programları.",
        icon: Scale,
        badge: "Kişiye Özel"
    },
    {
        title: "Tıbbi Beslenme Tedavisi",
        description: "İnsülin direnci, diyabet, haşimato/tiroid hastalıkları ve PCOS (Polikistik Over) gibi klinik durumlarda kan değerlerini düzenleyici beslenme protokolleri.",
        icon: Activity,
        badge: "Klinik"
    },
    {
        title: "Fonksiyonel Tıp Beslenmesi",
        description: "Kronik inflamasyon, sindirim problemleri (IBS/Geçirgen Bağırsak) ve otoimmün rahatsızlıklarda kök nedene odaklanan bütüncül beslenme tedavisi.",
        icon: HeartPulse,
        badge: "Bütüncül Sağlık"
    },
    {
        title: "Obezite & Cerrahi Sonrası",
        description: "Obezite tedavisinde multidisipliner yaklaşımlar ve bariatrik cerrahi öncesi/sonrası dönemde güvenli, adım adım beslenme takibi.",
        icon: Apple,
        badge: "Uzmanlık"
    },
    {
        title: "Gebelik & Emzirme Dönemi",
        description: "Anne adayının besin depolarını koruyan, bebeğin gelişimini destekleyen ve emzirme döneminde anne sütü kalitesini optimize eden özel programlar.",
        icon: Baby,
        badge: "Özel Takip"
    },
    {
        title: "Sürdürülebilir Beslenme Eğitimi",
        description: "Katı diyet kısıtlamaları yerine besin ilişkisini şifalandıran, sezgisel yemeyi ve sağlıklı yaşam alışkanlıklarını öğreten kalıcı eğitimler.",
        icon: Brain,
        badge: "Yaşam Tarzı"
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
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sage/5 group relative overflow-hidden flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center group-hover:bg-sage transition-colors duration-300">
                                        <service.icon className="w-7 h-7 text-sage group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-sage bg-sage/10 px-2.5 py-1 rounded-full">
                                        {service.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-sage transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-charcoal/60 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
