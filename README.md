# Distrito 7 Digital

Crie um site completo, moderno, responsivo e profissional para minha loja digital DISTRITO7.

Use como principal referência visual a logo/imagem que estou enviando junto com este prompt.

A identidade possui:

preto predominante

vermelho intenso

branco

metal/grafite escuro

iluminação vermelha

número 07

estética tecnológica, underground e premium

A marca principal do site é:

DISTRITO7.SHOP

E a identidade/assinatura visual contém:

BARONE
02 DA NET
MENTE • MÉTODO • RESULTADO

Não utilizar o nome MafEl em nenhuma parte do projeto.

OBJETIVO

Quero um catálogo digital simples.

Fluxo:

Cliente acessa → encontra o produto → clica em Comprar → vai diretamente para meu WhatsApp.

WhatsApp:

+55 27 99795-0627

Número para os links:

5527997950627

Não haverá pagamento dentro do site.

TECNOLOGIA

Criar em:

React

Vite

TypeScript

Quero ter acesso total ao código depois.

NÃO usar:

Supabase

banco de dados

backend

login

cadastro

CMS

painel administrativo

API externa

checkout

O site precisa ser totalmente estático.

Deixar pronto para:

GitHub

Cloudflare Pages

Netlify

IDENTIDADE VISUAL

Não quero um site genérico.

Use a logo fornecida como referência para criar toda a linguagem visual.

Paleta:

#050505 preto

#0D0D0D preto secundário

#E50914 vermelho

#FF1B24 vermelho de destaque

#FFFFFF branco

#8B8B8B cinza

grafite/metálico em elementos secundários

Visual:

fundo preto profundo

vermelho neon controlado

reflexos metálicos

linhas tecnológicas

elementos discretos relacionados ao número 07

formas circulares inspiradas no contorno da logo

grids digitais

brilho vermelho

cards premium

glassmorphism escuro muito sutil

A estética deve transmitir:

tecnologia + exclusividade + força + produto digital

Evite excesso de elementos.

A navegação e os produtos precisam continuar sendo o foco.

LOGO

Use a imagem que estou enviando como logo/referência oficial.

Criar estrutura para posteriormente eu substituir facilmente o arquivo em:

public/logo.png

Não redesenhe a logo no código.

HEADER

Header fixo, preto e translúcido.

Esquerda:

Logo / identidade DISTRITO7.

Centro:

Início

Catálogo

Qualidade

Contato

Direita:

Botão:

FAZER PEDIDO

Ao clicar:

abrir WhatsApp.

No celular usar menu hambúrguer.

HERO

Quero uma abertura visualmente forte.

Adicionar pequeno texto:

DISTRITO 07 • CATÁLOGO DIGITAL

Título:

Tudo que você procura.
Direto ao ponto.

Destacar a segunda linha em vermelho.

Descrição:

Produtos digitais, assinaturas e serviços com atendimento direto, processo simples e suporte pelo WhatsApp.

Botões:

VER CATÁLOGO

FALAR NO WHATSAPP

Adicionar indicadores pequenos:

100% DIGITAL

ATENDIMENTO DIRETO

PROCESSO RÁPIDO

No fundo, criar uma composição abstrata preto/vermelho inspirada na identidade enviada:

círculo vermelho

número 07 muito sutil

grids

luz vermelha

elementos digitais

textura tecnológica

Não colocar pessoas aleatórias.

CATÁLOGO

Seção:

CATÁLOGO

Título:

Escolha o que você precisa.

Descrição:

Encontre o produto, confira as informações e fale diretamente conosco para fazer seu pedido.

Criar filtros:

Todos

Assinaturas Premium

Entretenimento

Serviços

Outros

Adicionar busca:

Buscar produto...

CARDS

Desktop:

3 produtos por linha.

Tablet:

2 por linha.

Celular:

1 por linha.

Cada card terá:

imagem

categoria

nome

descrição

preço

destaque opcional

botão Comprar

Visual:

fundo preto/grafite

borda fina

cantos arredondados

imagem grande

vermelho apenas nos detalhes

hover com leve iluminação vermelha

acabamento premium

Exemplo:

Spotify Premium

ASSINATURAS PREMIUM

Experiência premium para músicas e playlists.

R$ 19,90

COMPRAR

WHATSAPP

Todos os botões Comprar devem ir diretamente ao WhatsApp.

Não abrir:

modal

formulário

checkout

Usar:

https://wa.me/5527997950627

Gerar mensagem automaticamente conforme o produto.

Exemplo:

const message = `Olá! Tenho interesse no produto ${product.name}. Vi no site pelo valor ${product.price} e gostaria de fazer meu pedido.`;

const url = `https://wa.me/5527997950627?text=${encodeURIComponent(message)}`;


MUITO IMPORTANTE: PRODUTOS EDITÁVEIS

Eu mesmo quero modificar posteriormente:

produtos

preços

imagens

descrição

categoria

Portanto, coloque TODOS os produtos somente em:

src/data/products.ts

Nunca escrever informações dos produtos diretamente nos componentes.

Estrutura obrigatória:

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


Exemplo:

