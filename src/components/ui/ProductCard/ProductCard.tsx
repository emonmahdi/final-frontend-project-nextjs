"use client";
import { Col, Row } from "antd";
import React from "react";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const ProductCard = ({ product }: any) => {
  console.log(product);
  const { title, img } = product;
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4">
          {/* <img src={img} alt="product image" /> */}
          <h2 className="font-bold text-xl mb-2">Card 1</h2>
          <p>Details about Card 1 go here...</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
