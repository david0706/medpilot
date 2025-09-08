import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";

export const metadata: Metadata = {
  title: "MedPilot - Dictée médicale intelligente",
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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="light"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
