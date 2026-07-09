import Image from "next/image";

interface Video {
  id: number;
  year: string;
  title: string;
  youtubeEmbed: string;
  youtube: string;
}
interface VideoCardProps {
  video: Video;
}
export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="group flex flex-col">

      {/* YouTube */}
    <div className="w-full max-w-5xl mx-auto bg-[#111] rounded-2xl p-3 shadow-md">
        <div className="aspect-video">
            <iframe
            className="w-full h-full rounded-lg"
            src={video.youtubeEmbed}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            />
        </div>
    </div>

      {/* Info */}
      <div>

        <p className="font-heading uppercase tracking-[0.3em] text-xs text-blood mb-2">
          {video.year}
        </p>

        <h4 className="font-heading uppercase text-2xl md:text-3xl leading-tight mb-4">
          {video.title}
        </h4>

        <a
          href={video.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.2em] text-sm text-steel-light transition-colors duration-300 hover:text-parchment"
        >
          Ver video
          <span className="text-blood">→</span>
        </a>

      </div>

    </article>
  );
}