import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Gallery() {
    const images = [
        "/images/uploaded_image_0_1766080628443.png",
        "/images/gallery-update-1.jpg",
        "/images/gallery-update-2.jpg",
        "/images/uploaded_image_2_1766080628443.jpg",
    ];

    return (
        <section id="galeri" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-base text-sage font-semibold tracking-wide uppercase mb-2">Sosyal Medya</h2>
                        <p className="font-display text-4xl font-bold text-charcoal">
                            Instagram&apos;dan Kareler
                        </p>
                    </div>
                    <a
                        href="https://www.instagram.com/diyetisyenyesimnemutlu/"
                        target="_blank"
                        className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sage font-bold hover:text-gold transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                        @diyetisyenyesimnemutlu
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((src, idx) => (
                        <div key={idx} className="relative aspect-[3/4] group overflow-hidden rounded-xl">
                            <Image
                                src={src}
                                alt={`Galeri görseli ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
