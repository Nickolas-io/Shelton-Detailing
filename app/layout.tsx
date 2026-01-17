import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Link from "next/link";

export const metadata: Metadata = {
  title: "Shelton Detailing | Precision Auto Restoration in DFW",
  description:
    "Premium mobile detailing focused on paint correction, ceramic coatings, and interior restoration across DFW.",
  openGraph: {
    title: "Shelton Detailing | Precision Auto Restoration in DFW",
    description:
      "Premium mobile detailing focused on paint correction, ceramic coatings, and interior restoration across DFW.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-app text-app`}>
        <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur motion-fade-up gold-bar">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-bold tracking-tight nav-link focus-ring">
              Shelton Detailing
            </Link>

            <nav className="flex items-center gap-4 text-sm text-muted">
              <Link href="/Services" className="nav-link focus-ring hover:text-app">Services</Link>
              <Link href="/Process" className="nav-link focus-ring hover:text-app">Process</Link>
              <Link href="/Pricing" className="nav-link focus-ring hover:text-app">Pricing</Link>
              <Link href="/Gallery" className="nav-link focus-ring hover:text-app">Gallery</Link>
              <Link href="/About" className="nav-link focus-ring hover:text-app">About</Link>
              <Link
                href="/Contact"
                className="rounded border px-3 py-2 text-sm font-medium text-app hover-lift btn-press focus-ring border-gold"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t border-gold py-10 bg-surface">
          <div className="mx-auto max-w-5xl space-y-6 px-4 text-sm text-muted">
            <div className="flex flex-wrap gap-4">
              <Link href="/Services" className="nav-link focus-ring hover:text-app">Services</Link>
              <Link href="/Services/paint-correction" className="nav-link focus-ring hover:text-app">Paint Correction</Link>
              <Link href="/Services/ceramic-coatings" className="nav-link focus-ring hover:text-app">Ceramic Coatings</Link>
              <Link href="/Services/interior-restoration" className="nav-link focus-ring hover:text-app">Interior Restoration</Link>
              <Link href="/Services/full-transformation" className="nav-link focus-ring hover:text-app">Full Transformation</Link>
              <Link href="/Process" className="nav-link focus-ring hover:text-app">Process</Link>
              <Link href="/Gallery" className="nav-link focus-ring hover:text-app">Gallery</Link>
              <Link href="/Service-Area" className="nav-link focus-ring hover:text-app">Service Area</Link>
              <Link href="/FAQ" className="nav-link focus-ring hover:text-app">FAQ</Link>
              <Link href="/Contact" className="nav-link focus-ring hover:text-app">Contact</Link>
            </div>
            <div className="divider-gold" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Shelton Detailing</p>
              <p>Serving DFW • Mobile service • Text for fastest response</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
