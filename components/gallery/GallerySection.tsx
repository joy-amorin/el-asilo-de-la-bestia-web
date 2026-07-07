import GalleryGrid from "./GalleryGrid";
import { galleryImages } from "./data";

export default function GallerySection() {
  return (
    <section className="relative bg-abyss text-parchment overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">

        {/* Header */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          <div className="lg:col-span-6">

            <h2 className="relative font-heading text-parchment text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
              En vivo
              <span className="absolute left-0 -bottom-3 w-24 h-[2px] bg-blood"></span>
            </h2>

          </div>

          <div className="lg:col-span-6">

            <div className="border-l border-white/10 pl-8">

              <p className="font-body text-steel-light text-lg leading-9">
                Cada show es una batalla. Esta es la galería de nuestras
                presentaciones en vivo. Caos, entrega y verdad.
              </p>

            </div>

          </div>

        </div>

        {/* Grid */}

        <GalleryGrid images={galleryImages} />

        {/* CTA */}

      </div>
    </section>
  );
}