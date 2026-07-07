import UpcomingShowCard from "./UpcomingShowCard";
import { upcomingShows, pastShows } from "./data";

export default function ShowsSection() {
  return (
    <section className="relative bg-abyss text-parchment overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">

        {/* Header */}

        <div className="mb-20 text-center">
          <h2 className="relative font-heading text-parchment text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
            Shows
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-24 h-[2px] bg-blood"></span>
          </h2>
        </div>
        {/* Próximos Shows */}

        <div className="mb-28">

          <div className="flex items-center gap-6 mb-10">

            <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
              Próximos Shows
            </h3>

          </div>

          <div className="border-t border-white/10">

            {upcomingShows.map((show, index) => (
              <UpcomingShowCard
                key={show.id}
                show={show}
                isLast={index === upcomingShows.length - 1}
              />
            ))}

          </div>

        </div>

        {/* Shows anteriores 

        <div>

          <div className="flex items-center gap-6 mb-10">

            <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
              Shows Anteriores
            </h3>

            <div className="flex-1 h-px bg-white/10"></div>

          </div>

          {/*<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {pastShows.map((show) => (
              <PastShowCard
                key={show.id}
                show={show}
              />
            ))}

          </div>*

        </div> */}

      </div>
    </section>
  );
}