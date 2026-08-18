import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/products";
import { productLink } from "@/lib/whatsapp";

const PLACEHOLDER = "/products/placeholder.svg";

export function ProductCard({ product }: { product: Product }) {
  const [src, setSrc] = useState(product.image || PLACEHOLDER);
  const imgRef = useRef<HTMLImageElement>(null);

  // A imagem pode falhar antes da hidratacao: checamos apos montar.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setSrc(PLACEHOLDER);
  }, [src]);

  return (
    <article className="card group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          ref={imgRef}
          src={src}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1280}
          onError={() => setSrc(PLACEHOLDER)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {product.featured && <span className="tag absolute left-3 top-3">Destaque</span>}
        {!product.available && (
          <span className="absolute right-3 top-3 rounded-full border border-border bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Indisponível
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] uppercase tracking-[0.22em] text-primary">
          {product.category}
        </span>
        <h3 className="mt-2 font-display text-xl tracking-wide text-foreground">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="font-display text-lg text-foreground">{product.price}</span>
          <a
            href={productLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!product.available}
            className={
              product.available
                ? "btn-primary text-xs"
                : "btn-ghost pointer-events-none text-xs opacity-50"
            }
          >
            Comprar
          </a>
        </div>
      </div>
    </article>
  );
}
