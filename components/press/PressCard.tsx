import Image from "next/image";

interface PressArticle {
  id: number;
  image: string;
  date: string;
  title: string;
  source: string;
  url: string;
  buttonText: string;
}

interface PressCardProps {
  article: PressArticle;
}

export default function PressCard({
  article,
}: PressCardProps) {
  return (
    <article className="group border border-white/10 bg-black/20 overflow-hidden transition-all duration-300 hover:border-blood">

      {/* Imagen */}

      <div className="relative aspect-[4/3] overflow-hidden">

        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

      </div>

      {/* Contenido */}

      <div className="p-6 flex flex-col h-[320px]">

        <p className="font-heading uppercase tracking-[0.2em] text-xs text-blood mb-5">
          {article.date}
        </p>

        <h3 className="font-heading uppercase text-2xl leading-tight text-parchment mb-6">
          {article.title}
        </h3>

        <p className="font-body uppercase tracking-[0.2em] text-sm text-steel-light mb-8">
          {article.source}
        </p>

        <div className="mt-auto">

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center border border-white/10 px-6 py-4 font-heading uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:border-blood hover:bg-blood"
          >
            {article.buttonText}
          </a>

        </div>

      </div>

    </article>
  );
}