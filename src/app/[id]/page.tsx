"use client";

import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/Navbar";
import PublicHeader from "@/components/view/Header/PublicHeader";
import { useSinglePostDataQuery } from "@/redux/api/postApi";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import Loading from "../loading";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import MyButton from "@/components/ui/Button/Button";

const HotelDetails = () => {
  const { id } = useParams(); // Use curly braces to destructure the id
  const { data, isLoading, isError } = useSinglePostDataQuery(id);

  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        {" "}
        <Loading />
      </div>
    );
  }

  if (!user.email) {
    router.push("/login");
  }

  const {
    title,
    description,
    images,
    price,
    roomFacilities,
    facilities,
    address,
    availability,
    bed,
    category,
    contact,
    country,
    guest,
    hotelsFacilities,
    ratings,
    reviews,
    userEmail,
  } = data;
  // Assuming that data is an object with properties like 'name', 'description', etc.
  const hotelName = data?.title;
  const hotelDescription = data?.description;

  return (
    <div
      style={{
        padding: "60px 0",
      }}
    >
      <PublicHeader />
      <div className="container lg:px-12">
        <div className="lg:flex">
          {/* Hotel Details Section (2/3 of the layout) */}
          <div className="lg:w-2/3 p-4">
            <Image
              src={images}
              width={400}
              height={400}
              alt="image"
              className="w-full h-auto rounded-lg"
            />
            <div className="flex justify-between items-center mt-4">
              <div>
                <h3>{price} / Per Night</h3>
              </div>
              <div>
                <p
                  style={{
                    border: "2px solid #000",
                    padding: "5px 15px",
                    borderRadius: "25px",
                    background: "#000",
                    color: "#fff",
                  }}
                >
                  {guest} -Guest
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold mt-4">{title}</h2>
            <p className="text-gray-600 my-4">{description}</p>
            <div>
              <h2>Room Feature:</h2>
              {roomFacilities.map((facility: any) => (
                <>
                  <p
                    style={{
                      padding: "5px 20px",
                    }}
                  >
                    <li>{facility}</li>
                  </p>
                </>
              ))}
            </div>
            {/* extra service */}
            <div className="mt-4">
              <h2>Extra Service</h2>
              <div className="flex justify-between items-center">
                <div className="px-6 py-4">
                  <ul>
                    <li>Bar & Pub</li>
                    <li>Health club</li>
                    <li>Playzone</li>
                  </ul>
                </div>
                <div className="px-6 py-4">
                  <ul>
                    <li>Casino</li>
                    <li>Lugage storage</li>
                    <li>Banquet faciliti</li>
                  </ul>
                </div>
                <div className="px-6 py-4">
                  <ul>
                    <li>Summer terrace</li>
                    <li>Fitness room</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Order Booking Table (1/3 of the layout) */}
          <div className="lg:w-1/3 p-4">
            <div className="text-center">
              <MyButton>Add To Cart</MyButton>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold text-center bg-[#001529] text-white py-2 mb-6">
                Book Your Room
              </h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="check-out" className="block text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="check-out" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="check-out" className="block text-gray-600">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="mb-4">
                    <label htmlFor="check-out" className="block text-gray-600">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      id="check-in"
                      name="check-in"
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="check-out" className="block text-gray-600">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      id="check-out"
                      name="check-out"
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="guests" className="block text-gray-600">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full px-4 py-2 border rounded"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                <div className="text-center">
                  <MyButton>Book Now</MyButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelDetails;
