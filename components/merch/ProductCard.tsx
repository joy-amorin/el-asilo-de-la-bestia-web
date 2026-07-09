import Image from "next/image";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
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

        <p className="font-heading text-blood text-lg mb-8">
          {product.price}
        </p>

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