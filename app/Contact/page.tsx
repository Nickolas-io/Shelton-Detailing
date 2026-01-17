import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Quote | Shelton Detailing",
  description:
    "Text is fastest. Share your vehicle details and goals for a clear, condition-based recommendation.",
  openGraph: {
    title: "Get a Quote | Shelton Detailing",
    description:
      "Text is fastest. Share your vehicle details and goals for a clear, condition-based recommendation.",
  },
};

export default function Contact() {
  return (
    <div className="space-y-6 text-app">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
          Get a quote
        </p>
        <h1 className="text-3xl font-semibold">Let’s plan the transformation</h1>
        <p className="text-muted">
          Text is fastest. Share a few details and you’ll get a calm, results-based recommendation.
        </p>
      </header>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="sms:(###) ###-####"
          className="rounded border px-5 py-3 text-sm font-medium text-app hover-lift btn-press focus-ring border-gold"
        >
          Text (###) ###-####
        </a>
        <a
          href="tel:(###) ###-####"
          className="rounded border px-5 py-3 text-sm font-medium hover-lift btn-press focus-ring border-gold"
        >
          Call (###) ###-####
        </a>
      </div>

      <div className="card p-5 motion-fade-up motion-1 hover-lift">
        <p className="font-semibold">Quote intake checklist</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted">
          <li>Vehicle year/make/model</li>
          <li>Paint and/or interior condition</li>
          <li>Any pet hair, stains, or odors</li>
          <li>Location or zip code</li>
          <li>Preferred timeline</li>
        </ul>
      </div>

      <div className="cta-card p-5 motion-fade-up motion-2">
        <p className="font-semibold">Template message</p>
        <p className="mt-1 text-sm text-muted">
          Copy, paste, and fill in the details:
        </p>
        <div className="mt-3 rounded-lg border p-4 text-sm text-muted whitespace-pre-line hover-lift border-gold bg-surface">
          Hi! I’d like a quote for detailing.
          {"\n"}Vehicle: [Year/Make/Model]
          {"\n"}Condition: [Paint/Interior notes]
          {"\n"}Needs: [Correction / Coating / Interior restoration]
          {"\n"}Location (zip): [#####]
          {"\n"}Timeline: [Dates]
          {"\n"}Photos: [Attached]
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-medium text-muted">
        <Link href="/Service-Area" className="underline focus-ring hover:text-app">
          Service area →
        </Link>
        <Link href="/FAQ" className="underline focus-ring hover:text-app">
          FAQ →
        </Link>
      </div>
    </div>
  );
}
