import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-sage/5 rounded-l-full blur-3xl transform translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/5 rounded-t-full blur-3xl transform -translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-sage/10 text-sage text-sm font-semibold tracking-wide mb-4">
                                Avrupa Konutları, Ümraniye &apos;de Hizmetinizde
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                                Hayatınızı <span className="text-sage">Beslenme Sanatı</span> ile Dönüştürün
                            </h1>
                        </div>

                        <p className="text-lg text-charcoal/80 max-w-lg leading-relaxed font-body">
                            Uzman Diyetisyen Yeşim Nemutlu Torun rehberliğinde, sürdürülebilir sağlıklı yaşam alışkanlıkları kazanın.
                            Size özel bilimsel yaklaşımlarla ideal kilonuza ulaşın.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/905400012324"
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-sage hover:bg-sage/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Hemen Randevu Al
                                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                            </a>
                            <Link
                                href="#hizmetler"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage text-base font-medium rounded-lg text-sage hover:bg-sage hover:text-white transition-all duration-300"
                            >
                                Hizmetleri İncele
                            </Link>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] h-[400px] w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="absolute inset-0 bg-gold/20 rounded-[2rem] transform rotate-3 scale-95 origin-bottom-right z-0" />
                        <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl z-10">
                            <Image
                                src="/images/hero-profile.jpg"
                                alt="Diyetisyen Yeşim Nemutlu Torun"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-60" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 animate-bounce-slow hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-sage/10 p-1 rounded-full relative w-12 h-16 overflow-hidden">
                                    <Image
                                        src="/images/beslenme-sanati-kapak.jpg"
                                        alt="Beslenme Sanatı Kitap"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs text-charcoal/60 font-semibold uppercase tracking-wider">Yazar</p>
                                    <p className="text-charcoal font-bold text-lg">Beslenme Sanatı</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