{
  id: 1,
  name: "Spotify Premium",
  category: "Assinaturas Premium",
  description: "Experiência premium para músicas e playlists.",
  price: "R$ 19,90",
  image: "/products/spotify.webp",
  available: true,
  featured: true
}


O catálogo deve ser criado automaticamente lendo esse array.

Assim quero conseguir criar novos produtos apenas copiando um objeto.

IMAGENS

Todas as imagens de produtos devem ficar em:

public/products/

Exemplo:

public/products/spotify.webp

Depois:

image: "/products/spotify.webp"


Aceitar:

WEBP

PNG

JPG

Usar:

object-fit: cover

lazy loading

proporção padronizada

Se a imagem estiver ausente, mostrar:

public/products/placeholder.svg

O placeholder deve seguir a identidade preto/vermelho/07.

PRODUTOS DE DEMONSTRAÇÃO

Adicionar inicialmente apenas para demonstrar a estrutura:

Canva Pro

Categoria: Assinaturas Premium

CapCut Pro

Categoria: Assinaturas Premium

YouTube Premium

Categoria: Assinaturas Premium

Spotify Premium

Categoria: Assinaturas Premium

IPTV

Categoria: Entretenimento

Os preços e imagens serão alterados por mim posteriormente.

SEÇÃO QUALIDADE

Adicionar:

PADRÃO DISTRITO 07

Título:

Praticidade em cada pedido.

Descrição:

Uma experiência simples do primeiro clique até o atendimento.

Três cards:

01

Atendimento direto

Fale diretamente conosco pelo WhatsApp para dúvidas sobre produtos e pedidos.

02

Processo simples

Escolha o que precisa, clique em comprar e continue diretamente com nosso atendimento.

03

Entrega digital

Processo pensado para produtos digitais, com atendimento e orientações de forma prática.

Visual:

cards escuros

vidro fosco discreto

borda grafite

número grande 01, 02 e 03

detalhes vermelhos

Criar ao fundo um 07 gigante quase invisível.

BLOCO DE IDENTIDADE

Adicionar uma pequena seção entre Qualidade e Contato.

Texto pequeno:

DISTRITO 07

Título:

MENTE • MÉTODO • RESULTADO

Subtexto:

Direto ao ponto. Sem complicação.

Usar composição minimalista com:

número 07

círculo

linhas vermelhas

preto

grafite

Essa área deve reforçar a identidade visual sem parecer propaganda exagerada.

CONTATO

Criar bloco grande semelhante às referências que enviei.

Texto pequeno:

CONTATO

Título:

Vamos falar sobre o seu pedido.

Descrição:

Dúvidas sobre produtos, valores ou disponibilidade? Fale diretamente conosco pelo WhatsApp.

Botão:

CHAMAR NO WHATSAPP

Direcionar para:

https://wa.me/5527997950627?text=Olá! Vim pelo site DISTRITO7.SHOP e gostaria de tirar uma dúvida.

No lado direito criar elemento visual abstrato com:

07

dentro de círculos vermelhos tecnológicos.

BOTÃO FLUTUANTE

Adicionar botão flutuante de WhatsApp no canto inferior direito.

Mensagem:

Olá! Vim pelo site DISTRITO7.SHOP.

FOOTER

Usar logo.

Adicionar:

DISTRITO7.SHOP

Links:

Início

Catálogo

Qualidade

Contato

Texto pequeno:

MENTE • MÉTODO • RESULTADO

Copyright:

© 2026 DISTRITO7.SHOP — Todos os direitos reservados.

MOBILE

Prioridade total para celular.

Garantir:

excelente legibilidade

carregamento rápido

1 produto por linha

imagens grandes

botões largos

filtros horizontais

busca responsiva

header compacto

menu hambúrguer

nenhuma rolagem horizontal acidental

ANIMAÇÕES

Somente efeitos leves:

fade

hover

deslocamento de 2–4px

glow vermelho sutil

transições de 200–300ms

Não usar animações pesadas.

SEO

Configurar:

Title:

DISTRITO7.SHOP | Catálogo Digital

Description:

Produtos digitais, assinaturas e serviços com atendimento direto pelo WhatsApp.

Configurar também:

Open Graph

favicon

viewport

HTML semântico

ESTRUTURA

Organizar assim:

src/
  components/
    Header.tsx
    Hero.tsx
    Catalog.tsx
    ProductCard.tsx
    Quality.tsx
    Identity.tsx
    Contact.tsx
    Footer.tsx
    WhatsAppFloat.tsx

  data/
    products.ts

  App.tsx
  main.tsx
  styles.css

public/
  logo.png

  products/
    placeholder.svg


REGRA FINAL

Não transforme isso em um sistema complexo.

Quero:

SITE ESTÁTICO + CATÁLOGO + WHATSAPP

Nada além do necessário.

Preciso conseguir abrir o projeto posteriormente no VS Code e editar sozinho.

Centralize os produtos no products.ts.

Centralize as imagens em public/products/.

Não espalhe dados dos produtos pelo código.

Entregue a primeira versão completamente funcional, responsiva e visualmente bem acabada, mantendo fielmente o conceito visual vermelho/preto/07 da identidade que estou enviando.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c46abd47-e0ba-4c79-840c-5d4a80c030eb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
