import { Button } from "antd";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import MyButton from "../Button/Button";

const ProductCard = ({ product }: any) => {
  const { user } = useAppSelector((state) => state.user);
  const { _id, title, images, description, price, guest, bed } = product;
  console.log(images);
  return (
    <div className=" mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 text-center">
        {/* <img src={img} alt="product image" /> */}
        <Image src={images} width={300} height={300} alt="hotel image" />
        <div className="text-start">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          {/* <p>{description.slice(0, 100)}</p> */}
          <div className="flex justify-between item-center">
            <div>
              <h4>{bed} Bed</h4>
            </div>
            <div>
              <h4>{guest} Guest</h4>
            </div>
          </div>
          <div className="text-center">
            {user?.email && (
              <Link href={`/${_id}`}>
                {/* <Button type="primary">Book Now</Button> */}
                <MyButton>Book Now</MyButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
