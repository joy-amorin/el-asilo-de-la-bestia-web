import Image from "next/image";

interface Product {
  id: number;
  image: string;
  name: string;
  price?: string;
  prices?: {
    adult: string;
    kids?: string;
  };
  exclusive?: boolean;
  buttonText: string;
  url: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="group border border-white/10 bg-black/20 overflow-hidden transition-all duration-300 hover:border-blood">

      {/* Imagen */}
      <div className="relative aspect-square overflow-hidden">

        {product.exclusive && (
          <div className="absolute top-3 left-4 z-10 rounded bg-blood px-3 py-1 font-heading text-xs uppercase tracking-[0.15em] text-white">
            Exclusivo
          </div>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col">

        <h3 className="font-heading uppercase text-xl leading-tight text-parchment mb-3">
          {product.name}
        </h3>

        {product.prices && (
            <div className="mb-8">
              <p className="font-heading text-sm text-steel-light">
                {product.prices.adult && (
                  <>
                    Adulto{" "}
                    <span className="font-heading text-blood">
                      {product.prices.adult}
                    </span>
                  </>
                )}

                {product.prices.adult && product.prices.kids && (
                  <span className="mx-2 text-steel">•</span>
                )}

                {product.prices.kids && (
                  <>
                    Niños{" "}
                    <span className="font-heading text-blood">
                      {product.prices.kids}
                    </span>
                  </>
                )}
              </p>
            </div>
          )}

        <a
          href={product.url}
          className="mt-auto inline-flex items-center justify-center border border-blood bg-blood px-6 py-4 font-heading uppercase tracking-[0.2em] text-sm transition-all duration-300 hover:bg-red-700"
        >
          {product.buttonText}
        </a>

      </div>

    </article>
  );
}