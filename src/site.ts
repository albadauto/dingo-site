// Dados usados em todo o site. Ajuste aqui nome, links e preços.

const appUrl = (
  import.meta.env.PUBLIC_APP_URL || "https://my.dingoapp.com.br"
).replace(/\/$/, "");

export const SITE = {
  name: "Dingo",
  tagline: "A IA que atende o WhatsApp do seu negócio de beleza",
  description:
    "O Dingo é a IA que atende o WhatsApp de barbearias, salões, estúdios de micropigmentação e nail designers: responde, agenda, lembra e chama a cliente de volta na hora do retorno. Teste grátis por 7 dias, sem cartão.",
  locale: "pt_BR",
  signupUrl: `${appUrl}/cadastro`,
  loginUrl: `${appUrl}/entrar`,
  trialDays: 7,
};

export const PLANS = [
  {
    key: "solo",
    name: "Solo",
    price: 59,
    who: "Para quem atende sozinha",
    perks: [
      "Dingo atendendo 24h no WhatsApp",
      "Agenda, clientes e lembretes",
      "1 profissional",
      "Até 300 conversas por mês",
    ],
  },
  {
    key: "essencial",
    name: "Essencial",
    price: 89,
    who: "Para quem atende em dupla",
    perks: ["Tudo do Solo", "Até 2 profissionais", "Conversas ilimitadas"],
  },
  {
    key: "profissional",
    name: "Profissional",
    price: 149,
    who: "Para a maioria dos negócios",
    perks: [
      "Tudo do Essencial",
      "Até 5 profissionais",
      "Agenda por profissional",
    ],
    featured: true,
  },
  {
    key: "salao",
    name: "Salão",
    price: 249,
    who: "Para equipes grandes",
    perks: [
      "Tudo do Profissional",
      "Profissionais ilimitados",
      "Ideal para equipes de 6 pessoas ou mais",
    ],
  },
];

export const SETUP_FEE = 200;

export const FAQ = [
  {
    q: "Para quais negócios o Dingo funciona?",
    a: "Para negócios de beleza que trabalham com horário marcado: barbearias, salões, estúdios de micropigmentação e design de sobrancelhas, nail designers e outros. Na hora do cadastro você escolhe o tipo, e o Dingo já vem com serviços de exemplo e fala do jeito do seu público.",
  },
  {
    q: "O que é o retorno automático?",
    a: "Em serviços que têm retoque ou manutenção, você informa depois de quantos dias a cliente deve voltar. Na data, o Dingo chama a cliente no WhatsApp e já oferece horários. Quem já marcou de novo não recebe a mensagem.",
  },
  {
    q: "Preciso de outro número de WhatsApp?",
    a: "Não. Você conecta o número que já usa, escaneando um QR code, do mesmo jeito que entra no WhatsApp Web. Você continua usando o WhatsApp normalmente no celular.",
  },
  {
    q: "Funciona com o WhatsApp Business?",
    a: "Funciona com o WhatsApp comum e com o WhatsApp Business. A conexão é feita pelo QR code, em Aparelhos conectados.",
  },
  {
    q: "E se o Dingo não souber responder?",
    a: "Ele não inventa preço, horário nem serviço. Quando o cliente pede algo fora do que você cadastrou, reclama ou quer falar com uma pessoa, o Dingo avisa que alguém da equipe vai responder e marca a conversa para você no painel.",
  },
  {
    q: "Posso responder eu mesmo quando quiser?",
    a: "Pode. Se você ou alguém da equipe responder um cliente, pelo celular ou pelo painel, o Dingo fica em silêncio naquela conversa até você devolver para ele.",
  },
  {
    q: "O cliente percebe que é uma inteligência artificial?",
    a: "O Dingo conversa de forma natural, no tom que você escolher. Se o cliente perguntar se está falando com um robô, ele responde a verdade.",
  },
  {
    q: "Como funciona o teste grátis?",
    a: "Você cria a conta e usa tudo por 7 dias, sem cadastrar cartão. Se gostar, escolhe um plano. Se assinar durante o teste, a primeira mensalidade só é cobrada quando o teste acabar.",
  },
  {
    q: "Tem fidelidade ou multa para cancelar?",
    a: "Não. Você cancela quando quiser pelo próprio painel e continua com acesso até o fim do mês já pago.",
  },
  {
    q: "O que é a implantação?",
    a: `É opcional: por R$ ${SETUP_FEE}, uma vez só, a gente cadastra com você os serviços, preços, profissionais, horários e prazos de retorno, conecta o WhatsApp e ajusta o jeito do Dingo falar.`,
  },
];

// Dados da empresa para Privacidade e Termos. Preencha antes de publicar.
export const COMPANY = {
  legalName: "MIND IT SOLUÇÕES DIGITAIS I.S",
  document: "69.533.366/0001-22",
  email: "contato@mindit.dev",
  // O Dingo é um produto Mind It!
  brand: "Mind It!",
  site: "https://mindit.dev",
  city: "São Paulo - SP",
  updated: "12 de outubro de 2026",
};
