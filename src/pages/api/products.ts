import { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: 1,
    brand: "Nike",
    description: "Women's Nike Air Force 1 Jester XX 1 Reimagined 'Black & Sonic Yellow",
    price: 642.50,
    image:
      "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/n9hshsnrlkkbbbacyil0/womens-nike-air-force-1-jester-xx-1-reimagined-black-sonic-yellow-release-date.jpg",
  },
  {
    id: 2,
    brand: "Converse",
    description: "Run Star Hike Three Color Unisex",
    price: 490.17,
    image: "https://www.converse.com/dw/image/v2/BJJF_PRD/on/demandware.static/-/Sites-cnv-master-catalog-we/default/dw8e5a8824/images/a_107/A08785C_A_107X1.jpg?sw=964",
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
    image: "https://nb.scene7.com/is/image/NB/ml574drm_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600",
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
