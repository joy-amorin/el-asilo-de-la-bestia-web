import GalleryImage from "./GalleryImage";
import { GalleryItem } from "@/app/types/gallery";

interface GalleryGridProps {
  images: GalleryItem[];
}

export default function GalleryGrid({
  images,
}: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {images.map((image) => (
        <GalleryImage
          key={image.id}
          image={image}
        />
      ))}

    </div>
  );
}