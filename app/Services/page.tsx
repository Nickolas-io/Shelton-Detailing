import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Shelton Detailing",
  description:
    "Explore restoration-level detailing services including paint correction, ceramic coatings, interior restoration, and full vehicle transformation.",
  openGraph: {
    title: "Services | Shelton Detailing",
    description:
      "Explore restoration-level detailing services including paint correction, ceramic coatings, interior restoration, and full vehicle transformation.",
  },
};

export default function Services() {
  const services = [
    {
      title: "Paint Correction",
      desc: "Remove swirls, haze, and defects to restore clarity and depth.",
      who: "Ideal for vehicles with visible paint defects or neglected finishes.",
      href: "/Services/paint-correction",
    },
    {
      title: "Ceramic Coatings",
      desc: "Long-term protection with deep gloss and easier maintenance.",
      who: "Best for owners who want durable protection and finish preservation.",
      href: "/Services/ceramic-coatings",
    },
    {
      title: "Interior Restoration",
      desc: "Deep cleaning and material care for a full interior reset.",
      who: "Built for heavy use, stains, odor, or worn interior surfaces.",
      href: "/Services/interior-restoration",
    },
    {
      title: "Full Transformation",
      desc: "Comprehensive interior + exterior revival built around your goals.",
      who: "For vehicles needing a complete, top-to-bottom transformation.",
      href: "/Services/full-transformation",
    },
  ];

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          Services overview
        </p>
        <h1 className="text-3xl font-semibold">Restoration-level detailing</h1>
        <p className="text-gray-700">
          Services are tailored to the condition of your vehicle. The goal is refinement,
          protection, and a finish that feels truly renewed.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 motion-fade-up motion-1">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="rounded-2xl border p-6 hover-lift focus-ring"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
              {service.title}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
            <p className="mt-4 text-sm text-gray-500">{service.who}</p>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl border p-6 motion-fade-up motion-2">
        <h3 className="text-lg font-semibold">Outcomes over checklists</h3>
        <p className="mt-2 text-sm text-gray-700">
          Every vehicle is evaluated first. We correct what matters, preserve what’s healthy, and
          recommend only what will improve the final result.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="rounded-full border px-3 py-1 gold-outline">Paint-safe methods</span>
          <span className="rounded-full border px-3 py-1 gold-outline">Condition-based planning</span>
          <span className="rounded-full border px-3 py-1 gold-outline">Satisfaction-first</span>
        </div>
      </section>

      <section className="rounded-2xl bg-gray-50 p-6 motion-fade-up motion-3">
        <h3 className="text-lg font-semibold">Next step: process + quoting</h3>
        <p className="mt-2 text-sm text-gray-700">
          Learn how the workflow is built and how quotes are tailored to your vehicle.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/Process" className="underline focus-ring">
            See the process →
          </Link>
          <Link href="/Pricing" className="underline focus-ring">
            Pricing philosophy →
          </Link>
          <Link href="/Contact" className="underline focus-ring">
            Get a quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
