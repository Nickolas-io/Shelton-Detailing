import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Area | Shelton Detailing",
  description:
    "Mobile detailing across DFW with primary coverage in Arlington and surrounding cities.",
  openGraph: {
    title: "Service Area | Shelton Detailing",
    description:
      "Mobile detailing across DFW with primary coverage in Arlington and surrounding cities.",
  },
};

const areas = [
  "Arlington",
  "Dallas",
  "Fort Worth",
  "Plano",
  "Frisco",
  "Irving",
  "Grapevine",
  "Grand Prairie",
  "Mansfield",
  "Southlake",
];

export default function ServiceArea() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">Service area</p>
        <h1 className="text-3xl font-semibold">Mobile detailing across DFW</h1>
        <p className="text-gray-700">
          Shelton Detailing is a mobile service based in the DFW area, with primary coverage in
          Arlington and surrounding cities. If you’re nearby, reach out and we’ll confirm.
        </p>
      </header>

      <section className="rounded-2xl border p-6 motion-fade-up motion-1">
        <h2 className="text-lg font-semibold">Common service areas</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div key={area} className="rounded-xl border px-4 py-3 text-sm text-gray-700 hover-lift">
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 motion-fade-up motion-2">
        <h2 className="text-lg font-semibold">How mobile service works</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
          <li>We arrive at your home or workplace with everything needed.</li>
          <li>Access to water and power may be requested depending on the service.</li>
          <li>We’ll confirm scheduling, timing, and the best setup in advance.</li>
        </ul>
        <Link href="/Contact" className="mt-4 inline-block text-sm font-medium underline focus-ring">
          Check availability →
        </Link>
      </section>
    </div>
  );
}
