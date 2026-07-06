import Image from "next/image";

interface UpcomingShow {
  id: number;
  flyer: string;
  weekday: string;
  day: string;
  month: string;
  year: string;
  time: string;
  city: string;
  country: string;
  venue: string;
  address: string;
  description: string;
  ticketsUrl: string;
  mapsUrl: string;
  ticketProvider: string;
}

interface UpcomingShowCardProps {
  show: UpcomingShow;
  isLast: boolean;
}

export default function UpcomingShowCard({
  show,
  isLast,
}: UpcomingShowCardProps) {
  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      {/* Flyer */}

      <div className="lg:col-span-4">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={show.flyer}
            alt={`${show.city} - ${show.venue}`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Fecha */}

      <div className="lg:col-span-2 flex flex-col justify-center border-l border-white/10 lg:pl-8">

        <p className="font-heading uppercase tracking-[0.25em] text-sm text-steel-light">
          {show.weekday}
        </p>

        <h3 className="font-heading text-blood text-7xl leading-none my-3">
          {show.day}
        </h3>

        <p className="font-heading uppercase text-3xl leading-none">
          {show.month}
        </p>

        <p className="font-heading uppercase text-3xl leading-none mt-2">
          {show.year}
        </p>

        <p className="mt-6 font-body text-steel-light">
          {show.time}
        </p>

      </div>

      {/* Información */}

      <div className="lg:col-span-6 flex flex-col justify-center">

        <p className="font-heading uppercase tracking-[0.18em] text-sm text-blood mb-2">
          {show.city}, {show.country}
        </p>

        <h3 className="font-heading uppercase text-4xl md:text-5xl leading-none mb-4">
          {show.venue}
        </h3>

        <p className="font-body text-steel-light mb-6">
          {show.address}
        </p>

        <div className="border-t border-white/10 mb-6"></div>

        <p className="font-body text-steel-light leading-8 max-w-xl">
          {show.description}
        </p>

        {/* Botón */}

        <div className="mt-8">

          <a
            href={show.ticketsUrl}
            target="_blank"
            rel="noopener noreferrer"
           className="inline-flex items-center justify-center border border-blood bg-blood px-8 py-4 font-heading uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:bg-red-700"
          >
            Comprar Entradas
          </a>

        </div>

        {/* Links */}

        <div className="flex flex-wrap gap-6 mt-8 text-sm font-heading uppercase tracking-[0.15em] text-steel-light">

          <a
            href={show.ticketsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-parchment transition-colors"
          >
            Entradas en {show.ticketProvider}
          </a>


        </div>

      </div>
    </article>
  );
}