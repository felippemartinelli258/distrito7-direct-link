import type { Product } from "@/data/products";

export const WHATSAPP_NUMBER = "5527997950627";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function productLink(product: Product) {
  return whatsappLink(
    `Olá! Tenho interesse no produto ${product.name}. Vi no site pelo valor ${product.price} e gostaria de fazer meu pedido.`,
  );
}

export const ORDER_LINK = whatsappLink(
  "Olá! Vim pelo site DISTRITO7.SHOP e gostaria de fazer um pedido.",
);

export const DOUBT_LINK = whatsappLink(
  "Olá! Vim pelo site DISTRITO7.SHOP e gostaria de tirar uma dúvida.",
);

export const FLOAT_LINK = whatsappLink("Olá! Vim pelo site DISTRITO7.SHOP.");
