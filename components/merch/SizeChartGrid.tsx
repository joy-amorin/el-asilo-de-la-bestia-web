"use client";

import { Ruler } from "lucide-react";

interface SizeChart {
  id: number;
  title: string;
  image: string;
}

interface SizeChartGridProps {
  charts: SizeChart[];
  onSelect: (chart: SizeChart) => void;
}

export default function SizeChartGrid({
  charts,
  onSelect,
}: SizeChartGridProps) {
  return (
    <section className="mb-24">

      {/* Título */}
      <div className="flex items-center gap-6 mb-10">

        <h3 className="font-heading uppercase text-4xl md:text-5xl whitespace-nowrap">
          Tablas de Medidas
        </h3>

        <div className="flex-1 h-px bg-white/10" />

      </div>

      <p className="text-steel-light text-center md:text-left mb-10 max-w-2xl">
        Consultá las medidas antes de realizar tu pedido. Seleccioná la prenda
        para ver su tabla de talles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {charts.map((chart) => (
          <button
            key={chart.id}
            onClick={() => onSelect(chart)}
            className="group relative overflow-hidden cursor-pointer  border border-white/10 bg-white/5 hover:border-blood transition-all duration-300 rounded-sm p-8 text-center"
          >
            <div className="flex justify-center mb-6 text-steel-light group-hover:text-blood transition-colors duration-300">
              <Ruler size={42} strokeWidth={1.5} />
            </div>

            <h4 className="font-heading uppercase text-xl text-parchment mb-3">
              {chart.title}
            </h4>

            <p className="text-sm text-steel-light group-hover:text-white transition-colors">
              Ver tabla de medidas
            </p>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blood transition-all duration-300 group-hover:w-full" />
          </button>
        ))}

      </div>

    </section>
  );
}