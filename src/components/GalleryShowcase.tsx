"use client";

import { useMemo, useState } from "react";

type Job = {
  title: string;
  vehicle: string;
  location: string;
  tags: string[];
  video: string;
  poster: string;
  before: string;
  after: string;
  highlights: string[];
  summary: string[];
};

const filters = [
  "All",
  "Paint Correction",
  "Ceramic Coatings",
  "Interior Restoration",
  "Full Transformation",
];

const jobs: Job[] = [
  {
    title: "Full Correction + Ceramic",
    vehicle: "Example: BMW M3",
    location: "Plano, TX",
    tags: ["Paint Correction", "Ceramic Coatings", "Full Transformation"],
    video: "/gallery/bmw-m3/transition.mp4",
    poster: "/gallery/bmw-m3/poster.jpg",
    before: "/gallery/bmw-m3/before.jpg",
    after: "/gallery/bmw-m3/after.jpg",
    highlights: [
      "/gallery/bmw-m3/01.jpg",
      "/gallery/bmw-m3/02.jpg",
      "/gallery/bmw-m3/03.jpg",
      "/gallery/bmw-m3/04.jpg",
    ],
    summary: [
      "Multi-stage correction and refinement",
      "Ceramic coating applied for protection",
      "Interior reset and glass clarity",
    ],
  },
  {
    title: "Deep Interior Restoration",
    vehicle: "Example: Mercedes GLE",
    location: "Frisco, TX",
    tags: ["Interior Restoration"],
    video: "/gallery/mercedes-gle/transition.mp4",
    poster: "/gallery/mercedes-gle/poster.jpg",
    before: "/gallery/mercedes-gle/before.jpg",
    after: "/gallery/mercedes-gle/after.jpg",
    highlights: [
      "/gallery/mercedes-gle/01.jpg",
      "/gallery/mercedes-gle/02.jpg",
      "/gallery/mercedes-gle/03.jpg",
      "/gallery/mercedes-gle/04.jpg",
    ],
    summary: [
      "Deep extraction for fabric and carpet",
      "Odor neutralization and trim care",
      "Detailed finishing for a reset feel",
    ],
  },
  {
    title: "Paint Revival + Protection",
    vehicle: "Example: Range Rover",
    location: "Dallas, TX",
    tags: ["Paint Correction", "Ceramic Coatings"],
    video: "/gallery/range-rover/transition.mp4",
    poster: "/gallery/range-rover/poster.jpg",
    before: "/gallery/range-rover/before.jpg",
    after: "/gallery/range-rover/after.jpg",
    highlights: [
      "/gallery/range-rover/01.jpg",
      "/gallery/range-rover/02.jpg",
      "/gallery/range-rover/03.jpg",
      "/gallery/range-rover/04.jpg",
    ],
    summary: [
      "Paint enhancement for clarity",
      "Protection layer applied for durability",
      "Detail photos focused on gloss depth",
    ],
  },
];

export default function GalleryShowcase() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const filteredJobs = useMemo(() => {
    if (activeFilter === "All") return jobs;
    return jobs.filter((job) => job.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          Transformations
        </p>
        <h1 className="text-3xl font-semibold">Gallery</h1>
        <p className="text-gray-700">
          Each job is structured as a case study: a transition video, before/after visuals, and
          curated detail highlights.
        </p>
      </header>

      <section className="rounded-2xl border p-5 text-sm text-gray-700 motion-fade-up motion-1">
        <p className="font-semibold">How to add your media</p>
        <p className="mt-2">
          Place files in <span className="font-medium">/public/gallery/[job-name]/</span> and update
          the paths in the <span className="font-medium">jobs</span> array. Use one transition video,
          one before/after pair, and 4–6 highlight photos.
        </p>
      </section>

      <section className="flex flex-wrap gap-3 text-sm motion-fade-up motion-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition hover-lift focus-ring ${
              activeFilter === filter ? "bg-black text-white" : "bg-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      <div className="space-y-8">
        {filteredJobs.map((job, index) => (
          <section
            key={job.title}
            className={`rounded-2xl border p-6 sm:p-8 motion-fade-up motion-${(index % 5) + 1}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                  Project
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{job.title}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {job.vehicle} • {job.location}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1 text-xs gold-outline">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-2xl border bg-white/70 p-3 hover-lift gold-outline">
                <div className="rounded-xl border bg-gray-50/60 p-3 soft-glow">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-gray-500">
                    <span>Full Transition</span>
                    <span className="gold-text">Video</span>
                  </div>
                  <div className="mt-3 overflow-hidden rounded-xl border bg-black/90">
                    <video
                      className="aspect-video w-full object-cover"
                      src={job.video}
                      poster={job.poster}
                      controls
                      playsInline
                      muted
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  {job.highlights.map((src) => (
                    <figure
                      key={src}
                      className="rounded-xl border bg-white/70 p-2 hover-lift gold-outline"
                    >
                      <div className="aspect-square overflow-hidden rounded-lg border bg-gray-50/70">
                        <img
                          src={src}
                          alt={`${job.title} detail highlight`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
                <div className="rounded-xl border p-4 text-sm text-gray-700">
                  <p className="font-semibold">Work performed</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                    {job.summary.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Before", src: job.before },
                { label: "After", src: job.after },
              ].map((item) => (
                <figure key={item.label} className="rounded-xl border p-3 hover-lift">
                  <figcaption className="text-xs uppercase tracking-[0.28em] text-gray-500">
                    {item.label}
                  </figcaption>
                  <div className="mt-2 aspect-video overflow-hidden rounded-lg border bg-gray-50/70">
                    <img
                      src={item.src}
                      alt={`${job.title} ${item.label.toLowerCase()} image`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
