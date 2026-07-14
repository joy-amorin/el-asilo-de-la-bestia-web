import Link from "next/link";
import Image from "next/image";
import {
  SpotifyIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
  MailIcon,
} from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-abyss border-t border-steel/20">
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col items-center text-center">

        {/* Logo */}
        <Link href="/" className="mb-6">
          <Image
            src="/images/logo.jpeg"
            alt="El Asilo de la Bestia"
            width={72}
            height={72}
            className="rounded-full"
          />
        </Link>

        {/* Título */}
        <h2 className="font-heading uppercase tracking-[0.35em] text-xl text-parchment mb-2">
          El Asilo de la Bestia
        </h2>

        {/* Texto */}
        <p className="text-steel-light max-w-md mb-10">
          Contacto
        </p>

        {/* Redes */}
        <div className="flex items-center gap-8 mb-10">
          <Link
            href="https://open.spotify.com/intl-es/artist/1U9e2LH1QYtoZIfb0u5m1K?si=4us6f1VCRGWWi6oJ1JTJ5g"
            target="_blank"
            aria-label="Spotify"
            className="text-steel hover:text-blood transition-colors duration-300"
          >
            <SpotifyIcon />
          </Link>

          <Link
            href="https://www.youtube.com/@elasilodelabestia"
            target="_blank"
            aria-label="YouTube"
            className="text-steel hover:text-blood transition-colors duration-300"
          >
            <YouTubeIcon />
          </Link>

          <Link
            href="https://instagram.com/elasilodelabestia"
            target="_blank"
            aria-label="Instagram"
            className="text-steel hover:text-blood transition-colors duration-300"
          >
            <InstagramIcon />
          </Link>

          <Link
            href="https://facebook.com/elasilodelabestia"
            target="_blank"
            aria-label="Facebook"
            className="text-steel hover:text-blood transition-colors duration-300"
          >
            <FacebookIcon />
          </Link>
        </div>

        {/* Email */}
        <Link
          href="mailto:contactoelasilodelabestia@gmail.com"
          className="inline-flex items-center gap-3 text-steel-light hover:text-parchment transition-colors duration-300 mb-10"
        >
          <MailIcon />
           contactoelasilodelabestia@gmail.com
        </Link>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-steel/20">
          <p className="text-xs uppercase tracking-[0.25em] text-steel">
            © 2026 El Asilo de la Bestia · Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  );
}