import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import DeveloperSignature from "./DeveloperSignature";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-display text-2xl font-bold text-sage mb-2">Uzman Diyetisyen Yeşim Nemutlu Torun</h3>
                        <p className="text-white/60 text-sm">
                            Sağlıklı yaşam ve beslenme danışmanlığı.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="#hizmetler" className="text-sm text-white/80 hover:text-white transition-colors">Hizmetler</Link>
                        <Link href="#hakkimda" className="text-sm text-white/80 hover:text-white transition-colors">Hakkımda</Link>
                        <Link href="#iletisim" className="text-sm text-white/80 hover:text-white transition-colors">İletişim</Link>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/diyetisyenyesimnemutlu/" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-sage transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ye%C5%9Fim-nemutlu-torun-33692a177/?originalSubdomain=tr" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-sage transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-col items-center gap-4">
                    <p className="text-xs text-white/40">
                        &copy; {new Date().getFullYear()} Uzman Diyetisyen Yeşim Nemutlu Torun. Tüm hakları saklıdır.
                    </p>
                    <DeveloperSignature />
                </div>
            </div>
        </footer>
    );
}
