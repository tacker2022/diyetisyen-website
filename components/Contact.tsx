import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section id="iletisim" className="py-24 bg-cream border-t border-sage/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-base text-sage font-semibold tracking-wide uppercase mb-2">Randevu ve İletişim</h2>
                        <p className="font-display text-4xl font-bold text-charcoal mb-8">
                            Yeni Adresimizde <br /> Hizmetinizdeyiz
                        </p>

                        <p className="text-lg text-charcoal/70 mb-12">
                            Danışmanlık süreçlerimiz hakkında detaylı bilgi almak ve randevu oluşturmak için bize ulaşabilirsiniz.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-sage" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-charcoal">Adres</h3>
                                    <p className="text-charcoal/70">Avrupa Konutları</p>
                                    <p className="text-charcoal/70">Yamanevler, Ümraniye / İstanbul</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-sage" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-charcoal">Telefon & WhatsApp</h3>
                                    <a href="tel:+905400012324" className="text-charcoal/70 hover:text-sage block">+90 540 001 23 24</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-sage" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-charcoal">Çalışma Saatleri</h3>
                                    <p className="text-charcoal/70">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] lg:h-auto bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.971938555986!2d29.1121!3d41.0287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8f0c2a8b8c5%3A0x6b4c3b3b3b3b3b3b!2sAvrupa%20Konutlar%C4%B1%20Yamanevler!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
