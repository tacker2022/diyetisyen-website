import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-lato" 
});

export const metadata: Metadata = {
  title: "Uzm. Dyt. Yeşim Nemutlu Torun | Beslenme Sanatı",
  description: "Uzman Diyetisyen Yeşim Nemutlu Torun ile sağlıklı yaşam yolculuğuna adım atın. Kişiye özel beslenme programları ve 'Beslenme Sanatı' kitabı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${lato.variable} font-body bg-cream text-charcoal antialiased`}>
        {children}
      </body>
    </html>
  );
}
