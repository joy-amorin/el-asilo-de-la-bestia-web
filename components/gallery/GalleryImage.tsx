import Image from "next/image";

import { GalleryItem } from "@/app/types/gallery";

interface GalleryImageProps {
  image: GalleryItem;
  carousel?: boolean;
}

export default function GalleryImage({
  image,
  carousel = false,
}: GalleryImageProps) {
  return (
    <article
      className={`
        group relative overflow-hidden bg-black break-inside-avoid
        ${carousel ? "h-56" : "mb-4"}
      `}
    >
      <Image
        src={image.image}
        alt={image.title}
        width={image.width}
        height={image.height}
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
        className={`
          w-full
          transition-transform duration-700
          group-hover:scale-105
          ${carousel ? "h-full object-cover" : "h-auto"}
        `}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}