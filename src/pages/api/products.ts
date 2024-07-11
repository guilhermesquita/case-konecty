import { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: 1,
    brand: "Product 1",
    description: "Description 1",
    price: 10,
    category: "Category 1",
    image:
      "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/n9hshsnrlkkbbbacyil0/womens-nike-air-force-1-jester-xx-1-reimagined-black-sonic-yellow-release-date.jpg",
  },
  {
    id: 2,
    brand: "Product 2",
    description: "Description 2",
    price: 20,
    category: "Category 2",
    image: "/images/product2.jpg",
  },
  // Adicione mais produtos conforme necessário
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
};
