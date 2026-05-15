import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LgpdBanner from "@/componentes/LgpdBanner";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colégio de Santa Catarina",
  description: "Descrição do seu site",
  icons: {
    icon: '/imagem/logo.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Configuração do Consent Mode do Google (Antes de qualquer coisa) */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'personalization_storage': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted'
            });
          `}
        </Script>

        {/* DICA: Se você for usar o seu componente LgpdBanner personalizado, 
          apague o script do Cookiebot abaixo. Se usar o Cookiebot, apague o <LgpdBanner />.
          Os dois juntos vão mostrar dois avisos de cookie ao mesmo tempo!
        */}
      </head>
      <body className="antialiased">
        {children}
        
        {/* Seu banner personalizado que controla o gtag acima */}
        <LgpdBanner />
      </body>
    </html>
  );
}