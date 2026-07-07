import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/navigation";
import { SpotifyIcon, YouTubeIcon, InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";


export default function Nav() {
    return (
      <nav className="sticky top-0 z-20 flex items-center justify-between bg-abyss px-8 py-5">
        {/* Logo mark (waveform icon) */}
        <Link href="/" aria-label="Inicio">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={48}
            height={36}
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-[11px] tracking-[0.18em] font-medium transition-colors
                  ${i === 0
                    ? "text-white border-b border-red-600 pb-0.5"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <Link href="#" aria-label="Spotify" className="hover:text-white transition-colors">
            <SpotifyIcon />
          </Link>
          <Link href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            <YouTubeIcon />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <InstagramIcon />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <FacebookIcon />
          </Link>
        </div>
      </nav>
    );
}