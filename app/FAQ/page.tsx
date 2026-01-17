import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Shelton Detailing",
  description:
    "Answers to common questions about timing, preparation, ceramic maintenance, interior stains, and weather.",
  openGraph: {
    title: "FAQ | Shelton Detailing",
    description:
      "Answers to common questions about timing, preparation, ceramic maintenance, interior stains, and weather.",
  },
};

const faqs = [
  {
    question: "How long do services take?",
    answer:
      "Time depends on condition and the level of correction needed. Restoration work is slower by design to protect the finish.",
  },
  {
    question: "What do you need from me on service day?",
    answer:
      "A safe parking space and access to the vehicle. Depending on the job, water or power access may be requested.",
  },
  {
    question: "How do I maintain ceramic coatings?",
    answer:
      "Gentle washing, safe drying methods, and avoiding harsh chemicals keep coatings performing at their best.",
  },
  {
    question: "Can you remove every stain?",
    answer:
      "We aim for the best realistic result for the material. Some stains can be fully removed, others significantly improved.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "We’ll confirm conditions in advance and reschedule if the environment isn’t safe for the finish or curing.",
  },
];

export default function FAQ() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">FAQ</p>
        <h1 className="text-3xl font-semibold">Common questions</h1>
        <p className="text-gray-700">
          Straight answers to the questions we hear most often.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 motion-fade-up motion-1">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-2xl border p-6 hover-lift">
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
