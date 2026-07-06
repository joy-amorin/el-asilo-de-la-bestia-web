import Image from "next/image";

interface Release {
  id: number;
  year: string;
  type: string;
  title: string;
  cover: string;
  description: string;
  spotify: string;
}

interface DiscographyItemProps {
  release: Release;
  isLast: boolean;
}

export default function DiscographyItem({
  release,
  isLast,
}: DiscographyItemProps) {

  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-14 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      {/* Año */}
      <div className="lg:col-span-2 flex items-start">
        <span className="font-heading text-5xl md:text-6xl text-blood leading-none">
          {release.year}
        </span>
      </div>

      {/* Portada */}
      <div className="lg:col-span-3">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={release.cover}
            alt={release.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Información */}
      <div className="lg:col-span-7 flex flex-col justify-between">

        <div>

          <p className="font-heading uppercase tracking-[0.35em] text-xs text-steel-light mb-3">
            {release.type}
          </p>

          <h4 className="font-heading uppercase text-4xl md:text-5xl leading-none mb-6">
            {release.title}
          </h4>

          <p className="font-body text-steel-light leading-8 max-w-2xl">
            {release.description}
          </p>

        </div>

        <div className="mt-10">

          <a
            href={release.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-blood bg-blood px-8 py-4 font-heading uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:bg-red-700"
          >
            Escuchar
          </a>

        </div>

      </div>
    </article>
  );
}