import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Process | Shelton Detailing",
  description:
    "Inspect → Decontaminate → Correct → Protect → Finish. A calm, deliberate workflow built for lasting results.",
  openGraph: {
    title: "Process | Shelton Detailing",
    description:
      "Inspect → Decontaminate → Correct → Protect → Finish. A calm, deliberate workflow built for lasting results.",
  },
};

const steps = [
  {
    title: "Inspect",
    detail:
      "We evaluate paint, trim, and interior condition to build a plan around what the vehicle actually needs.",
  },
  {
    title: "Decontaminate",
    detail:
      "Surface-safe decon removes embedded contaminants and prepares the finish for proper correction.",
  },
  {
    title: "Correct",
    detail:
      "Polishing is measured and controlled. The goal is clarity, not unnecessary abrasion.",
  },
  {
    title: "Protect",
    detail:
      "Sealants or ceramic coatings are applied after proper prep to lock in the finish and protect it.",
  },
  {
    title: "Finish",
    detail:
      "Final inspection, touch-ups, and a clean presentation to ensure the result is consistent.",
  },
];

export default function Process() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">Process</p>
        <h1 className="text-3xl font-semibold">A workflow built for precision</h1>
        <p className="text-gray-700">
          This process filters out shortcuts and protects the long-term finish. Quality takes time
          because each stage earns the right to the next.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 motion-fade-up motion-1">
        {steps.map((step) => (
          <div key={step.title} className="rounded-2xl border p-6 hover-lift">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
              {step.title}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{step.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{step.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 motion-fade-up motion-2">
        <h2 className="text-lg font-semibold">Why quality takes time</h2>
        <p className="mt-2 text-sm text-gray-700">
          Proper correction and protection require careful prep, controlled technique, and
          thoughtful finishing. This is how we keep results consistent and paint-safe.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/Services" className="underline focus-ring">
            Explore services →
          </Link>
          <Link href="/Gallery" className="underline focus-ring">
            View transformations →
          </Link>
          <Link href="/Contact" className="underline focus-ring">
            Request a quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
