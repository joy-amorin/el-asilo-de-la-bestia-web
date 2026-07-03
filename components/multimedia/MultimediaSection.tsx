import DiscographyItem from "@/components/multimedia/DiscographyItem";
import VideoCard from "@/components/multimedia/VideoCard";
import { discography, videos } from "./data";

export default function MultimediaSection() {
  return (
    <section className="relative bg-abyss text-parchment overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="relative font-heading text-parchment text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
            Nuestra música
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-24 h-[2px] bg-blood"></span>
          </h2>
        </div>

        {/* ================= DISCOS ================= */}

        <div className="mb-28">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">

            <div>
              <h3 className="font-heading uppercase text-4xl md:text-5xl">
                Discografía
              </h3>
            </div>

          </div>

          <div className="border-t border-white/10">

            {discography.map((release, index) => (
              <DiscographyItem
                key={release.id}
                release={release}
                isLast={index === discography.length - 1}
              />
            ))}

          </div>

        </div>

        {/* ================= VIDEOS ================= */}

        <div>

          <div className="flex items-center gap-6 mb-10">

            <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
              Videos Oficiales
            </h3>

            <div className="flex-1 h-px bg-white/10"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}