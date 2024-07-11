import { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: 1,
    brand: "Nike",
    description: "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.50,
    image:
      "https://images.stockx.com/images/Nike-Air-Force-1-Jester-XX-Black-Sonic-Yellow-Arctic-Orange-W.png?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1608517232&q=60",
  },
  {
    id: 2,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image: "https://s3-alpha-sig.figma.com/img/165b/d68e/27c7b823f60773a53e5092e3329a666c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b64wU7IA~oQJyVqCOh2gdISmMl8-Nhrp8OQOxdc-dzZhZPagB7WcNaE8I~n~~OGv7ZtEpU3oJ23ZMskLwiJrGyofHOvGe0HqdIrEtAH6EWNO4e4aQI3iPf22y1CfjQuoUauhYFxwlYs6p0hjt5medlHeD1SH-3JouD3D7noi8LOPaHnv9kvCrT6B2dRnn7msJ2VN39aXjm08KswXKkv6LCYgBwhxm~~fbCLsr-s9k989S7kvmB-btt9122ZxbECoRYVCVY4xVUDi0tm~X5JkMuttLG7ahANkR1kAmPaWpFWmj9vbtSYpUVfEz9a5wGipEdY8637Ky2PFcSVTpPka1w__",
  },
  {
    id: 3,
    brand: "Nike",
    description: "Air Jordan 1 Retro High Obsidian UNC",
    price: 1629.90,
    image: "https://static.wixstatic.com/media/f7a3b9_25f025c93cd444379ea96a7d88e28a44~mv2.jpg/v1/fill/w_560,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f7a3b9_25f025c93cd444379ea96a7d88e28a44~mv2.jpg",
  },
  {
    id: 4,
    brand: "Nike",
    description: "Air Force 1 Shadow Beige Pale Ivory",
    price: 740.00,
    image: "https://cdn.awsli.com.br/600x1000/150/150693/produto/127926158/3f11e85454.jpg",
  },
  {
    id: 5,
    brand: "New Balance",
    description: "New Balance 574 Rugged White Varsity Green",
    price: 647.97,
    image: "https://i.ebayimg.com/images/g/U~QAAOSwR5Bi~Tut/s-l1200.jpg",
  },
  {
    id: 6,
    brand: "Asics",
    description: "Gel-Lyte III OG White",
    price: 322.53,
    image: "https://s3-alpha-sig.figma.com/img/db91/0dc7/2825c86b70d9484504889c901a465a39?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7-LgcuWdE5-6etzjPIeciastIojzmMd6tfjHQB2OmXwos463jSVdpQJMLAwsYwxhShmZF-2Co8xFtJmnq1BhXnDGVEpYlFJhZUxaf4r8w7gRjHpEQASgZJfms~xbrz-DkqMXBRdO~iCJghQACOd1XA95KXMnHfv5UW6sn5mvBQHRL-5W7dQ4UDpfVZKnsi5XmTGrrj~j01dvNcUXaqxwjcMOdd7ibIkUksa8~Dgi5yA1vRgUZREsjCIHbOLeX4FRYtRdP1NJ8Hu33pdvxXA4bhq62vedQ8LcOv0ATM5nntoyACamqqF0cXwwD9Tn83qmw0EtmQPKSuSk9b5Ek~Cfg__",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
};
