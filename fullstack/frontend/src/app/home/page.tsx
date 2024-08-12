"use client";
import ReactLoading from "react-loading";
import React, { useEffect, useState } from "react";
import getProducts from "../api/products";
import getBrands from "../api/brands";

import { Product, Brand } from "../interfaces/index";
import InputSearch from "../components/InputSearch";
import CardProduct from "./components/cardProduct";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([{ id: "", name: "Todos" }]);

  const [searchValue, setSearchValue] = useState<string>("");
  const [brandValue, setBrandValue] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchDataProduct = async (
    id: string | undefined,
    search: string | undefined
  ) => {
    try {
      setIsLoading(true);
      const response = await getProducts(id, search);
      setProducts(response);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataBrand = async () => {
    try {
      const response = await getBrands();
      setBrands([{ id: "", name: "Todos" }, ...response]);
    } catch (error) {
      console.error("Erro ao buscar marcas:", error);
    }
  };

  useEffect(() => {
    fetchDataProduct('','');
    fetchDataBrand();
  }, []);

  const handleClickBrand = (id: string) => {
    if (!id) {
      setSearchValue("");
      setBrandValue("");
    }
    setBrandValue(id);
    fetchDataProduct(id, searchValue);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearch = () => {
    fetchDataProduct(brandValue, searchValue);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <section className="w-[94%] md:w-[80%] my-10 max-w-[1400px]">
        <InputSearch
          onSearchChange={handleSearchChange}
          onSearchClick={handleSearch}
        />
        <h1 className="text-4xl font-extrabold mt-6 mb-2">Tênis</h1>
        <span className="text-lg">{products.length} produtos encontrados</span>
      </section>

      <div className="w-[94%] md:w-[80%] max-w-[1400px] mb-12 relative">
        <div className="w-full absolute flex gap-3 overflow-auto pb-3">
          {brands.map((e) => (
            <div
              key={e.id}
              className={`${brandValue === e.id ? "bg-blue1 text-white" : "bg-white text-black"} rounded-3xl text-center w-fit h-fit whitespace-nowrap px-4 py-1`}
            >
              <button onClick={() => handleClickBrand(e.id)}>{e.name}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[94%] md:w-[80%] flex flex-wrap items-center gap-[2%] md:gap-[2%] xl:gap-[1.33%] max-w-[1400px] pb-24">
        {isLoading ? (
          <div className="w-full flex flex-col justify-center items-center m-24 gap-4">
            <ReactLoading type="spin" color="#000" />
            <p className="text-xl font-extrabold mb-2">Carregando...</p>
          </div>
        ) : (
          products.map((product) => (
            <CardProduct key={product.id} data={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
