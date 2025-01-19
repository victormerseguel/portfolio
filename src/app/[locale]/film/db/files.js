const caterina1 = "/assets/img/thumb_caterina1.jpg";
const sbcirco = "/assets/img/thumb_sbcirco.jpg";
const leticia = "/assets/img/thumb_leticia.jpg";
const square = "/assets/img/thumb_square.jpg";
const caterina2 = "/assets/img/thumb_caterina2.jpg";
const paineiras = "/assets/img/thumb_paineiras.jpg";
const mediotec = "/assets/img/thumb_mediotec.jpg";
const saraf = "/assets/img/thumb_saraf.jpg";
const xoaluguel = "/assets/img/thumb_xoaluguel.jpg";
const serie = "/assets/img/thumb_serie.jpg";
const facemulher = "/assets/img/thumb_facemulher.jpg";
const larifinocchiaro = "/assets/img/thumb_larifinocchiaro.jpg";
const brazilianbutcher = "/assets/img/thumb_brazilianbutcher.jpg";
const beradero = "/assets/img/thumb_beradero.jpg";

const files = [
  {
    id: "caterina1",
    nome: "Caterina 1",
    imgURL: caterina1,
    patch: "851958290",
    descriptType: "Esquete Internet",
    descripTitle: "Medo",
    descripClient: "Luciana Castellano",
    order: "05",
  },

  {
    id: "sbcirco",
    nome: "São Bercirco",
    imgURL: sbcirco,
    patch: "851958834",
    descriptType: "Color Grading",
    descripTitle: "São Bercirco",
    descripClient: "dir. Mariana França",
    order: "02",
  },
  {
    id: "leticia",
    nome: "Letícia",
    imgURL: leticia,
    patch: "851958625",
    descriptType: "Promocional",
    descripTitle: "Fisioterapia",
    descripClient: "Letícia Mello",
    order: "03",
  },
  {
    id: "square",
    nome: "Square",
    imgURL: square,
    patch: "851958902",
    descriptType: "Promocional",
    descripTitle: "Infraestrutura",
    descripClient: "Square - Soluções em Tecnologia",
    order: "04",
  },
  {
    id: "caterina2",
    nome: "Caterina 2",
    imgURL: caterina2,
    patch: "851958536",
    descriptType: "Esquete Internet",
    descripTitle: "É Importante Errar",
    descripClient: "Luciana Castellano",
    order: "10",
  },
  {
    id: "paineiras",
    nome: "Paineiras",
    imgURL: paineiras,
    patch: "851958721",
    descriptType: "Mosaico Musical",
    descripTitle: "Um Canto para as Mães",
    descripClient: "Coral Paineiras",
    order: "07",
  },
  {
    id: "mediotec_dunas",
    nome: "Mediotec",
    imgURL: mediotec,
    patch: "851958669",
    descriptType: "Produção Musical Completa",
    descripTitle: "Dunas",
    descripClient: "MEDIOTEC Música",
    order: "08",
  },
  {
    id: "saraf",
    nome: "Saraf",
    imgURL: saraf,
    patch: "851958777",
    descriptType: "Conteúdo",
    descripTitle: "Inventário de Ativos",
    descripClient: "SARAF Controle Patrimonial",
    order: "06",
  },
  {
    id: "xoaluguel",
    nome: "Xô Aluguel Online",
    imgURL: xoaluguel,
    patch: "920569024",
    descriptType: "Vídeo de Vendas",
    descripTitle: "Xô Aluguel Online",
    descripClient: "ANDUMA Empreendimentos Imobiliários",
    order: "09",
  },
  {
    id: "serie",
    nome: "Série",
    imgURL: serie,
    patch: "887349801",
    descriptType: "Mini Web Série",
    descripTitle: "Mafalda - Ep. 01",
    descripClient: "Caminhos Potentes",
    order: "01",
  },
  {
    id: "facemulher",
    nome: "A Face de Uma Mulher",
    imgURL: facemulher,
    patch: "920570045",
    descriptType: "Clipe Musical",
    descripTitle: "A Face de Uma Mulher",
    descripClient: "Mariane Mattoso e Caio Merseguel",
    order: "11",
  },
  {
    id: "beradero",
    nome: "Bèradêro",
    imgURL: beradero,
    patch: "920582185",
    descriptType: "Lyric Video",
    descripTitle: "Bèradêro",
    descripClient: "Samanta Okuyama",
    order: "12",
  },
  {
    id: "brazilianbutcher",
    nome: "Brazilian Butcher Ads",
    imgURL: brazilianbutcher,
    patch: "920582444",
    descriptType: "Publicidade Redes Sociais",
    descripTitle: "Brazilian Butcher",
    descripClient: "Brazilian Butcher",
    order: "02,5",
  },
  {
    id: "larifinocchiaro",
    nome: "Lari Finocchiaro",
    imgURL: larifinocchiaro,
    patch: "920582530",
    descriptType: "Tratamento de som e imagem",
    descripTitle: "Lagrimas de Diamantes",
    descripClient: "Lari Finocchiaro",
    order: "06.5",
  },
];

export const orderedFiles = files.sort((a, b) => {
  return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
});
