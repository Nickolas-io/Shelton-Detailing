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
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-gray-900`}>
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur text-gray-900 motion-fade-up gold-bar">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-bold tracking-tight nav-link focus-ring">
              Shelton Detailing
            </Link>

            <nav className="flex items-center gap-4 text-sm">
              <Link href="/Services" className="nav-link focus-ring">Services</Link>
              <Link href="/Process" className="nav-link focus-ring">Process</Link>
              <Link href="/Pricing" className="nav-link focus-ring">Pricing</Link>
              <Link href="/Gallery" className="nav-link focus-ring">Gallery</Link>
              <Link href="/About" className="nav-link focus-ring">About</Link>
              <Link
                href="/Contact"
                className="rounded bg-black px-3 py-2 text-white hover:opacity-90 btn-press focus-ring"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t py-10">
          <div className="mx-auto max-w-5xl space-y-6 px-4 text-sm text-gray-600">
            <div className="flex flex-wrap gap-4">
              <Link href="/Services" className="nav-link focus-ring">Services</Link>
              <Link href="/Services/paint-correction" className="nav-link focus-ring">Paint Correction</Link>
              <Link href="/Services/ceramic-coatings" className="nav-link focus-ring">Ceramic Coatings</Link>
              <Link href="/Services/interior-restoration" className="nav-link focus-ring">Interior Restoration</Link>
              <Link href="/Services/full-transformation" className="nav-link focus-ring">Full Transformation</Link>
              <Link href="/Process" className="nav-link focus-ring">Process</Link>
              <Link href="/Gallery" className="nav-link focus-ring">Gallery</Link>
              <Link href="/Service-Area" className="nav-link focus-ring">Service Area</Link>
              <Link href="/FAQ" className="nav-link focus-ring">FAQ</Link>
              <Link href="/Contact" className="nav-link focus-ring">Contact</Link>
            </div>
            <div className="gold-divider" />
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
