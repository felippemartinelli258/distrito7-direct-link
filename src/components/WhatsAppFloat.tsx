import { MessageCircle } from "lucide-react";
import { FLOAT_LINK } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={FLOAT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_28px_-6px_var(--primary)] transition-transform duration-200 hover:-translate-y-1"
    >
      <MessageCircle size={24} />
    </a>
  );
}
