import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import LoadingScreen from "@/components/sub/LoadingScreen";
import ScrollToTop from "@/components/sub/ScrollToTop";

// Configuração das fontes
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gabriel Valle - Full Stack Developer",
    template: "%s | Gabriel Valle"
  },
  description: "Portfólio profissional de Gabriel Valle, desenvolvedor Full Stack com experiência em React, Node.js, TypeScript e outras tecnologias modernas. Especializado em desenvolvimento web, mobile e soluções digitais inovadoras.",
  keywords: [
    "desenvolvedor full stack",
    "react developer",
    "next.js",
    "typescript",
    "node.js",
    "portfolio",
    "desenvolvimento web",
    "frontend",
    "backend",
    "gabriel valle"
  ],
  authors: [{ name: "Gabriel Valle", url: "https://github.com/gabrielvalle00" }],
  creator: "Gabriel Valle",
  publisher: "Gabriel Valle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gabriel-valle.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gabriel-valle.vercel.app",
    title: "Gabriel Valle - Full Stack Developer",
    description: "Portfólio profissional de Gabriel Valle, desenvolvedor Full Stack com experiência em React, Node.js, TypeScript e outras tecnologias modernas.",
    siteName: "Gabriel Valle Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Valle - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Valle - Full Stack Developer",
    description: "Portfólio profissional de Gabriel Valle, desenvolvedor Full Stack com experiência em React, Node.js, TypeScript e outras tecnologias modernas.",
    images: ["/og-image.png"],
    creator: "@gabrielvalle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "seu-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon SVG moderno Gv Lab */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='glow' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23fff' stop-opacity='0.7'/%3E%3Cstop offset='100%25' stop-color='%23a78bfa' stop-opacity='0.2'/%3E%3C/radialGradient%3E%3ClinearGradient id='main-gradient' x1='0' y1='0' x2='40' y2='40' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23a78bfa'/%3E%3Cstop offset='1' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='20' cy='20' r='18' fill='url(%23main-gradient)'/%3E%3Cellipse cx='20' cy='20' rx='14' ry='14' fill='url(%23glow)'/%3E%3Crect x='16' y='10' width='8' height='14' rx='4' fill='%23fff' fill-opacity='0.15'/%3E%3Crect x='18' y='8' width='4' height='6' rx='2' fill='%23fff' fill-opacity='0.25'/%3E%3Cpath d='M18 24 Q20 28 22 24' stroke='%23fff' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3Ctext x='50%25' y='70%25' text-anchor='middle' font-size='11' font-family='Poppins,Arial,sans-serif' fill='%23fff' font-weight='bold' dy='.1em'%3EGv%3C/text%3E%3C/svg%3E" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#030014" />
        <meta name="msapplication-TileColor" content="#030014" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] text-white antialiased selection:bg-purple-500/20 selection:text-purple-300`}
      >
        {/* Loading State */}
        <LoadingScreen />

        {/* Background Animation */}
        <div className="absolute inset-0 z-10 pointer-events-none">
        <StarsCanvas />
        </div>
        
        {/* Navigation */}
        <header className="relative z-40">
        <Navbar />
        </header>
        
        {/* Main Content */}
        <main className="relative z-10 min-h-screen">
        {children}
        </main>
        
        {/* Footer */}
        <footer className="relative z-30">
        <Footer />
        </footer>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </body>
    </html>
  );
}
