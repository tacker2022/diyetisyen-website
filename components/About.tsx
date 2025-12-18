import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    const credentials = [
        "Yeditepe Üniversitesi Beslenme ve Diyetetik (Lisans)",
        "Yeditepe Üniversitesi Klinik Beslenme (Yüksek Lisans)",
        "'Beslenme Sanatı' Kitabı Yazarı",
        "Fonksiyonel Tıp Diyetisyenliği",
        "GAPS Practitioner"
    ];

    return (
        <section id="hakkimda" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="relative order-2 lg:order-1 mt-12 lg:mt-0">
                        <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl bg-sage/5">
                            {/* Image Placeholder - User provided portrait */}
                            {/* Ideally we put image_1 or similar here */}
                            <Image
                                src="/images/about-poster.jpg"
                                alt="Yeşim Nemutlu Torun Profil"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative dots */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-pattern-dots opacity-20" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-base text-sage font-semibold tracking-wide uppercase mb-2">Hakkımda</h2>
                        <p className="font-display text-4xl font-bold text-charcoal mb-6">
                            Bilimsel Doğrularla <br />
                            <span className="text-gold">Sürdürülebilir Beslenme</span>
                        </p>

                        <div className="text-lg text-charcoal/70 space-y-6 font-body">
                            <p>
                                Merhaba, ben <strong>Uzman Diyetisyen Yeşim Nemutlu Torun</strong>.
                                Beslenme biliminin ışığında, kişiye özel yaklaşımlarla danışanlarımın sağlıklı yaşam hedeflerine ulaşmalarına rehberlik ediyorum.
                            </p>
                            <p>
                                Yeditepe Üniversitesi&apos;ndeki akademik eğitimim ve klinik tecrübem ile, diyeti bir yasaklar listesi olmaktan çıkarıp,
                                yaşam boyu sürecek keyifli bir &quot;Beslenme Sanatı&quot;na dönüştürmeyi amaçlıyorum.
                            </p>
                        </div>

                        <div className="mt-8 space-y-4">
                            {credentials.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                                    <span className="text-charcoal/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Link href="#iletisim" className="text-sage font-bold hover:text-gold transition-colors flex items-center gap-2 group">
                                Detaylı Özgeçmiş
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
