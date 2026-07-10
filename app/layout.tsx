import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: {
    default: "El Asilo de la Bestia | Rock Uruguayo",
    template: "%s | El Asilo de la Bestia",
  },
  description:
    "El Asilo de la Bestia es una banda de rock uruguaya. Conocé nuestra música, próximos shows, galería, prensa y merch oficial.",
  keywords: [
    "El Asilo de la Bestia",
    "rock uruguayo",
    "banda uruguaya",
    "rock nacional",
    "música uruguaya",
    "rock Montevideo",
  ],
  authors: [
    {
      name: "El Asilo de la Bestia",
    },
  ],
  creator: "El Asilo de la Bestia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={` scroll-smooth ${geistSans.variable} ${geistMono.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black ">
        <Nav />
        <main className="flex-1">{children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
