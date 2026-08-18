import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ORDER_LINK } from "@/lib/whatsapp";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Qualidade", href: "#qualidade" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Logo DISTRITO7"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-lg tracking-[0.18em] text-foreground">
            DISTRITO<span className="text-primary">7</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            Fazer pedido
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-link py-3 text-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href={ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 w-full"
            >
              Fazer pedido
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
