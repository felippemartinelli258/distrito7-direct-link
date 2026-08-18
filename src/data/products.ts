export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  available: boolean;
  featured?: boolean;
};

/**
 * EDITE SEUS PRODUTOS AQUI.
 * Basta copiar um objeto abaixo, mudar o id e os dados.
 * As imagens ficam em public/products/ (webp, png ou jpg).
 */
export const products: Product[] = [
  {
    id: 1,
    name: "Canva Pro",
    category: "Assinaturas Premium",
    description: "Ferramentas completas de design com recursos profissionais.",
    price: "R$ 19,90",
    image: "/products/canva.jpg",
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: "CapCut Pro",
    category: "Assinaturas Premium",
    description: "Edição de vídeo avançada com efeitos e exportação sem marca.",
    price: "R$ 19,90",
    image: "/products/capcut.jpg",
    available: true,
  },
  {
    id: 3,
    name: "YouTube Premium",
    category: "Assinaturas Premium",
    description: "Vídeos sem anúncios, reprodução em segundo plano e downloads.",
    price: "R$ 19,90",
    image: "/products/youtube.jpg",
    available: true,
  },
  {
    id: 4,
    name: "Spotify Premium",
    category: "Assinaturas Premium",
    description: "Experiência premium para músicas e playlists.",
    price: "R$ 19,90",
    image: "/products/spotify.jpg",
    available: true,
    featured: true,
  },
  {
    id: 5,
    name: "IPTV",
    category: "Entretenimento",
    description: "Canais, filmes e séries com transmissão estável.",
    price: "R$ 29,90",
    image: "/products/iptv.jpg",
    available: true,
  },
];

export const categories = [
  "Todos",
  "Assinaturas Premium",
  "Entretenimento",
  "Serviços",
  "Outros",
];
