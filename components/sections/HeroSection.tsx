import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/ArrowRight";
import LiveGallery from "@/components/sections/LiveGallery";

export default function Hero() {
  return (
    <>
      <section className="relative w-full min-h-screen bg-black overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bio/band-photo.png"
            alt="El Asilo de la Bestia"
            fill
            priority
            className="object-cover object-[center_35%] opacity-90"
          />

          {/* Gradient overlay — darkens left side for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>


        {/* ── HERO CONTENT ── */}
        <div className="relative z-20 flex flex-col justify-between min-h-[calc(100vh-80px)] px-8 pb-8">

          {/* Main content area */}
          <div className="flex-1 flex items-center">
            <div className="max-w-xl mt-4">

              <div className="mb-6 h-[clamp(10rem,20vw,18rem)]" />

              {/* CTAs */}
              <div className="flex flex-col gap-3 max-w-xs">

                <Link
                  href="/multimedia"
                  className="flex items-center justify-between px-6 py-4 bg-[#d4c9b0] text-black text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white transition-colors group"
                >
                  ESCUCHAR MATERIAL

                  <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                    <ArrowRight />
                  </span>
                </Link>


                <Link
                  href="/shows"
                  className="flex items-center justify-between px-6 py-4 border border-zinc-600 text-white text-[11px] tracking-[0.2em] font-bold uppercase hover:border-white transition-colors group"
                >
                  PRÓXIMAS FECHAS

                  <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                    <ArrowRight />
                  </span>
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ── LIVE SHOW GALLERY ── */}
      <LiveGallery />
    </>
  );
}