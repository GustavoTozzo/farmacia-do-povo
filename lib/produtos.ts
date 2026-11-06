export type Categoria =
  | "higiene-beleza"
  | "mae-bebe"
  | "suplementos"
  | "dermocosmeticos"
  | "primeiros-socorros";

export const categorias: { id: Categoria; nome: string; icone: string }[] = [
  { id: "higiene-beleza", nome: "Higiene e beleza", icone: "sparkles" },
  { id: "mae-bebe", nome: "Mãe e bebê", icone: "baby" },
  { id: "suplementos", nome: "Suplementos e vitaminas", icone: "flask-conical" },
  { id: "dermocosmeticos", nome: "Dermocosméticos", icone: "droplets" },
  { id: "primeiros-socorros", nome: "Primeiros socorros", icone: "cross" },
];

export type Produto = {
  id: string;
  nome: string;
  categoria: Categoria;
  variante: string;
  precoDe?: number;
  preco: number;
  selo?: "oferta" | "mais-vendido" | "novidade";
};

export const produtos: Produto[] = [
  {
    id: "soro-fisiologico",
    nome: "Soro Fisiológico 0,9%",
    categoria: "primeiros-socorros",
    variante: "Frasco 500ml",
    preco: 7.9,
  },
  {
    id: "alcool-gel-70",
    nome: "Álcool em Gel 70%",
    categoria: "primeiros-socorros",
    variante: "500ml",
    preco: 13.9,
    selo: "mais-vendido",
  },
  {
    id: "curativo-kit",
    nome: "Kit Curativo Básico",
    categoria: "primeiros-socorros",
    variante: "Band-aids + gaze + fita micropore",
    preco: 19.9,
  },
  {
    id: "termometro-digital",
    nome: "Termômetro Digital",
    categoria: "primeiros-socorros",
    variante: "Clínico, medição em 10s",
    precoDe: 39.9,
    preco: 29.9,
    selo: "oferta",
  },
  {
    id: "protetor-solar-60",
    nome: "Protetor Solar FPS 60",
    categoria: "dermocosmeticos",
    variante: "Facial, toque seco · 50g",
    preco: 44.9,
    selo: "mais-vendido",
  },
  {
    id: "hidratante-corporal",
    nome: "Loção Hidratante Corporal",
    categoria: "dermocosmeticos",
    variante: "Ureia 10% · 400ml",
    preco: 27.9,
  },
  {
    id: "serum-vitamina-c",
    nome: "Sérum Facial Vitamina C",
    categoria: "dermocosmeticos",
    variante: "30ml",
    precoDe: 69.9,
    preco: 54.9,
    selo: "oferta",
  },
  {
    id: "shampoo-anticaspa",
    nome: "Shampoo Anticaspa",
    categoria: "higiene-beleza",
    variante: "400ml",
    preco: 23.9,
  },
  {
    id: "escova-dental-kit",
    nome: "Kit Escova + Creme Dental",
    categoria: "higiene-beleza",
    variante: "2 escovas + creme 90g",
    preco: 16.9,
  },
  {
    id: "desodorante-aerosol",
    nome: "Desodorante Aerosol",
    categoria: "higiene-beleza",
    variante: "150ml · diversas fragrâncias",
    preco: 14.9,
    selo: "novidade",
  },
  {
    id: "absorvente-noturno",
    nome: "Absorvente Noturno",
    categoria: "higiene-beleza",
    variante: "Pacote com 8 unidades",
    preco: 9.9,
  },
  {
    id: "fralda-descartavel-g",
    nome: "Fralda Descartável G",
    categoria: "mae-bebe",
    variante: "Pacote com 44 unidades",
    precoDe: 54.9,
    preco: 47.9,
    selo: "oferta",
  },
  {
    id: "lenco-umedecido",
    nome: "Lenços Umedecidos",
    categoria: "mae-bebe",
    variante: "Pacote com 192 unidades",
    preco: 32.9,
  },
  {
    id: "pomada-assadura",
    nome: "Pomada para Assaduras",
    categoria: "mae-bebe",
    variante: "45g",
    preco: 21.9,
  },
  {
    id: "shampoo-infantil",
    nome: "Shampoo Infantil Sem Lágrimas",
    categoria: "mae-bebe",
    variante: "200ml",
    preco: 18.9,
    selo: "novidade",
  },
  {
    id: "multivitaminico-adulto",
    nome: "Multivitamínico Adulto",
    categoria: "suplementos",
    variante: "30 cápsulas",
    preco: 39.9,
    selo: "mais-vendido",
  },
  {
    id: "whey-protein",
    nome: "Whey Protein Concentrado",
    categoria: "suplementos",
    variante: "900g · baunilha",
    precoDe: 159.9,
    preco: 134.9,
    selo: "oferta",
  },
  {
    id: "vitamina-d3",
    nome: "Vitamina D3 2000UI",
    categoria: "suplementos",
    variante: "60 cápsulas",
    preco: 29.9,
  },
  {
    id: "colageno-hidrolisado",
    nome: "Colágeno Hidrolisado",
    categoria: "suplementos",
    variante: "300g · sem sabor",
    preco: 69.9,
  },
];
