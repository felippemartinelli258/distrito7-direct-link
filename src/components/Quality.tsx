const items = [
  {
    n: "01",
    title: "Atendimento direto",
    text: "Fale diretamente conosco pelo WhatsApp para dúvidas sobre produtos e pedidos.",
  },
  {
    n: "02",
    title: "Processo simples",
    text: "Escolha o que precisa, clique em comprar e continue diretamente com nosso atendimento.",
  },
  {
    n: "03",
    title: "Entrega digital",
    text: "Processo pensado para produtos digitais, com atendimento e orientações de forma prática.",
  },
];

export function Quality() {
  return (
    <section id="qualidade" className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[26rem] leading-none text-foreground/[0.025]"
        aria-hidden="true"
      >
        07
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <span className="eyebrow">Padrão Distrito 07</span>
        <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          Praticidade em cada pedido.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Uma experiência simples do primeiro clique até o atendimento.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.n} className="card glass p-7">
              <span className="font-display text-4xl text-primary/80">{i.n}</span>
              <h3 className="mt-5 font-display text-xl tracking-wide text-foreground">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
