import fs from "fs";
import path from "path";

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
    name: "Santa Rosa",
    location: "Sala Hugo Balzo",
    folder: "santa-rosa",
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
  .map((file, index) => ({
    id: `${event.id}-${index}`,
    image: `/gallery/${event.folder}/${file}`,
    title: event.name,
    size:
      index % 5 === 0
        ? ("large" as const)
        : index % 3 === 0
        ? ("wide" as const)
        : ("normal" as const),
  }));

    return {
      id: event.id,
      name: event.name,
      location: event.location,
      images,
    };
  });
}