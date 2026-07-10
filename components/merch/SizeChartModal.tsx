"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

interface SizeChart {
  id: number;
  title: string;
  image: string;
}

interface SizeChartModalProps {
  chart: SizeChart | null;
  open: boolean;
  onClose: () => void;
}

export default function SizeChartModal({
  chart,
  open,
  onClose,
}: SizeChartModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !chart) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute -top-12 right-0 text-white hover:text-blood transition-colors"
        >
          <X size={32} />
        </button>

        {/* Título */}
        <h3 className="font-heading uppercase text-center text-parchment text-3xl md:text-4xl mb-8">
          {chart.title}
        </h3>

        {/* Imagen */}
        <div className="relative flex justify-center items-center max-h-[80vh] overflow-auto rounded border border-white/10 bg-abyss p-4">
  <Image
    src={chart.image}
    alt={chart.title}
    width={1400}
    height={1000}
    className="w-auto h-auto max-w-full max-h-[75vh] object-contain"
    priority
  />
</div>
      </div>
    </div>
  );
}