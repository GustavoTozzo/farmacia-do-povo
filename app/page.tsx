import Link from "next/link";
import {
  Activity,
  Clock,
  Droplet,
  FlaskConical,
  MapPin,
  Navigation,
  Percent,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Truck,
  Users,
} from "lucide-react";
import { BrandPanel } from "@/components/BrandPanel";
import { Button } from "@/components/Button";
import { ProdutoCard } from "@/components/ProdutoCard";
import { site } from "@/lib/site";
import { produtos } from "@/lib/produtos";

const atendimentos = [
  {
    icone: Stethoscope,
    titulo: "Atendimento farmacêutico",
    texto: "Orientação profissional sobre uso correto de medicamentos.",
  },
  {
    icone: Activity,
    titulo: "Aferição de pressão",
    texto: "Medição rápida e gratuita, sem necessidade de agendamento.",
  },
  {
    icone: Droplet,
    titulo: "Teste de glicemia",
    texto: "Medição rápida mediante taxa simbólica, sem necessidade de agendamento.",
  },
  {
    icone: Syringe,
    titulo: "Aplicação de injetáveis",
    texto: "Mediante apresentação de receita médica, com hora marcada ou por ordem de chegada.",
  },
  {
    icone: Truck,
    titulo: "Entrega na região",
    texto: "Levamos seu pedido até você em Nova Esperança e arredores.",
  },
  {
    icone: Percent,
    titulo: "Descontos e promoções",
    texto: "Ofertas semanais em genéricos e produtos de linha.",
  },
];

const stats = [
  { numero: "20+", legenda: "anos de história em Nova Esperança" },
  { numero: "6", legenda: "dias por semana de atendimento" },
  { numero: "100%", legenda: "atendimento humano, sem robôs" },
];

const destaques = produtos.slice(0, 8);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-block rounded-[4px] bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              Farmácia do Povo em Nova Esperança, PR
            </span>
            <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              Desde {site.desde} cuidando da saúde da nossa gente
            </h1>
            <p className="mt-4 max-w-lg text-base text-ink-soft sm:text-lg">
              {site.descricaoCurta} Mais de 20 anos de confiança da comunidade,
              com atendimento humano e produtos de qualidade todos os dias.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/produtos">Ver catálogo de produtos</Button>
              <Button href={site.endereco.mapsHref} variant="outline" external>
                <Navigation className="h-4 w-4" />
                Como chegar
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-soft">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>20+ anos de história</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-primary" />
                <span>Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-primary" />
                <span>Entrega na região</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-6 lg:justify-end lg:py-0">
            <BrandPanel />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Sobre a farmácia
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-ink">
              Uma farmácia central, feita por gente que conhece seu nome
            </h2>
            <p className="mt-4 text-ink-soft">
              A Farmácia do Povo nasceu em {site.desde} em Nova Esperança, no
              Paraná, com um propósito simples: oferecer um atendimento próximo,
              honesto e acessível para a nossa comunidade. Ao longo desses mais
              de 20 anos, acompanhamos famílias inteiras, sempre com a mesma
              atenção do primeiro dia.
            </p>
            <p className="mt-4 text-ink-soft">
              Hoje seguimos com o mesmo compromisso: preços justos, produtos de
              qualidade e uma equipe pronta para ouvir e orientar — não apenas
              vender.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            {stats.map((stat) => (
              <div key={stat.legenda} className="flex items-center gap-5 border-b border-border pb-4 last:border-0 last:pb-0">
                <p className="font-display w-20 shrink-0 text-4xl font-extrabold text-primary">
                  {stat.numero}
                </p>
                <p className="text-sm text-ink-soft">{stat.legenda}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimentos */}
      <section id="atendimentos" className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Atendimentos
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-ink">
              Muito mais do que uma farmácia
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {atendimentos.map((item) => (
              <div
                key={item.titulo}
                className="border-l-4 border-primary bg-paper p-6"
              >
                <item.icone className="h-6 w-6 text-primary" strokeWidth={1.75} />
                <h3 className="font-display mt-4 text-base font-semibold text-ink">
                  {item.titulo}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Catálogo
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-ink">
              Alguns dos nossos produtos
            </h2>
          </div>
          <Link
            href="/produtos"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Ver catálogo completo →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {destaques.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

      {/* Manipulação */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col items-start gap-5 border border-border bg-muted p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-primary-light text-primary">
              <FlaskConical className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-ink">
                Precisa de uma fórmula manipulada?
              </h2>
              <p className="mt-1 text-sm text-ink-soft">
                Envie sua receita pelo WhatsApp e receba um orçamento sem compromisso.
              </p>
            </div>
          </div>
          <Button href="/manipulacao" className="shrink-0">
            Conhecer manipulação
          </Button>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Localização
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-ink">
            Venha nos visitar
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col gap-5 border border-border bg-paper p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-ink">Endereço</p>
                  <p className="text-sm text-ink-soft">
                    {site.endereco.logradouro} — {site.endereco.bairro}
                    <br />
                    {site.endereco.cidade}/{site.endereco.estado} —{" "}
                    {site.endereco.cep}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-ink">Horário de funcionamento</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-ink-soft">
                    {site.horarios.map((h) => (
                      <li key={h.dia}>
                        {h.dia}: {h.horario}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-ink">Telefone</p>
                  <a href={site.telefoneHref} className="text-sm text-ink-soft hover:text-primary">
                    {site.telefone}
                  </a>
                </div>
              </div>

              <Button href={site.endereco.mapsHref} external className="mt-2 self-start">
                <Navigation className="h-4 w-4" />
                Abrir no Google Maps
              </Button>
            </div>

            <div className="overflow-hidden border border-border bg-paper">
              <iframe
                title="Mapa — Farmácia do Povo, Nova Esperança PR"
                src={site.endereco.mapsEmbedSrc}
                className="h-80 w-full grayscale-[15%] lg:h-full lg:min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Precisa de algo? Fale com a gente agora.
            </h2>
            <p className="mt-2 text-sm text-white/85">
              Atendimento rápido pelo WhatsApp ou telefone, todos os dias úteis.
            </p>
          </div>
          <Button href={site.whatsapp} variant="light" external className="shrink-0">
            Fale no WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}
