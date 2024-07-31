import { v4 as uuidv4 } from "uuid";
import { Product } from "../interfaces/index";

import brands from "./brands.database";

const products: Product[] = [
  {
    id: uuidv4(),
    name: "Nike Air Force 1 07 Feminino",
    price: 679.99,
    description:
      "O Tênis Nike Air Force 1 '07 Feminino combina estilo clássico com conforto moderno. Com sua construção em couro e sola de borracha durável, oferece suporte e tração em qualquer superfície. O design icônico é complementado por detalhes sutis que fazem deste modelo uma escolha versátil para o dia a dia.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/98582431.jpg",
    brand: brands.find((brand) => brand.name === "Nike")!,
  },
  {
    id: uuidv4(),
    name: "Crocs Classic Clog Feminino",
    price: 899.99,
    description:
      "O Tênis Crocs Classic Clog é um ícone de conforto e estilo casual. Feito em material Croslite™ que garante leveza e conforto o dia todo, o modelo é ideal para quem procura praticidade e um ajuste perfeito. O design ventilado e a palmilha macia tornam este modelo ideal para uso diário.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/96224412.jpg",
    brand: brands.find((brand) => brand.name === "Crocs")!,
  },
  {
    id: uuidv4(),
    name: "Converse Chuck Taylor All Star Lift Unissex",
    price: 369.99,
    description:
      "O Tênis Converse Chuck Taylor All Star Lift combina o estilo clássico da linha Chuck Taylor com um toque moderno. Com seu solado plataforma e material têxtil resistente, oferece um visual elevado e confortável. Ideal para quem busca um design atemporal com um pouco mais de altura e estilo.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/98140451.jpg",
    brand: brands.find((brand) => brand.name === "Converse")!,
  },
  {
    id: uuidv4(),
    name: "New Balance 550 Unissex",
    price: 799.99,
    description:
      "O Tênis New Balance 550 é a escolha ideal para quem procura conforto e estilo. Com um design retro e construção em couro, proporciona um ajuste confortável e suporte durável. A sola de borracha garante tração e o visual clássico é perfeito para qualquer ocasião.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/92344151.jpg",
    brand: brands.find((brand) => brand.name === "New Balance")!,
  },
  {
    id: uuidv4(),
    name: "Nike CT302 Feminino",
    price: 899.99,
    description:
      "O Tênis Nike CT302 Feminino mistura o estilo esportivo clássico com um design moderno. Inspirado nos modelos de quadra dos anos 80, oferece uma entressola em plataforma para maior conforto e estilo. Detalhes como o logotipo 'N' e a sola de borracha adicionam um toque sofisticado e esportivo ao visual.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/988383SO.jpg",
    brand: brands.find((brand) => brand.name === "Nike")!,
  },
  {
    id: uuidv4(),
    name: "Nike Air Zoom Pegasus 38",
    price: 259.99,
    description:
      "O Tênis Nike Air Zoom Pegasus 38 é ideal para corredores que buscam conforto e performance. Com uma unidade de amortecimento Zoom Air na frente e um ajuste seguro, oferece suporte ideal para treinos e corridas. O design moderno e a malha respirável garantem uma experiência de corrida confortável e eficiente.",
    imageURL: "https://imgcentauro-a.akamaihd.net/360x360/98721302.jpg",
    brand: brands.find((brand) => brand.name === "Nike")!,
  },
  {
    id: uuidv4(),
    name: "New Balance Fresh Foam 1080v11 Masculino",
    price: 319.99,
    description:
      "O Tênis New Balance Fresh Foam 1080v11 Masculino é projetado para corredores que procuram o máximo em conforto e amortecimento. A tecnologia Fresh Foam oferece uma sensação de maciez e suporte em cada passo. O design moderno e a construção respirável tornam este modelo perfeito para longas distâncias e uso diário.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/9234412R.jpg",
    brand: brands.find((brand) => brand.name === "New Balance")!,
  },
  {
    id: uuidv4(),
    name: "Vans ON Fire Unissex",
    price: 749.99,
    description:
      "O Tênis Vans ON Fire combina estilo ousado e conforto. Com um design vibrante e materiais de alta qualidade, oferece durabilidade e um ajuste perfeito. A sola emborrachada garante aderência, tornando-o ideal para quem busca um calçado que se destaque tanto no estilo quanto na funcionalidade.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/96564333.jpg",
    brand: brands.find((brand) => brand.name === "Vans")!,
  },
  {
    id: uuidv4(),
    name: "Chuteira de Campo Puma Future Match 7",
    price: 749.99,
    description:
      "Domine o campo com a Chuteira Puma Future Match 7, a escolha perfeita para jogadores que buscam desempenho excepcional",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/98779702.jpg",
    brand: brands.find((brand) => brand.name === "Puma")!,
  },
  {
    id: uuidv4(),
    name: "Adidas Superstar Unissex",
    price: 399.99,
    description:
      "O Tênis Adidas Superstar é um clássico que nunca sai de moda. Com sua icônica ponta de concha e design em couro, oferece um visual vintage que combina com qualquer estilo. A sola de borracha proporciona tração e durabilidade, tornando este modelo uma escolha confiável e estilosa para o uso diário.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/983515G0.jpg",
    brand: brands.find((brand) => brand.name === "Adidas")!,
  },
  {
    id: uuidv4(),
    name: "Converse Chuck Taylor All Star Se Unissex",
    price: 749.99,
    description:
      "O Tênis Converse Chuck Taylor All Star Se Unissex oferece conforto e um estilo icônico com um design moderno. Feito com material têxtil de alta qualidade e com uma sola emborrachada, garante durabilidade e conforto. Ideal para quem busca um tênis versátil que combina com qualquer look.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/88286831.jpg",
    brand: brands.find((brand) => brand.name === "Converse")!,
  },
  {
    id: uuidv4(),
    name: "Vans Ua Ultrarange Exo Se Unissex",
    price: 749.99,
    description:
      "O Tênis Vans Ua Ultrarange Exo Se Unissex é projetado para oferecer conforto e resistência. Com um design moderno e materiais duráveis, este tênis é ideal para quem precisa de um calçado que suporte o uso intenso sem sacrificar o estilo. A sola emborrachada proporciona excelente tração e estabilidade.",
    imageURL:
      "https://imgcentauro-a.akamaihd.net/360x360/97099704.jpg",
    brand: brands.find((brand) => brand.name === "Vans")!,
  },
];


export default products;
