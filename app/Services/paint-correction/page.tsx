import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paint Correction | Shelton Detailing",
  description:
    "Measured polishing and defect removal that restores clarity, gloss, and depth without compromising the paint.",
  openGraph: {
    title: "Paint Correction | Shelton Detailing",
    description:
      "Measured polishing and defect removal that restores clarity, gloss, and depth without compromising the paint.",
  },
};

export default function PaintCorrection() {
  return (
    <div className="space-y-10 text-app">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Service</p>
        <h1 className="text-3xl font-semibold">Paint Correction</h1>
        <p className="text-muted">
          Correction removes swirls, haze, and defects to restore depth and clarity. The goal is a
          refined finish, not aggressive abrasion.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 motion-fade-up motion-1">
        <div className="card p-6">
          <h2 className="text-lg font-semibold">What it is</h2>
          <p className="mt-2 text-sm text-muted">
            Controlled polishing that levels imperfections and restores the optical clarity of the
            paint.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Who it’s for</h2>
          <p className="mt-2 text-sm text-muted">
            Owners who see swirl marks, dullness, or water-spot damage and want a sharper finish.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">When it’s needed</h2>
          <p className="mt-2 text-sm text-muted">
            After harsh washes, years of exposure, or before applying ceramic protection.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Why execution matters</h2>
          <p className="mt-2 text-sm text-muted">
            Proper correction balances defect removal with paint safety to preserve the finish.
          </p>
        </div>
      </section>

      <section className="card p-6 motion-fade-up motion-2">
        <h2 className="text-lg font-semibold">How our approach differs</h2>
        <p className="mt-2 text-sm text-muted">
          We start with inspection and test spots, choose the right pad and polish, and finish with
          a refined gloss. Every step is measured for the vehicle in front of us.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 motion-fade-up motion-3">
        {[
          "Before / after clarity",
          "Light inspection highlights",
          "Finish depth close-ups",
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
          <Link href="/Services/ceramic-coatings" className="underline focus-ring text-muted hover:text-app">
            Ceramic Coatings →
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
