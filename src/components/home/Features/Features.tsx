import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { useGetPostDataQuery } from "@/redux/api/postApi";
import React from "react";

const Features = () => {
  const { data } = useGetPostDataQuery({});
  console.log("Post data: ", data?.data);

  return (
    <div
      style={{
        padding: "60px 0",
      }}
    >
      <h2 style={{ textAlign: "center" }}>This is Features Service</h2>
      {data?.data.map((product: any) => {
        return (
          <div key={product.id} className="flex flex-wrap justify-center">
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Features;
