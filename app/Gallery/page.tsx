import type { Metadata } from "next";
import GalleryShowcase from "@/src/components/GalleryShowcase";

export const metadata: Metadata = {
  title: "Gallery | Shelton Detailing",
  description:
    "Case-study transformations featuring full transition videos, before/after visuals, and detail highlights.",
  openGraph: {
    title: "Gallery | Shelton Detailing",
    description:
      "Case-study transformations featuring full transition videos, before/after visuals, and detail highlights.",
  },
};

export default function Gallery() {
  return <GalleryShowcase />;
}
