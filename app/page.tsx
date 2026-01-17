import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shelton Detailing | Precision Auto Restoration in DFW",
  description:
    "Restoration-level mobile detailing focused on paint correction, ceramic coatings, and deep interior restoration.",
  openGraph: {
    title: "Shelton Detailing | Precision Auto Restoration in DFW",
    description:
      "Restoration-level mobile detailing focused on paint correction, ceramic coatings, and deep interior restoration.",
  },
};

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl border p-8 sm:p-12 soft-glow motion-fade-up motion-1">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          Precision mobile detailing • DFW
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Restoration-level detailing with calm confidence and relentless care.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700">
          Paint correction, ceramic coatings, and deep interior restoration for vehicles that need
          more than a quick wash. Every service is built around the condition in front of us.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/Contact"
            className="rounded bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90 btn-press focus-ring"
          >
            Get a Quote
          </Link>
          <a
            href="tel:(###) ###-####"
            className="rounded border px-5 py-3 text-sm font-medium hover:bg-gray-50 btn-press focus-ring gold-outline"
          >
            Call / Text (###) ###-####
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Satisfaction-first",
              desc: "Results-driven work, never rushed.",
            },
            {
              title: "Paint-safe methods",
              desc: "Measured correction and precise technique.",
            },
            {
              title: "Quality products",
              desc: "Protection that holds up over time.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border p-4 hover-lift">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 motion-fade-up motion-2">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">Services</p>
            <h2 className="mt-2 text-2xl font-semibold">Core restoration specialties</h2>
          </div>
          <Link href="/Services" className="text-sm font-medium underline focus-ring">
            Full service overview →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Paint Correction",
              desc: "Swirl removal and clarity restoration.",
              href: "/Services/paint-correction",
            },
            {
              title: "Ceramic Coatings",
              desc: "Long-term protection and gloss depth.",
              href: "/Services/ceramic-coatings",
            },
            {
              title: "Interior Restoration",
              desc: "Deep reset for leather, fabric, and trim.",
              href: "/Services/interior-restoration",
            },
            {
              title: "Full Transformation",
              desc: "Comprehensive exterior + interior revival.",
              href: "/Services/full-transformation",
            },
          ].map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border p-5 transition hover-lift focus-ring"
            >
              <p className="font-semibold">{service.title}</p>
              <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-8 sm:p-10 motion-fade-up motion-3">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">Process</p>
            <h2 className="mt-2 text-2xl font-semibold">A clear workflow, refined over time</h2>
            <p className="mt-3 text-gray-700">
              Inspect → Decontaminate → Correct → Protect → Finish. Quality takes time because each
              surface gets what it actually needs.
            </p>
          </div>
          <Link href="/Process" className="text-sm font-medium underline focus-ring">
            See the full process →
          </Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-5">
          {["Inspect", "Decon", "Correct", "Protect", "Finish"].map((step) => (
            <div
              key={step}
              className="rounded-xl border px-4 py-3 text-center text-sm font-medium hover-lift"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] motion-fade-up motion-4">
        <div className="rounded-2xl border p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Craft philosophy
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Results-based, never checklist-based
          </h2>
          <p className="mt-3 text-gray-700">
            Every vehicle has a different story. We inspect first, correct what matters, and finish
            with protection that respects the surface. It’s calm, careful, and intentional.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="rounded-full border px-3 py-1 gold-outline">Paint-safe methods</span>
            <span className="rounded-full border px-3 py-1 gold-outline">Satisfaction-first</span>
            <span className="rounded-full border px-3 py-1 gold-outline">Service area: DFW</span>
          </div>
          <Link href="/About" className="mt-5 inline-block text-sm font-medium underline focus-ring">
            About Shelton Detailing →
          </Link>
        </div>
        <div className="rounded-2xl border p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Transformations
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Case study gallery</h2>
          <p className="mt-3 text-gray-700">
            Each project is captured as a story with a transition video, before/after moments, and
            detail shots.
          </p>
          <Link href="/Gallery" className="mt-5 inline-block text-sm font-medium underline focus-ring">
            View the gallery →
          </Link>
        </div>
      </section>

      <section className="rounded-2xl bg-gray-50 p-8 sm:p-10 motion-fade-up motion-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ready for a full transformation?</h2>
            <p className="mt-2 text-gray-700">
              Share the vehicle details and your goals. You’ll get a clear plan and a personalized
              quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/Contact"
              className="rounded bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90 btn-press focus-ring"
            >
              Get Quote
            </Link>
            <a
              href="sms:(###) ###-####"
              className="rounded border px-5 py-3 text-sm font-medium hover:bg-white btn-press focus-ring gold-outline"
            >
              Text (###) ###-####
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
