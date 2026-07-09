import Image from "next/image";

const showImages = [
  {
    src: "/gallery/mutafest/mutafest-3.webp",
    alt: "El Asilo de la Bestia en vivo",
    size: "large",
  },
  {
    src: "/gallery/mutafest/mutafest-7.webp",
    alt: "El Asilo de la Bestia en vivo",
    size: "normal",
  },
  {
    
    src: "/gallery/santa-rosa/santa-rosa-7.webp",
    alt: "El Asilo de la Bestia en vivo",
    size: "normal",
  },
  {
    src: "/gallery/santa-rosa/santa-rosa-2.webp",
    alt: "El Asilo de la Bestia en vivo",
    size: "large",
  },
  {
    src: "/gallery/bandas-en-red/bandas-en-red-1.webp",
    alt: "El Asilo de la Bestia en vivo",
    size: "normal",
  },
  {
    src: "/gallery/santa-rosa/santa-rosa-6.webp",
    alt: "El Asilo de la Bestia en vivo",
    size: "normal",
  },
  {
    src: "/gallery/rara-avis/rara-avis-1.webp",
    alt: "El Asilo de la Bestia en vivo",
    size: "normal",
  },
  {
    src: "/gallery/rara-avis/rara-avis-5.webp",
    alt: "El Asilo de la Bestia en vivo",
    size: "normal",
  },
];

export default function ShowGallery() {
  return (
    <section className="bg-black px-8 py-16">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">

        {showImages.map((image, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden
              aspect-square
              border border-white/10
              ${
                image.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="
                object-cover
                grayscale
                transition-transform
                duration-700
                hover:scale-110
              "
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-500" />
          </div>
        ))}

      </div>

    </section>
  );
}