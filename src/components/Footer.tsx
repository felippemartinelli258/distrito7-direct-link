const links = [
  { label: "Início", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Qualidade", href: "#qualidade" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <div className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Logo DISTRITO7.SHOP"
            loading="lazy"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-lg tracking-[0.18em] text-foreground">
            DISTRITO<span className="text-primary">7</span>.SHOP
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Mente • Método • Resultado
        </p>
        <p className="text-xs text-muted-foreground/70">
          © 2026 DISTRITO7.SHOP — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
