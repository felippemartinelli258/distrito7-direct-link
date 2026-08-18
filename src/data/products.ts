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
 * =============================================================
 *  EDITE SEUS PRODUTOS AQUI (nome, categoria, descricao, preco,
 *  imagem, disponibilidade e destaque).
 *
 *  IMAGENS: coloque os arquivos em  public/products/
 *  Ex.: public/products/atestado-sem-qrcode.webp
 *       image: "/products/atestado-sem-qrcode.webp"
 *  Formatos aceitos: .webp .png .jpg
 *  Se a imagem nao existir, o site mostra automaticamente
 *  public/products/placeholder.svg
 *
 *  Para criar um produto novo: copie um objeto abaixo e mude o id.
 * =============================================================
 */
export const products: Product[] = [
  // ---------- DOCUMENTOS ----------
  {
    id: 1,
    name: "RG com App GOV + QR Code",
    category: "Documentos",
    description: "Modelo digital com aplicativo GOV e QR Code funcional.",
    price: "R$ 274,90",
    image: "/products/rg-app-gov.jpeg",
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: "CNH com App GOV + QR Code",
    category: "Documentos",
    description: "Versão digital com aplicativo GOV e QR Code funcional.",
    price: "R$ 274,90",
    image: "/products/cnh-app-gov.jpeg",
    available: true,
    featured: true,
  },
  {
    id: 3,
    name: "RG Qualquer Modelo",
    category: "Documentos",
    description: "Modelo de qualquer estado, feito conforme sua necessidade.",
    price: "R$ 99,90",
    image: "/products/rg-modelo.jpeg",
    available: true,
  },
  {
    id: 4,
    name: "CNH Qualquer Modelo",
    category: "Documentos",
    description: "Modelo livre, ajustado de acordo com o pedido.",
    price: "R$ 99,90",
    image: "/products/cnh-modelo.jpeg",
    available: true,
  },
  {
    id: 5,
    name: "Certidão de Nascimento ou Óbito",
    category: "Documentos",
    description: "Modelo completo em alta definição.",
    price: "R$ 129,90",
    image: "/products/certidao.jpeg",
    available: true,
  },
  {
    id: 6,
    name: "Certificado de Reservista",
    category: "Documentos",
    description: "Modelo padrão com acabamento fiel.",
    price: "R$ 64,90",
    image: "/products/reservista.jpeg",
    available: true,
  },
  {
    id: 7,
    name: "Comprovante de Endereço",
    category: "Documentos",
    description: "Diversas operadoras e concessionárias disponíveis.",
    price: "R$ 64,90",
    image: "/products/comprovante-endereco.jpeg",
    available: true,
  },
  {
    id: 8,
    name: "CRAF (QR Code)",
    category: "Documentos",
    description: "Modelo com QR Code funcional.",
    price: "R$ 194,90",
    image: "/products/craf.jpeg",
    available: true,
  },
  {
    id: 9,
    name: "Porte Federal de Arma",
    category: "Documentos",
    description: "Modelo completo em alta definição.",
    price: "R$ 194,90",
    image: "/products/porte-federal.jpeg",
    available: true,
  },

  // ---------- VEICULAR ----------
  {
    id: 10,
    name: "CRLV (QR Code)",
    category: "Veicular",
    description: "Documento do veículo com QR Code funcional.",
    price: "R$ 164,90",
    image: "/products/crlv.jpeg",
    available: true,
    featured: true,
  },
  {
    id: 11,
    name: "ATPV-e (QR Code)",
    category: "Veicular",
    description: "Autorização de transferência digital com QR Code.",
    price: "R$ 164,90",
    image: "/products/atpve.jpeg",
    available: true,
  },
  {
    id: 12,
    name: "Número de Segurança do CRV",
    category: "Veicular",
    description: "Consulta e emissão conforme o veículo informado.",
    price: "R$ 84,90",
    image: "/products/crv-seguranca.jpeg",
    available: true,
  },

  // ---------- SAÚDE ----------
  {
    id: 13,
    name: "Atestado (Sem QR Code)",
    category: "Saúde",
    description: "Diversos modelos disponíveis, entrega rápida.",
    price: "R$ 74,90",
    image: "/products/atestado-sem-qrcode.jpeg",
    available: true,
  },
  {
    id: 14,
    name: "Atestado (QR Code)",
    category: "Saúde",
    description: "Modelo com QR Code funcional e validação.",
    price: "R$ 114,90",
    image: "/products/atestado-qrcode.jpeg",
    available: true,
    featured: true,
  },
  {
    id: 15,
    name: "Receita UNIMED (QR Code)",
    category: "Saúde",
    description: "Qualquer cidade, com QR Code funcional.",
    price: "R$ 114,90",
    image: "/products/receita-unimed.jpeg",
    available: true,
  },
  {
    id: 16,
    name: "Teste de Gravidez RJ",
    category: "Saúde",
    description: "Modelo laboratorial em alta definição.",
    price: "R$ 144,90",
    image: "/products/teste-gravidez.jpeg",
    available: true,
  },
  {
    id: 17,
    name: "Exame Toxicológico",
    category: "Saúde",
    description: "Modelo completo com dados personalizados.",
    price: "R$ 99,90",
    image: "/products/exame-toxicologico.jpeg",
    available: true,
  },

  // ---------- CERTIFICADOS E DIPLOMAS ----------
  {
    id: 18,
    name: "Diploma UNINTER (QR Code)",
    category: "Certificados e Diplomas",
    description: "Qualquer curso, com QR Code funcional.",
    price: "R$ 369,90",
    image: "/products/diploma-uninter.jpeg",
    available: true,
    featured: true,
  },
  {
    id: 19,
    name: "Diplomas",
    category: "Certificados e Diplomas",
    description: "Diversas instituições e cursos disponíveis.",
    price: "R$ 164,90",
    image: "/products/diplomas.jpeg",
    available: true,
  },
  {
    id: 20,
    name: "Certificado Estácio",
    category: "Certificados e Diplomas",
    description: "Qualquer curso, acabamento fiel ao original.",
    price: "R$ 164,90",
    image: "/products/certificado-estacio.jpeg",
    available: true,
  },
  {
    id: 21,
    name: "Certificado SEST SENAT",
    category: "Certificados e Diplomas",
    description: "Modelo completo em alta definição.",
    price: "R$ 164,90",
    image: "/products/sest-senat.jpeg",
    available: true,
  },
  {
    id: 22,
    name: "Certificado de Conclusão Ensino Médio",
    category: "Certificados e Diplomas",
    description: "Modelo completo com dados personalizados.",
    price: "R$ 194,90",
    image: "/products/ensino-medio.jpeg",
    available: true,
  },
  {
    id: 23,
    name: "Histórico Escolar",
    category: "Certificados e Diplomas",
    description: "Qualquer estado, modelo detalhado.",
    price: "R$ 194,90",
    image: "/products/historico-escolar.jpeg",
    available: true,
  },
  {
    id: 24,
    name: "Carteira de Estudante + App e QR Code",
    category: "Certificados e Diplomas",
    description: "Carteira digital com aplicativo e QR Code funcional.",
    price: "R$ 114,90",
    image: "/products/carteira-estudante.jpeg",
    available: true,
  },

  // ---------- FINANCEIRO ----------
  {
    id: 25,
    name: "Extrato Bancário",
    category: "Financeiro",
    description: "Diversos bancos, período e valores personalizados.",
    price: "R$ 84,90",
    image: "/products/extrato-bancario.jpeg",
    available: true,
  },
  {
    id: 26,
    name: "Nota Fiscal",
    category: "Financeiro",
    description: "Modelo completo, ajustado conforme o pedido.",
    price: "R$ 84,90",
    image: "/products/nota-fiscal.jpeg",
    available: true,
  },
  {
    id: 27,
    name: "Comprovante Pix Nubank",
    category: "Financeiro",
    description: "Comprovante digital com dados personalizados.",
    price: "R$ 49,90",
    image: "/products/pix-nubank.jpeg",
    available: true,
  },
  {
    id: 28,
    name: "Holerite / Contra Cheque",
    category: "Financeiro",
    description: "Modelo empresarial com valores personalizados.",
    price: "R$ 84,90",
    image: "/products/holerite.jpeg",
    available: true,
  },
];

export const categories = [
  "Todos",
  "Documentos",
  "Veicular",
  "Saúde",
  "Certificados e Diplomas",
  "Financeiro",
  "Outros",
];
