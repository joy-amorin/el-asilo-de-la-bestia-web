import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import { GalleryEvent } from "@/app/types/gallery";

const galleryPath = path.join(process.cwd(), "public/gallery");

const eventsConfig = [
  {
    id: "mutafest",
    name: "Muta Fest",
    location: "Pan de Azúcar",
    folder: "mutafest",
  },
  {
    id: "bandas-en-red",
    name: "Bandas en Red",
    location: "Sala Zitarrosa",
    folder: "bandas-en-red",
  },
  {
    id: "santa-rosa",
    name: "Santa Rosa Rock y ruedas",
    location: "Santa Rosa",
    folder: "santa-rosa",
  },
  {
    id: "rara-avis",
    name: "Rara Avis",
    location: "Sala Hugo Balzo",
    folder: "rara-avis",
  },
];

export function getGalleryEvents(): GalleryEvent[] {
  return eventsConfig.map((event) => {
    const folderPath = path.join(
      galleryPath,
      event.folder
    );

    const files = fs.readdirSync(folderPath);

    const images = files
  .filter((file) =>
    /\.(webp|jpg|jpeg|png)$/i.test(file)
  )
  .map((file, index) => {
  const filePath = path.join(folderPath, file);
  const buffer = fs.readFileSync(filePath);
  const dimensions = imageSize(buffer);

  return {
    id: `${event.id}-${index}`,
    image: `/gallery/${event.folder}/${file}`,
    title: event.name,
    width: dimensions.width ?? 0,
    height: dimensions.height ?? 0,
  };
});

    return {
      id: event.id,
      name: event.name,
      location: event.location,
      images,
    };
  });
}