import { ORDER_LINK } from "@/lib/whatsapp";

const badges = ["100% Digital", "Discrição total", "Atendimento direto"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <div className="glow-red absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-[-6rem] top-10 hidden select-none font-display text-[22rem] leading-none text-foreground/[0.03] md:block"
        aria-hidden="true"
      >
        07
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="eyebrow">Distrito 07 • Catálogo digital</span>
        <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Tudo que você procura.
          <br />
          <span className="text-primary text-glow">Direto ao ponto.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Acessos e soluções digitais.
          <br />
          Discrição, segurança e exclusividade.
        </p>


        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#catalogo" className="btn-primary w-full sm:w-auto">
            Ver catálogo
          </a>
          <a
            href={ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            Falar no WhatsApp
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
