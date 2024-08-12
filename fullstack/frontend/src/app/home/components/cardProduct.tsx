import React from "react";
import { Product } from "../../interfaces/index";
import Image from "next/image";

interface CardProductProps {
  data: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-[49%] md:w-[32%] xl:w-[24%] h-[fit] py-4 my-1.5 bg-white rounded-2xl">
      <Image
        src={data.imageURL}
        alt={data.name}
        height={120}
        width={150}
        className="rounded-xl w-[80%] object-cover"
      />

      <div className="flex flex-col gap-3 px-2 w-full">
        <p className="font-boldc font-black text-xl h-6 threePointsLine">{data.name}</p>
        <p className="font-boldc text-gray-500 text-sm h-10 overflow-hidden threePoints">
          Description: {data.description}
        </p>
        <p className="font-boldc font-black text-base h-6">${data.price}</p>
      </div>
    </div>
  );
};

export default CardProduct;
