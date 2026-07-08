import Image from "next/image";
import ProductCard from "./ProductCard";
import {
  shirts,
  accessories,
  mugs,
  features,
} from "./data";

export default function MerchSection() {
  return (
    <section className="relative bg-abyss text-parchment overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">

        {/* Header */}
            <div className="flex flex-col items-center text-center mb-24">

            {/* Logo */}
            <Image
                src="/merch/ardhara-logo/ardhara-logo.png"
                alt="Ardhara"
                width={140}
                height={140}
                className="mb-8"
            />

            {/* Texto */}
            <p className="font-heading uppercase tracking-[0.35em] text-sm text-steel-light mb-3">
                Merch oficial de
            </p>

            <h2 className="font-heading uppercase text-parchment text-5xl md:text-7xl lg:text-8xl leading-none">
                ARDHARA
            </h2>

            {/* Línea */}

            <div className="w-48 h-px bg-white/15 my-8"></div>

            <p className="font-body uppercase tracking-[0.25em] text-sm md:text-base text-steel-light">
                Productos oficiales de El Asilo de la Bestia
            </p>

            </div>

        {/* ===================== REMERAS ===================== */}

        <section className="mb-24">

          <div className="flex items-center gap-6 mb-10">

            <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
              Remeras
            </h3>

            <div className="flex-1 h-px bg-white/10"></div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {shirts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          <div className="flex justify-center mt-12">

            <button className="border border-blood px-10 py-4 font-heading uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:bg-blood">
              Ver todas las remeras
            </button>

          </div>

        </section>

        {/* ===================== ACCESORIOS ===================== */}

        <section className="mb-24">

          <div className="flex items-center gap-6 mb-10">

            <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
              Accesorios
            </h3>

            <div className="flex-1 h-px bg-white/10"></div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {accessories.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          <div className="flex justify-center mt-12">

            <button className="border border-blood px-10 py-4 font-heading uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:bg-blood">
              Ver todos los accesorios
            </button>

          </div>

        </section>

        {/* ===================== TAZAS ===================== */}

        <section className="mb-24">

          <div className="flex items-center gap-6 mb-10">

            <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
              Tazas
            </h3>

            <div className="flex-1 h-px bg-white/10"></div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {mugs.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          <div className="flex justify-center mt-12">

            <button className="border border-blood px-10 py-4 font-heading uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:bg-blood">
              Ver todas las tazas
            </button>

          </div>

        </section>

        {/* ===================== BENEFICIOS ===================== */}

      </div>
    </section>
  );
}