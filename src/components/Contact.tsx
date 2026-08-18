import { DOUBT_LINK } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contato" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="card glass relative overflow-hidden p-8 sm:p-12">
          <div className="glow-red absolute -right-20 -top-20 h-80 w-80" aria-hidden="true" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="eyebrow">Contato</span>
              <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
                Vamos falar sobre o seu pedido.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Dúvidas sobre produtos, valores ou disponibilidade? Fale diretamente conosco pelo
                WhatsApp.
              </p>
              <a
                href={DOUBT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full sm:w-auto"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <div className="relative hidden aspect-square items-center justify-center md:flex">
              <span className="absolute inset-0 rounded-full border border-border" />
              <span className="absolute inset-8 rounded-full border border-primary/30" />
              <span className="absolute inset-16 rounded-full border border-primary/50" />
              <span className="absolute inset-24 rounded-full border border-border" />
              <span className="font-display text-7xl text-foreground text-glow">07</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
