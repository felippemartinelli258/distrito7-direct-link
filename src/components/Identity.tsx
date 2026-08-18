export function Identity() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 sm:py-24">
      <div className="glow-red absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <div className="relative grid h-28 w-28 place-items-center">
          <span className="absolute inset-0 rounded-full border border-primary/40" />
          <span className="absolute inset-3 rounded-full border border-border" />
          <span className="font-display text-4xl text-foreground">07</span>
        </div>
        <span className="eyebrow mt-8">Distrito 07</span>
        <h2 className="mt-5 font-display text-2xl tracking-[0.14em] text-foreground sm:text-3xl">
          MENTE <span className="text-primary">•</span> MÉTODO <span className="text-primary">•</span>{" "}
          RESULTADO
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">Direto ao ponto. Sem complicação.</p>
        <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-primary/60" />
          Barone • 02 da Net
          <span className="h-px w-12 bg-primary/60" />
        </div>
      </div>
    </section>
  );
}
