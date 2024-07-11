"use client";
import CardMovie, { ProductCardProps } from "@/components/cardMovie";
import { useEffect, useState } from "react";
import Spinner from "@/components/spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type IMovie = {
  id_movie: string;
  title_movie: string;
  director_movie: string;
  description_movie: string;
  image_movie: string;
  year_movie: string;
};

type IUser = {
  id_user: number;
  nm_user: string;
  email_user: string;
  password_user: string;
  created_at: string;
};

type jwtObject = {
  exp: number;
  iat: number;
  key: number;
};

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const callbackLoad = () => {
    return <Spinner />;
  };

  return (
    <main className="w-full flex flex-col pl-40 pr-40 pt-10 gap-7">

      <section className="w-full ">
        <div
          className="w-1/4 h-10 flex border-2 bg-white border-white
        items-center gap-2 pl-5 duration-500 hover:border-black 
        rounded-md"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#B9AFB5", fontWeight: "normal" }}
          />
          <input
            type="text"
            placeholder="Buscar Produto"
            className="w-full h-full 
            rounded-md outline-0 font-inter placeholder:font-inter"
          />
        </div>
      </section>

      <section>
        <h2 className="font-extrabold text-3xl font-montserrat">Tênis</h2>
        <p className="font-inter">{filteredProducts.length} produtos encontrados</p>
      </section>

      <section className="w-full flex flex-wrap justify-start gap-1 pt-10">
        {products.length > 0
          ? filteredProducts.map((product: ProductCardProps) => {
              return (
                <CardMovie
                  key={product.id}
                  brand={product.brand}
                  id={product.id}
                  category={product.category}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                />
              );
            })
          : callbackLoad()}
      </section>
    </main>
  );
}
