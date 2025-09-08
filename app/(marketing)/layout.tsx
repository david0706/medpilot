import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "MedPilot",
  description:
    "Medpilot est un outil qui vous permet de rédiger 5 plus rapidement vos rapports médicaux radiologiques grâce à une dictée intelligente",
  icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
  },
  openGraph: {
      title: 'MedPilot',
      description: 'Dictée médicale intelligente pour radiologues',
      images: ['/logos/medpilot-icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
