import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { InstagramIcon } from "@/components/InstagramIcon";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contato" className="bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <BrandLockup className="border-white bg-primary" />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              {site.descricaoCurta}
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-accent"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.instagramHandle}
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><Link href="/#sobre" className="hover:text-white">Sobre</Link></li>
              <li><Link href="/#atendimentos" className="hover:text-white">Atendimentos</Link></li>
              <li><Link href="/produtos" className="hover:text-white">Produtos</Link></li>
              <li><Link href="/#localizacao" className="hover:text-white">Localização</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={site.telefoneHref} className="hover:text-white">{site.telefone}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {site.endereco.logradouro} — {site.endereco.bairro},{" "}
                  {site.endereco.cidade}/{site.endereco.estado}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
              Horário
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {site.horarios.map((h) => (
                <li key={h.dia} className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {h.dia}: {h.horario}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Farmácia do Povo — Nova Esperança, PR. Todos os
            direitos reservados.
          </p>
          <p>
            Protótipo de apresentação. Catálogo, preços e imagens são ilustrativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
