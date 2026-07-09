import Image from "next/image";

import { GalleryItem } from "@/app/types/gallery";

interface GalleryImageProps {
  image: GalleryItem;
}

export default function GalleryImage({ image }: GalleryImageProps) {
 
  return (
    <article
      className="group relative overflow-hidden bg-black break-inside-avoid mb-4"
    >
     <Image
      src={image.image}
      alt={image.title}
      width={image.width}
      height={image.height}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
    />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}