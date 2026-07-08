import GalleryGrid from "./GalleryGrid";
import { getGalleryEvents } from "@/app/lib/gallery";

export default function GallerySection() {
  const events = getGalleryEvents();

  return (
    <section className="relative bg-abyss text-parchment overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">

        {/* Header */}

        <div className="mb-20 text-center">
          <h2 className="relative font-heading text-parchment text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
            En vivo
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-24 h-[2px] bg-blood"></span>
          </h2>
        </div>

        {/* Grid */}

        <GalleryGrid events={events} />

      </div>
    </section>
  );
}