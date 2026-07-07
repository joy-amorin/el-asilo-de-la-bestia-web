import PressCard from "./PressCard";
import { pressArticles } from "./data";

export default function PressSection() {
  return (
    <section className="relative bg-abyss text-parchment overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">

        {/* Header */}

          <div className="mb-20 text-center">

            <h2 className="relative font-heading text-parchment text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
              Prensa
            </h2>

            <p className="mt-8 font-heading uppercase tracking-[0.35em] text-sm text-blood">
              Notas. Entrevistas. Coberturas.
            </p>

          </div>

          <div className="lg:col-span-6">

          </div>

        {/* Artículos */}

        <div className="mb-20">

          <div className="flex items-center gap-6 mb-10">

            <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
              Artículos
            </h3>

            <div className="flex-1 h-px bg-white/10"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {pressArticles.map((article) => (
              <PressCard
                key={article.id}
                article={article}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}