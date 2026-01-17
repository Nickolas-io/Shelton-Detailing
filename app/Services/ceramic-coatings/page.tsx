import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ceramic Coatings | Shelton Detailing",
  description:
    "Durable surface protection with deep gloss and easier maintenance, applied after proper prep.",
  openGraph: {
    title: "Ceramic Coatings | Shelton Detailing",
    description:
      "Durable surface protection with deep gloss and easier maintenance, applied after proper prep.",
  },
};

export default function CeramicCoatings() {
  return (
    <div className="space-y-10 text-app">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Service</p>
        <h1 className="text-3xl font-semibold">Ceramic Coatings</h1>
        <p className="text-muted">
          Ceramic coatings provide long-term protection, improved gloss, and easier maintenance
          when applied to properly prepared paint.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 motion-fade-up motion-1">
        <div className="card p-6">
          <h2 className="text-lg font-semibold">What it is</h2>
          <p className="mt-2 text-sm text-muted">
            A protective coating that bonds to the surface to resist contamination and maintain
            gloss.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Who it’s for</h2>
          <p className="mt-2 text-sm text-muted">
            Drivers who want long-term protection and a finish that stays sharp with proper care.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">When it’s needed</h2>
          <p className="mt-2 text-sm text-muted">
            After correction or on new vehicles that need protection from day one.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Why execution matters</h2>
          <p className="mt-2 text-sm text-muted">
            Proper prep and controlled application determine durability, appearance, and how the
            coating performs over time.
          </p>
        </div>
      </section>

      <section className="card p-6 motion-fade-up motion-2">
        <h2 className="text-lg font-semibold">How our approach differs</h2>
        <p className="mt-2 text-sm text-muted">
          We focus on surface preparation, paint correction when needed, and careful application
          for a clean, even finish that cures properly.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 motion-fade-up motion-3">
        {[
          "Surface prep detail",
          "Coating application close-up",
          "Gloss depth in natural light",
        ].map((label) => (
          <div
            key={label}
            role="img"
            aria-label={`Placeholder for ${label}`}
            className="card p-6 text-sm text-muted"
          >
            {label} placeholder
          </div>
        ))}
      </section>

      <section className="cta-card p-6 motion-fade-up motion-4">
        <h3 className="text-lg font-semibold">Related services</h3>
        <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/Services/paint-correction" className="underline focus-ring text-muted hover:text-app">
            Paint Correction →
          </Link>
          <Link href="/Services/full-transformation" className="underline focus-ring text-muted hover:text-app">
            Full Transformation →
          </Link>
          <Link href="/Contact" className="underline focus-ring text-muted hover:text-app">
            Request a quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
