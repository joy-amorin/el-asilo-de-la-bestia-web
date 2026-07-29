"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import SizeChartGrid from "./SizeChartGrid";
import SizeChartModal from "./SizeChartModal";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

import {
  shirts,
  tazas,
  sizeCharts,
  canguros,
} from "./data";

interface SizeChart {
  id: number;
  title: string;
  image: string;
}

export default function MerchSection() {
  const [selectedChart, setSelectedChart] = useState<SizeChart | null>(null);

  return (
    <>
      <section className="relative bg-abyss text-parchment overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-24">

            <Image
              src="/merch/ardhara-logo/ardhara-logo.png"
              alt="Ardhara"
              width={140}
              height={140}
              className="mb-8"
            />

            <p className="font-heading uppercase tracking-[0.35em] text-sm text-steel-light mb-3">
              Merch oficial de
            </p>

            <h2 className="font-heading uppercase text-parchment text-5xl md:text-7xl lg:text-8xl leading-none">
              ARDHARA
            </h2>

            <div className="w-48 h-px bg-white/15 my-8"></div>

            <p className="font-body uppercase tracking-[0.25em] text-sm md:text-base text-blood">
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


          </section>

          {/* ===================== ACCESORIOS ===================== */}

          <section className="mb-24">

            <div className="flex items-center gap-6 mb-10">

              <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
                Canguros
              </h3>

              <div className="flex-1 h-px bg-white/10"></div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

              {canguros.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

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

              {tazas.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          </section>

          {/* ===================== TABLAS DE MEDIDAS ===================== */}

          <SizeChartGrid
            charts={sizeCharts}
            onSelect={setSelectedChart}
          />

          {/* ===================== ARDHARA CONTACT ===================== */}

          <div className="mt-32 pt-10">

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">

              <Image
                src="/merch/ardhara-logo/ardhara-logo.png"
                alt="Ardhara"
                width={110}
                height={110}
              />

              <div className="flex flex-col items-center md:items-start text-center md:text-left">

                <p className="font-heading uppercase tracking-[0.25em] text-sm text-steel-light mb-3">
                  Adquirí tu merch oficial
                </p>

                <div className="flex gap-5">

                  <a
                    href="https://wa.me/59898685847?text=Hola%20Ardhara,%20quiero%20consultar%20por%20un%20producto."
                    aria-label="WhatsApp Ardhara"
                    className="text-steel-light hover:text-white transition-colors"
                  >
                    <WhatsAppIcon />
                  </a>

                  <a
                    href="https://instagram.com/ardhara.rock"
                    aria-label="Instagram Ardhara"
                    className="text-steel-light hover:text-white transition-colors"
                  >
                    <InstagramIcon />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <SizeChartModal
        chart={selectedChart}
        open={selectedChart !== null}
        onClose={() => setSelectedChart(null)}
      />
    </>
  );
}