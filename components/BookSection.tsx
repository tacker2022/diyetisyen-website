import Image from "next/image";
import { BookOpen, Star } from "lucide-react";

export default function BookSection() {
    return (
        <section id="kitap" className="py-24 bg-sage relative overflow-hidden text-white">
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-64 md:w-80 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 h-96">
                            {/* Book Cover Placeholder - Using one of the uploaded images that prominently shows the book if possible, 
                         or just a generic cover representation using CSS if specific cover image isn't perfectly isolated.
                         Looking at images, 'uploaded_image_1' seems to show the book clearly on a stand. */}
                            <Image
                                src="/images/beslenme-sanati-kapak.jpg"
                                alt="Beslenme Sanatı Kitabı"
                                fill
                                className="rounded-lg shadow-2xl border-4 border-white/20 object-cover"
                            />
                            {/* Badge */}
                            <div className="absolute -top-6 -right-6 bg-gold text-charcoal font-bold p-4 rounded-full shadow-lg h-20 w-20 flex items-center justify-center text-center text-xs transform rotate-12 z-20">
                                Çok <br /> Satan
                            </div>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                            <Star className="w-4 h-4 text-gold fill-current" />
                            <span>Yeni Çıkanlar</span>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Beslenme Sanatı</h2>
                        <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            &quot;Yemek yiyerek zayıflamak mümkün.&quot; diyen Yeşim Nemutlu Torun&apos;un kalemiyle,
                            bilinçsiz diyetlere son veren, metabolizmanızı ve ruhunuzu besleyen bir rehber.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="https://www.kitapyurdu.com/kitap/beslenme-sanati-yemek-yiyerek-zayiflamak-mumkun/705976.html?srsltid=AfmBOoqQGZwcWvY17DL8s4QT4OIfiPzItwW70XhjbxB3xX2k-4FlJiA8" target="_blank" className="bg-white text-sage font-bold py-4 px-8 rounded-lg hover:bg-gold hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2">
                                <BookOpen className="w-5 h-5" />
                                Kitabı İncele / Satın Al
                            </a>
                        </div>

                        <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/20 pt-8 max-w-lg mx-auto lg:mx-0">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">50+</div>
                                <div className="text-white/60 text-sm">Tarif</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">Bilimsel</div>
                                <div className="text-white/60 text-sm">Yaklaşım</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">Pratik</div>
                                <div className="text-white/60 text-sm">Öneriler</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
