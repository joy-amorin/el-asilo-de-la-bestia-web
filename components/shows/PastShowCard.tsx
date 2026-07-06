import Image from "next/image";

interface PastShow {
  id: number;
  flyer: string;
  date: string;
  city: string;
  country: string;
  venue: string;
}

interface PastShowCardProps {
  show: PastShow;
}

export default function PastShowCard({
  show,
}: PastShowCardProps) {
  return (
    <article className="group">

      {/* Flyer */}

      <div className="relative aspect-[4/5] overflow-hidden mb-6">

        <Image
          src={show.flyer}
          alt={`${show.city} - ${show.venue}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

      </div>

      {/* Información */}

      <div>

        <p className="font-heading uppercase tracking-[0.18em] text-xs text-steel-light mb-3">
          {show.date}
        </p>

        <h3 className="font-heading uppercase text-blood text-xl md:text-2xl leading-none mb-3">
          {show.city}, {show.country}
        </h3>

        <p className="font-body text-steel-light text-base">
          {show.venue}
        </p>

      </div>

    </article>
  );
}