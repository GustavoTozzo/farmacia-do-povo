export type PostCategoria = "prevencao" | "saude-bem-estar" | "medicamentos" | "cuidados-em-casa";

export const categoriasBlog: { id: PostCategoria; nome: string }[] = [
  { id: "prevencao", nome: "Prevenção" },
  { id: "saude-bem-estar", nome: "Saúde e Bem-Estar" },
  { id: "medicamentos", nome: "Medicamentos" },
  { id: "cuidados-em-casa", nome: "Cuidados em Casa" },
];

export type PostIcone =
  | "heart-pulse"
  | "droplet"
  | "calendar-check"
  | "badge-check"
  | "thermometer";

export type Post = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: PostCategoria;
  data: string;
  leitura: string;
  icone: PostIcone;
  conteudo: { titulo?: string; paragrafos: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "hipertensao-meca-pressao-regularmente",
    titulo: "Hipertensão silenciosa: por que medir a pressão regularmente faz diferença",
    resumo:
      "A pressão alta costuma não dar sintomas até causar complicações. Entenda por que o acompanhamento simples na farmácia ajuda a prevenir problemas maiores.",
    categoria: "prevencao",
    data: "15/01/2026",
    leitura: "5 min",
    icone: "heart-pulse",
    conteudo: [
      {
        titulo: "Por que a hipertensão é chamada de \"assassina silenciosa\"",
        paragrafos: [
          "Na maioria dos casos, a pressão alta não causa dor, falta de ar ou qualquer outro sintoma perceptível — o problema é descoberto, muitas vezes, só quando já causou danos ao coração, aos rins ou à visão.",
          "Por isso, medir a pressão de tempos em tempos é uma das formas mais simples de prevenção que existem, mesmo para quem se sente bem.",
        ],
      },
      {
        titulo: "Quem deve medir com mais frequência",
        paragrafos: [
          "Pessoas com histórico familiar de hipertensão, acima dos 40 anos, com sobrepeso ou que levam uma rotina muito estressante devem ficar ainda mais atentas e medir a pressão com regularidade.",
          "Quem já tem diagnóstico de pressão alta deve seguir a orientação médica sobre a frequência de acompanhamento, mesmo durante o tratamento.",
        ],
      },
      {
        titulo: "Como funciona na Farmácia do Povo",
        paragrafos: [
          "Fazemos a aferição de pressão gratuitamente, sem necessidade de agendamento. Basta chegar até a farmácia durante o horário de atendimento.",
          "Se o resultado vier alterado, nossa equipe orienta os próximos passos e a importância de procurar um médico para avaliação.",
        ],
      },
    ],
  },
  {
    slug: "diabetes-quando-fazer-teste-glicemia",
    titulo: "Diabetes e glicemia: quando vale a pena fazer o teste",
    resumo:
      "Cansaço, sede excessiva e fome fora de hora podem ser sinais de alerta. Saiba quando medir a glicemia e como funciona o teste na farmácia.",
    categoria: "saude-bem-estar",
    data: "22/01/2026",
    leitura: "6 min",
    icone: "droplet",
    conteudo: [
      {
        titulo: "Sinais que merecem atenção",
        paragrafos: [
          "Sede constante, vontade frequente de urinar, cansaço sem explicação e fome fora de hora estão entre os sinais mais comuns de glicemia alterada.",
          "Pessoas com histórico familiar de diabetes, sedentárias ou com sobrepeso também têm mais chance de desenvolver a doença e devem testar com mais frequência.",
        ],
      },
      {
        titulo: "Como funciona o teste",
        paragrafos: [
          "O teste de glicemia é feito com uma pequena gota de sangue da ponta do dedo e o resultado sai em poucos minutos — é rápido e exige pouco preparo.",
          "Para um resultado em jejum, o ideal é não comer nada nas 8 horas anteriores ao teste; já a medição casual pode ser feita a qualquer momento do dia.",
        ],
      },
      {
        titulo: "Como funciona na Farmácia do Povo",
        paragrafos: [
          "Realizamos o teste de glicemia mediante uma taxa simbólica, sem necessidade de agendamento. Nossa equipe explica o resultado e, se necessário, orienta a buscar acompanhamento médico.",
        ],
      },
    ],
  },
  {
    slug: "organizar-remedios-familia-sem-erros",
    titulo: "Como organizar os remédios da família sem erros",
    resumo:
      "Horários trocados e medicamentos vencidos são mais comuns do que parecem. Veja dicas simples para organizar a farmácia de casa com segurança.",
    categoria: "cuidados-em-casa",
    data: "29/01/2026",
    leitura: "4 min",
    icone: "calendar-check",
    conteudo: [
      {
        titulo: "Use um organizador de comprimidos",
        paragrafos: [
          "Caixinhas organizadoras por dia da semana e horário ajudam muito, principalmente para idosos ou para quem toma vários remédios ao mesmo tempo.",
          "Separar a dose da semana de uma vez só reduz o risco de esquecer ou tomar em duplicidade.",
        ],
      },
      {
        titulo: "Mantenha as embalagens e a bula",
        paragrafos: [
          "Guardar o medicamento fora da caixa original dificulta identificar o nome, a dosagem e a validade — o ideal é manter tudo junto, em um local seco e longe de luz direta.",
        ],
      },
      {
        titulo: "Fique de olho na validade",
        paragrafos: [
          "Revise a farmácia de casa de tempos em tempos e descarte com segurança os medicamentos vencidos. Remédios fora de validade podem perder o efeito ou até se tornar prejudiciais.",
        ],
      },
      {
        titulo: "Conte com a nossa equipe",
        paragrafos: [
          "Se tiver dúvidas sobre como organizar os remédios de alguém da família, pode perguntar para a nossa equipe farmacêutica — é um prazer ajudar.",
        ],
      },
    ],
  },
  {
    slug: "medicamentos-genericos-funcionam-igual",
    titulo: "Medicamentos genéricos: funcionam tão bem quanto os de marca?",
    resumo:
      "Entenda o que a ANVISA exige para aprovar um medicamento genérico e por que a troca costuma ser segura e mais econômica.",
    categoria: "medicamentos",
    data: "05/02/2026",
    leitura: "5 min",
    icone: "badge-check",
    conteudo: [
      {
        titulo: "O que é um medicamento genérico",
        paragrafos: [
          "O genérico tem a mesma substância ativa, dose, forma farmacêutica e via de administração do medicamento de referência — e precisa comprovar que age no corpo da mesma forma.",
          "Para ser aprovado pela ANVISA, ele passa por testes de bioequivalência, que comparam a absorção do medicamento genérico com a do remédio de marca.",
        ],
      },
      {
        titulo: "Por que costuma custar menos",
        paragrafos: [
          "O preço mais baixo não está relacionado à qualidade, mas ao fato de que o fabricante do genérico não precisa repetir os custos de pesquisa e desenvolvimento do medicamento original.",
        ],
      },
      {
        titulo: "Quando conversar com o farmacêutico",
        paragrafos: [
          "Em caso de dúvida sobre a troca de um medicamento de marca pelo genérico equivalente, ou sobre qual opção cabe melhor no seu orçamento, nossa equipe pode te orientar.",
        ],
      },
    ],
  },
  {
    slug: "cuidados-no-inverno-gripes-resfriados",
    titulo: "Cuidados no inverno: prevenindo gripes e resfriados na família",
    resumo:
      "Hidratação, vacinação em dia e alguns hábitos simples ajudam a atravessar o inverno com menos gripes, resfriados e idas ao médico.",
    categoria: "prevencao",
    data: "12/02/2026",
    leitura: "4 min",
    icone: "thermometer",
    conteudo: [
      {
        titulo: "Mantenha a vacinação em dia",
        paragrafos: [
          "A vacina da gripe é a forma mais eficaz de reduzir o risco de complicações respiratórias no inverno, especialmente para crianças, idosos e gestantes.",
        ],
      },
      {
        titulo: "Hábitos simples que ajudam",
        paragrafos: [
          "Lavar as mãos com frequência, manter ambientes arejados e evitar contato próximo com pessoas gripadas reduzem bastante a transmissão de vírus respiratórios.",
          "Beber água regularmente, mesmo com o frio dando menos sede, ajuda a manter as vias respiratórias mais protegidas.",
        ],
      },
      {
        titulo: "Quando procurar ajuda",
        paragrafos: [
          "Febre alta persistente, falta de ar ou piora dos sintomas após alguns dias são sinais de que vale buscar atendimento médico, em vez de esperar passar sozinho.",
        ],
      },
    ],
  },
];
