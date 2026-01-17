import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Philosophy | Shelton Detailing",
  description:
    "Condition-based pricing focused on results, craftsmanship, and long-term protection. Every quote is tailored.",
  openGraph: {
    title: "Pricing Philosophy | Shelton Detailing",
    description:
      "Condition-based pricing focused on results, craftsmanship, and long-term protection. Every quote is tailored.",
  },
};

export default function Pricing() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          Pricing & quoting
        </p>
        <h1 className="text-3xl font-semibold">Condition-based pricing</h1>
        <p className="text-gray-700">
          Pricing reflects the time, materials, and precision required for your specific vehicle.
          No two finishes are the same.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3 motion-fade-up motion-1">
        {[
          {
            name: "Deep Refresh",
            price: "Starting at $___",
            points: [
              "Thorough wash + interior reset",
              "Light polish option",
              "Best for well-kept vehicles needing a refresh",
            ],
          },
          {
            name: "Full Correction",
            price: "Starting at $___",
            points: [
              "Multi-stage paint correction",
              "Gloss refinement + protection prep",
              "Best for visible swirls and haze",
            ],
          },
          {
            name: "Protection & Preservation",
            price: "Starting at $___",
            points: [
              "Ceramic coating options",
              "Long-term protection focus",
              "Ideal for new or corrected paint",
            ],
          },
        ].map((p) => (
          <div key={p.name} className="rounded-2xl border p-5 hover-lift">
            <p className="font-semibold">{p.name}</p>
            <p className="mt-2 text-2xl font-semibold">{p.price}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
              {p.points.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border p-6 motion-fade-up motion-2">
        <h2 className="text-lg font-semibold">What affects cost</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
          <li>Vehicle size and body shape</li>
          <li>Paint condition and defect severity</li>
          <li>Interior condition, stains, or odors</li>
          <li>Desired protection level and finish goals</li>
          <li>Time required for proper correction and curing</li>
        </ul>
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 motion-fade-up motion-3">
        <h2 className="text-lg font-semibold">How quotes work</h2>
        <p className="mt-2 text-sm text-gray-700">
          Send the details below and I’ll reply with a clear recommendation and pricing range:
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
          <li>Vehicle year / make / model</li>
          <li>Current condition + goals</li>
          <li>Photos in good light</li>
          <li>Location or zip code</li>
          <li>Timeline or preferred dates</li>
        </ul>
        <Link href="/Contact" className="mt-4 inline-block underline text-sm font-medium focus-ring">
          Get a quote →
        </Link>
      </section>

      <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
        <Link href="/Process" className="underline focus-ring">
          See the process →
        </Link>
        <Link href="/FAQ" className="underline focus-ring">
          Read the FAQ →
        </Link>
      </div>
    </div>
  );
}
