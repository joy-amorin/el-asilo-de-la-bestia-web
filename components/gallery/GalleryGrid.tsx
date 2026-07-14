"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import GalleryImage from "./GalleryImage";
import { GalleryEvent } from "@/app/types/gallery";

interface GalleryGridProps {
  events: GalleryEvent[];
}

function MobileCarousel({
  images,
}: {
  images: GalleryEvent["images"];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 2,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative md:hidden">

      {/* Flecha izquierda */}
      <button
        onClick={scrollPrev}
        className="
          absolute left-2 top-1/2 z-10 -translate-y-1/2
          flex h-8 w-8 items-center justify-center
          rounded-full bg-black/60 text-parchment
          hover:bg-blood transition
        "
        aria-label="Imagen anterior"
      >
        ←
      </button>


      {/* Flecha derecha */}
      <button
        onClick={scrollNext}
        className="
          absolute right-2 top-1/2 z-10 -translate-y-1/2
          flex h-8 w-8 items-center justify-center
          rounded-full bg-black/60 text-parchment
          hover:bg-blood transition
        "
        aria-label="Siguiente imagen"
      >
        →
      </button>


      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">

          {images.map((image) => (
            <div
              key={image.id}
              className="
                flex-[0_0_50%]
                min-w-0
                px-1.5
              "
            >
              <GalleryImage
                image={image}
                carousel
              />
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}


export default function GalleryGrid({
  events,
}: GalleryGridProps) {
  return (
    <div className="space-y-16">

      {events.map((event) => (
        <section key={event.id}>

          <header className="mb-6">
            <h2 className="font-heading uppercase text-4xl text-parchment">
              {event.name}
            </h2>

            <p className="text-blood uppercase tracking-widest text-sm">
              {event.location}
            </p>
          </header>


          {/* Mobile */}
          <MobileCarousel images={event.images} />


          {/* Desktop */}
          <div className="hidden md:block md:columns-2 lg:columns-3 gap-4">
            {event.images.map((image) => (
              <GalleryImage
                key={image.id}
                image={image}
              />
            ))}
          </div>

        </section>
      ))}

    </div>
  );
}