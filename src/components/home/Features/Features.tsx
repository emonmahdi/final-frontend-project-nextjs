import MyButton from "@/components/ui/Button/Button";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { useGetPostDataQuery } from "@/redux/api/postApi";
import Link from "next/link";
import React from "react";

const Features = () => {
  const { data } = useGetPostDataQuery({});
  // console.log("Post data: ", data?.data);

  return (
    <div
      style={{
        padding: "60px 0",
      }}
    >
      <h2 style={{ textAlign: "center" }} className="text-2xl py-3">
        This is Features Service
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.data?.map((product: any) => {
          return (
            <ProductCard
              key={product._id}
              params={product._id}
              product={product}
            />
          );
        })}
      </div>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Link href="allrooms">
          <MyButton>Room & Suites</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default Features;
