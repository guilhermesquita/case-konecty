/* eslint-disable @next/next/no-img-element */
export interface ProductCardProps {
  id: number;
  brand: string;
  description: string;
  price: number;
  image: string;
}

const CardShoes: React.FC<ProductCardProps> = ({ brand, description, price, image }) => {
  return (
    <section className="flex flex-col w-1/5 gap-2 pb-5 bg-white rounded-lg cursor-pointer
    px-5 mb-10 shadow-md">
      <div className="w-full h-40">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={`Imagem de um(a) ${description}`}
        />
      </div>
      <h4 className="font-inter font-medium text-center">{brand}</h4>
      <p className="font-inter text-[#7C7A7A] truncate text-center">
        {description}
      </p>
      <p className="font-inter font-medium text-center">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
      </p>
    </section>
  );
}

export default CardShoes;
