import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Shelton Detailing",
  description:
    "Craft-focused mobile detailing built on precision, patience, and respect for every vehicle.",
  openGraph: {
    title: "About | Shelton Detailing",
    description:
      "Craft-focused mobile detailing built on precision, patience, and respect for every vehicle.",
  },
};

export default function About() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">About</p>
        <h1 className="text-3xl font-semibold">Craft over shortcuts</h1>
        <p className="text-gray-700">
          Shelton Detailing is built for owners who care about the finish, the details, and the
          longevity of their vehicle. The work is calm, deliberate, and results-first.
        </p>
      </header>

      <section className="rounded-2xl border p-6 motion-fade-up motion-1">
        <h2 className="text-xl font-semibold">Standards that don’t bend</h2>
        <p className="mt-2 text-sm text-gray-700">
          Every surface is inspected, every step is chosen for the condition in front of us, and
          every finish is protected with paint-safe methods. The goal is a result that looks right
          in any light, not just under a camera.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 motion-fade-up motion-2">
        <div className="rounded-2xl border p-6">
          <h3 className="text-lg font-semibold">Why quality takes time</h3>
          <p className="mt-2 text-sm text-gray-700">
            Correction is measured, not rushed. Proper preparation, controlled polishing, and
            careful finishing are the difference between “clean” and truly restored.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="text-lg font-semibold">Respect for every vehicle</h3>
          <p className="mt-2 text-sm text-gray-700">
            Whether it’s a daily driver or a collector piece, the approach is the same: protect the
            surface, refine the finish, and leave it better than it arrived.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 motion-fade-up motion-3">
        <h3 className="text-lg font-semibold">The philosophy in practice</h3>
        <p className="mt-2 text-sm text-gray-700">
          Restoration-level work doesn’t come from a checklist. It comes from experience with paint,
          materials, and the patience to do it right.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="rounded-full border px-3 py-1 gold-outline">Paint-safe methods</span>
          <span className="rounded-full border px-3 py-1 gold-outline">Satisfaction-first</span>
          <span className="rounded-full border px-3 py-1 gold-outline">Service area: DFW</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/Process" className="underline focus-ring">
            View the process →
          </Link>
          <Link href="/Services" className="underline focus-ring">
            Explore services →
          </Link>
          <Link href="/Contact" className="underline focus-ring">
            Start a quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
