import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Restoration | Shelton Detailing",
  description:
    "Deep interior cleaning, stain work, and material-safe care for a true cabin reset.",
  openGraph: {
    title: "Interior Restoration | Shelton Detailing",
    description:
      "Deep interior cleaning, stain work, and material-safe care for a true cabin reset.",
  },
};

export default function InteriorRestoration() {
  return (
    <div className="space-y-10 text-app">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Service</p>
        <h1 className="text-3xl font-semibold">Interior Restoration</h1>
        <p className="text-muted">
          A deep interior reset focused on extraction, stain work, odor control, and material-safe
          detailing for leather, fabric, and trim.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 motion-fade-up motion-1">
        <div className="card p-6">
          <h2 className="text-lg font-semibold">What it is</h2>
          <p className="mt-2 text-sm text-muted">
            A comprehensive interior service that restores cleanliness and comfort, not just a
            surface wipe-down.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Who it’s for</h2>
          <p className="mt-2 text-sm text-muted">
            Vehicles with heavy use, visible stains, pet hair, or lingering odors.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">When it’s needed</h2>
          <p className="mt-2 text-sm text-muted">
            After years of daily driving, spills, or when the cabin needs a full reset.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold">Why execution matters</h2>
          <p className="mt-2 text-sm text-muted">
            Proper extraction and material-safe methods prevent damage and deliver a better finish.
          </p>
        </div>
      </section>

      <section className="card p-6 motion-fade-up motion-2">
        <h2 className="text-lg font-semibold">How our approach differs</h2>
        <p className="mt-2 text-sm text-muted">
          We choose methods based on material type, use targeted extraction, and finish with
          detailing that restores the cabin without harsh chemicals.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 motion-fade-up motion-3">
        {[
          "Seat and fabric extraction",
          "Trim and console detail",
          "Interior finish in daylight",
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
          <Link href="/Services/full-transformation" className="underline focus-ring text-muted hover:text-app">
            Full Transformation →
          </Link>
          <Link href="/Services/paint-correction" className="underline focus-ring text-muted hover:text-app">
            Paint Correction →
          </Link>
          <Link href="/Contact" className="underline focus-ring text-muted hover:text-app">
            Request a quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
