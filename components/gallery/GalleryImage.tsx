import Image from "next/image";

import { GalleryItem } from "@/app/types/gallery";

interface GalleryImageProps {
  image: GalleryItem;
}

export default function GalleryImage({
  image,
}: GalleryImageProps) {
  const sizeClasses = {
    normal: "aspect-[4/3]",
    wide: "aspect-[16/9] lg:col-span-2",
    large: "aspect-square lg:row-span-2",
  };

  return (
    <article
      className={`group relative overflow-hidden bg-black ${sizeClasses[image.size]}`}
    >
      <Image
        src={image.image}
        alt={image.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Información */}

      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">

        <p className="font-heading uppercase tracking-[0.25em] text-xs text-blood mb-2">
          {image.category}
        </p>

        <h3 className="font-heading uppercase text-2xl leading-none text-parchment">
          {image.title}
        </h3>

      </div>
    </article>
  );
}