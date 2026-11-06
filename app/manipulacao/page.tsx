import type { Metadata } from "next";
import { ImagePlus, MessageCircle, PackageCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { SegmentoCard } from "@/components/SegmentoCard";
import { segmentos, formulasExemplo } from "@/lib/manipulados";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manipulação de Medicamentos | Farmácia do Povo",
  description:
    "Farmácia de manipulação em Nova Esperança, PR: fórmulas personalizadas, matéria-prima de qualidade, preços justos e atendimento humano. Envie sua receita pelo WhatsApp e receba seu orçamento.",
};

const passos = [
  {
    icone: ImagePlus,
    titulo: "Envie sua receita",
    texto: "Tire uma foto ou envie o PDF da receita médica.",
  },
  {
    icone: MessageCircle,
    titulo: "Fale no WhatsApp",
    texto: "Nossa equipe confere a fórmula e envia o orçamento.",
  },
  {
    icone: PackageCheck,
    titulo: "Retire ou receba",
    texto: "Combine a retirada na farmácia ou a entrega na região.",
  },
];

const mensagemReceita = encodeURIComponent(
  "Olá! Gostaria de enviar uma receita para manipulação.",
);

export default function ManipulacaoPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        <div className="rounded-[4px] bg-primary-light px-5 py-4 text-sm text-primary-dark">
          Fórmulas e preços ilustrativos para apresentação interna — serão
          substituídos pelo catálogo real da farmácia.
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Manipulação
        </p>
        <h1 className="font-display mt-2 max-w-2xl text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
          Fórmulas manipuladas sob medida para você
        </h1>
        <p className="mt-4 max-w-2xl text-base text-ink-soft sm:text-lg">
          Medicamentos, suplementos e cosméticos personalizados conforme a sua
          receita e necessidade — com matéria-prima de qualidade e o mesmo
          atendimento humano de sempre da Farmácia do Povo.
        </p>
        <div className="mt-7">
          <Button href={`${site.whatsapp}?text=${mensagemReceita}`} external>
            Manipule sua receita
          </Button>
        </div>
      </section>

      {/* Guia 3 passos */}
      <section className="bg-muted py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-ink">
            Como funciona
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {passos.map((passo, i) => (
              <div key={passo.titulo} className="relative border border-border bg-paper p-6">
                <span className="font-display absolute right-4 top-4 text-2xl font-extrabold text-border">
                  {i + 1}
                </span>
                <passo.icone className="h-7 w-7 text-primary" strokeWidth={1.75} />
                <h3 className="font-display mt-3 text-base font-semibold text-ink">
                  {passo.titulo}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">{passo.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Linhas de manipulados
        </p>
        <h2 className="font-display mt-2 text-3xl font-bold text-ink">
          Fórmulas por segmento
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Alguns exemplos do que preparamos sob encomenda. Sua fórmula pode
          ser ajustada conforme a prescrição médica e a sua necessidade.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segmentos.map((segmento) => (
            <SegmentoCard
              key={segmento.id}
              segmento={segmento}
              formulas={formulasExemplo.filter((f) => f.segmento === segmento.id)}
            />
          ))}
        </div>
      </section>

      {/* Texto institucional / SEO */}
      <section className="bg-muted py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-ink">
            O que é a manipulação de medicamentos?
          </h2>
          <p className="mt-4 text-ink-soft">
            A manipulação de medicamentos é o processo de preparar fórmulas
            personalizadas, conforme a prescrição médica e as necessidades de
            cada pessoa. Diferente dos medicamentos industrializados, vendidos
            sempre na mesma dosagem e apresentação, a fórmula manipulada é
            pensada para o paciente: a dosagem certa, os ativos certos, e a
            forma mais prática de uso — cápsula, creme, sachê ou loção.
          </p>

          <h3 className="font-display mt-8 text-xl font-bold text-ink">
            Vantagens de manipular na Farmácia do Povo
          </h3>
          <ul className="mt-4 space-y-3 text-ink-soft">
            <li>
              <strong className="text-ink">Preço justo:</strong> você paga pela
              fórmula que precisa, sem desperdício com apresentações
              industrializadas que não se encaixam no seu tratamento.
            </li>
            <li>
              <strong className="text-ink">Matéria-prima de qualidade:</strong>{" "}
              trabalhamos com fornecedores confiáveis e controle rigoroso em
              todas as etapas da manipulação.
            </li>
            <li>
              <strong className="text-ink">Variedade de formas:</strong>{" "}
              cápsulas, sachês, cremes, loções e outras apresentações,
              conforme a sua preferência e rotina.
            </li>
            <li>
              <strong className="text-ink">Atendimento personalizado:</strong>{" "}
              nossa equipe farmacêutica acompanha cada etapa, do envio da
              receita até a entrega da fórmula pronta.
            </li>
          </ul>

          <h3 className="font-display mt-8 text-xl font-bold text-ink">
            Qualidade e segurança
          </h3>
          <p className="mt-4 text-ink-soft">
            Seguimos as Boas Práticas de Manipulação em Farmácias exigidas
            pela ANVISA, com controle de qualidade da matéria-prima até a
            entrega da fórmula pronta — para que você receba um medicamento
            seguro, eficaz e preparado especialmente para você.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Tem uma receita para manipular?
            </h2>
            <p className="mt-2 text-sm text-white/85">
              Envie pelo WhatsApp e receba seu orçamento sem compromisso.
            </p>
          </div>
          <Button href={`${site.whatsapp}?text=${mensagemReceita}`} variant="light" external className="shrink-0">
            Manipule sua receita
          </Button>
        </div>
      </section>
    </div>
  );
}
