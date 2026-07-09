import GalleryImage from "./GalleryImage";
import { GalleryEvent } from "@/app/types/gallery";

interface GalleryGridProps {
  events: GalleryEvent[];
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

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
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