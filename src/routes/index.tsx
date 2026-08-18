import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Quality } from "@/components/Quality";
import { Identity } from "@/components/Identity";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const TITLE = "DISTRITO7.SHOP | Catálogo Digital";
const DESCRIPTION =
  "Acessos e soluções digitais. Discrição, segurança e exclusividade, com atendimento direto pelo WhatsApp.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Quality />
        <Identity />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
