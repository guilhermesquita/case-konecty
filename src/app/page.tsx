"use client";
import CardMovie, { ProductCardProps } from "@/components/cardMovie";
import { useEffect, useState } from "react";
import Spinner from "@/components/spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Filters } from "../../filters";

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[]>([]);
  const [brandFilter, setBrandFilter] = useState<string>('Todos');

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleChangeBrand = (brand: string) => {
    setBrandFilter(brand);
    if (brand === 'Todos') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.brand === brand);
      setFilteredProducts(filtered);
    }
  };

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
        <p className="font-inter">
          {filteredProducts.length} produtos encontrados
        </p>
      </section>

      <section className="flex gap-3">
        {Filters.map((brand, ind) => {
          const key = ind + 1;
          let isActive = brandFilter === brand;
          if(brandFilter === "Todos"){
            isActive = false
          }
          return (
            <button
              key={key}
              className={`duration-300 rounded-lg px-5 font-inter font-medium 
                ${isActive ? 'bg-blueButton text-white' : 'bg-white hover:bg-blueButton hover:text-white'}`}
              onClick={() => handleChangeBrand(brand)}
            >
              {brand}
            </button>
          );
        })}
      </section>

      <section className="w-full flex flex-wrap justify-start gap-1 pt-10">
        {products.length > 0
          ? filteredProducts.map((product: ProductCardProps) => {
              return (
                <CardMovie
                  key={product.id}
                  brand={product.brand}
                  id={product.id}
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
