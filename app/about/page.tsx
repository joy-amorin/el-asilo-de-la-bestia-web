import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-abyss text-parchment overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="relative font-heading text-parchment text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
          Nuestra Historia
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-24 h-[2px] bg-blood"></span>
          </h2>
            </div>
        {/* Foto */}
        <div className="relative w-full aspect-[16/8] mb-20 overflow-hidden">
          <Image
            src="/bio/band-photo.png"
            alt="El Asilo de la Bestia"
            fill
            className="object-cover"
          />
        </div>

        {/* Biografía */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Columna izquierda */}
          <div className="lg:col-span-4 space-y-8">
            <p className="font-heading uppercase text-2xl md:text-3xl leading-tight">
              Inspirada en el pensamiento de
              <span className="text-blood"> Thomas Hobbes</span>
            </p>

            <p className="font-heading uppercase text-2xl md:text-3xl leading-tight">
              nuestra música intenta desnudar la
              <span className="text-blood"> esencia del ser humano.</span>
            </p>
          </div>

          {/* Columna derecha */}
          <div className="lg:col-span-8">
            <div className="max-w-3xl space-y-8 font-body text-steel-light text-base md:text-lg leading-8">

              <p>
                Este proyecto inició en 2020, en plena pandemia. La banda lanzó su primer EP,
                titulado EPidemia, en 2021 y, desde entonces, no ha dejado de tocar en vivo.
                En 2023 publicó Despertar, su primer álbum, que fue nominado a los Premios
                Graffiti como Mejor Álbum de Metal y Hard Rock.
              </p>

              <p>
                Ha participado en festivales como Durazno Rock, Santa Rosa Rock y Ruedas, Exporock,
                entre otros, compartiendo escenario con bandas como NTVG, Buitres,
                La Triple Nelson, Reytoro, Pecho e’ Fierro, Flema (ARG) y más. También ha organizado
                sus propios recitales en Sala Camacuá y Espacio Midas. En 2025 realizó el concierto
                RARA AVIS, con localidades agotadas en la sala Hugo Balzo del Sodre.
              </p>
            </div>
          </div>
        </div>
      {/* Integrantes */}
      <div className="mt-16 border-t border-white/10 pt-10">

        <p className="font-heading uppercase text-sm tracking-[0.3em] text-steel-light mb-8">
          Integrantes
        </p>

        <div className="font-heading uppercase text-sm md:text-base tracking-wide text-steel-light flex flex-wrap gap-x-10 gap-y-6">

          <p className="flex gap-x-2">
            <span className="text-blood">Voz:</span>
            <span className="text-parchment">Eugenia Bonilla</span>
          </p>

          <p className="flex gap-x-2">
            <span className="text-blood">Guitarra:</span>
            <span className="text-parchment">Edgardo Olivera</span>
          </p>

          <p className="flex gap-x-2">
            <span className="text-blood">Guitarra / Flauta / Coros:</span>
            <span className="text-parchment">Lorena Marz</span>
          </p>

          <p className="flex gap-x-2">
            <span className="text-blood">Teclado:</span>
            <span className="text-parchment">Joy Amorín</span>
          </p>

          <p className="flex gap-x-2">
            <span className="text-blood">Bajo:</span>
            <span className="text-parchment">Leonardo Borges</span>
          </p>

          <p className="flex gap-x-2">
            <span className="text-blood">Batería:</span>
            <span className="text-parchment">Nicolás Margni</span>
          </p>

          <p className="flex gap-x-2">
            <span className="text-blood">Percusión:</span>
            <span className="text-parchment">Esteban Lafargue</span>
          </p>

        </div>
      </div>
      </div>
    </section>
  );
}