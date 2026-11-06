export type SegmentoId =
  | "emagrecedores"
  | "vitaminas"
  | "capilares"
  | "faciais"
  | "mulher"
  | "imunidade";

export const segmentos: {
  id: SegmentoId;
  nome: string;
  descricao: string;
  icone: "flame" | "flask-conical" | "scissors" | "sparkle" | "venus" | "shield-plus";
}[] = [
  {
    id: "emagrecedores",
    nome: "Emagrecedores",
    descricao: "Fórmulas para controle de apetite, metabolismo e queima de gordura.",
    icone: "flame",
  },
  {
    id: "vitaminas",
    nome: "Vitaminas e Suplementos",
    descricao: "Complexos vitamínicos e minerais personalizados para cada necessidade.",
    icone: "flask-conical",
  },
  {
    id: "capilares",
    nome: "Cuidados Capilares",
    descricao: "Fórmulas para queda de cabelo, crescimento e fortalecimento dos fios.",
    icone: "scissors",
  },
  {
    id: "faciais",
    nome: "Cuidados Faciais",
    descricao: "Séruns e cremes manipulados para hidratação e antienvelhecimento.",
    icone: "sparkle",
  },
  {
    id: "mulher",
    nome: "Saúde da Mulher",
    descricao: "Fórmulas para equilíbrio hormonal, TPM e bem-estar feminino.",
    icone: "venus",
  },
  {
    id: "imunidade",
    nome: "Imunidade e Bem-estar",
    descricao: "Suplementação para fortalecer as defesas do corpo no dia a dia.",
    icone: "shield-plus",
  },
];

export type FormulaExemplo = {
  id: string;
  nome: string;
  segmento: SegmentoId;
  variante: string;
  precoDesde: number;
};

export const formulasExemplo: FormulaExemplo[] = [
  { id: "f1", nome: "Termogênico Controle de Apetite", segmento: "emagrecedores", variante: "30 sachês", precoDesde: 89.9 },
  { id: "f2", nome: "Metabolismo Ativo", segmento: "emagrecedores", variante: "60 cápsulas", precoDesde: 74.9 },
  { id: "f3", nome: "Saciedade Prolongada", segmento: "emagrecedores", variante: "30 sachês", precoDesde: 99.9 },
  { id: "f4", nome: "Multivitamínico Personalizado", segmento: "vitaminas", variante: "30 sachês", precoDesde: 59.9 },
  { id: "f5", nome: "Vitamina D3 + K2", segmento: "vitaminas", variante: "60 cápsulas", precoDesde: 44.9 },
  { id: "f6", nome: "Complexo para Gestantes", segmento: "vitaminas", variante: "30 sachês", precoDesde: 64.9 },
  { id: "f7", nome: "Fórmula Anti-queda Capilar", segmento: "capilares", variante: "60 cápsulas", precoDesde: 69.9 },
  { id: "f8", nome: "Biotina + Zinco", segmento: "capilares", variante: "60 cápsulas", precoDesde: 42.9 },
  { id: "f9", nome: "Tônico Capilar Fortalecedor", segmento: "capilares", variante: "60ml", precoDesde: 54.9 },
  { id: "f10", nome: "Sérum Facial Antiaging", segmento: "faciais", variante: "30ml", precoDesde: 79.9 },
  { id: "f11", nome: "Creme Hidratante Personalizado", segmento: "faciais", variante: "60g", precoDesde: 49.9 },
  { id: "f12", nome: "Equilíbrio Hormonal Feminino", segmento: "mulher", variante: "30 cápsulas", precoDesde: 84.9 },
  { id: "f13", nome: "Alívio da TPM", segmento: "mulher", variante: "30 sachês", precoDesde: 64.9 },
  { id: "f14", nome: "Imunidade em Dia", segmento: "imunidade", variante: "30 cápsulas", precoDesde: 54.9 },
  { id: "f15", nome: "Própolis + Vitamina C", segmento: "imunidade", variante: "60ml", precoDesde: 39.9 },
];
