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
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
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
