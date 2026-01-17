import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Vehicle Transformation | Shelton Detailing",
  description:
    "Comprehensive exterior and interior revival, combining correction, protection, and deep interior restoration.",
  openGraph: {
    title: "Full Vehicle Transformation | Shelton Detailing",
    description:
      "Comprehensive exterior and interior revival, combining correction, protection, and deep interior restoration.",
  },
};

export default function FullTransformation() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">Service</p>
        <h1 className="text-3xl font-semibold">Full Vehicle Transformation</h1>
        <p className="text-gray-700">
          The most comprehensive service: paint correction, protection, and deep interior
          restoration combined into one cohesive transformation.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 motion-fade-up motion-1">
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">What it is</h2>
          <p className="mt-2 text-sm text-gray-700">
            A full exterior and interior revival that restores the finish, protects the surface,
            and renews the cabin.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">Who it’s for</h2>
          <p className="mt-2 text-sm text-gray-700">
            Owners who want the vehicle to feel new again and are ready for a complete reset.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">When it’s needed</h2>
          <p className="mt-2 text-sm text-gray-700">
            After long-term use, before resale, or when the vehicle deserves a full transformation.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">Why execution matters</h2>
          <p className="mt-2 text-sm text-gray-700">
            Every step builds on the last. Proper correction, prep, and finishing are essential for
            a cohesive result.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border p-6 motion-fade-up motion-2">
        <h2 className="text-lg font-semibold">How our approach differs</h2>
        <p className="mt-2 text-sm text-gray-700">
          We balance paint correction, protection, and interior restoration as a single story. The
          finish, the surfaces, and the details all align to feel intentional.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 motion-fade-up motion-3">
        {[
          "Exterior correction sequence",
          "Ceramic coating application",
          "Interior restoration details",
        ].map((label) => (
          <div
            key={label}
            role="img"
            aria-label={`Placeholder for ${label}`}
            className="rounded-2xl border bg-gray-50/70 p-6 text-sm text-gray-500"
          >
            {label} placeholder
          </div>
        ))}
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 motion-fade-up motion-4">
        <h3 className="text-lg font-semibold">Related services</h3>
        <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/Services/paint-correction" className="underline focus-ring">
            Paint Correction →
          </Link>
          <Link href="/Services/ceramic-coatings" className="underline focus-ring">
            Ceramic Coatings →
          </Link>
          <Link href="/Contact" className="underline focus-ring">
            Request a quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
