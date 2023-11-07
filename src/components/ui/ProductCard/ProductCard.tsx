import { Button } from "antd";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import MyButton from "../Button/Button";

import "./ProductCard.css";

const ProductCard = ({ product }: any) => {
  const { user } = useAppSelector((state) => state.user);
  const { _id, title, images, description, price, guest, bed } = product;
  console.log(images);
  return (
    <div className="mx-auto rounded-lg">
      <div className="card-container-hotel text-center rounded-lg">
        {/* <img src={img} alt="product image" /> */}
        <div className="hotel-img">
          <Image
            src={images}
            width={320}
            className="rounded-lg"
            height={320}
            alt="hotel image"
          />
        </div>
        <div className="overlay">
          <div className="hotel-content">
            <h2 className="font-bold text-xl  mb-4">
              <Link
                href={`/${_id}`}
                className="text-white text-decoration-line: none"
              >
                {title}
              </Link>
            </h2>
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
    </div>
  );
};

export default ProductCard;
