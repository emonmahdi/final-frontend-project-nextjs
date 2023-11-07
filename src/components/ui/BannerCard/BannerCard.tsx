import React from "react";
import { Card } from "antd";
const BannerCard = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column */}
            <div className="md:w-1/3 p-4 ">
              <h2 className="text-xl md:text-3xl font-bold uppercase">
                What makes our hotels best than others?
              </h2>
            </div>
            {/* Right Column */}
            <div className="md:w-2/3 p-4">
              <div className="flex justify-center items-center ">
                <div className="rounded-lg border bg-[#3CAA9F] p-6 mx-4">
                  <h2 className="text-xl text-white">Hassle Free Booking</h2>
                </div>
                <div className="rounded-lg border bg-[#3CAA9F] p-6 mx-4">
                  <h2 className="text-xl text-white">28,000 Reviews</h2>
                </div>
                <div className="rounded-lg bg-[#3CAA9F] p-6 mx-4">
                  <h2 className="text-xl text-white">24/7 Support</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== */}
      {/* <div className="flex flex-col lg:flex-row justify-center items-center w-full space-x-3">
        <h2 className="text-4xl">What makes our hotels best than others?</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <Card className="w-60 text-gray-900 bg-white rounded-lg border border-green-500 hover:bg-green-500 hover:text-white">
            <h2 className="text-xl">Hassle Free Booking</h2>
            <p>Book hotels from our website without any hassle.</p>
          </Card>
          <Card className="w-60 text-gray-900 bg-white rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white">
            
          </Card>
          <Card className=" w-60 text-gray-900 bg-white rounded-lg border border-blue-500 hover:bg-blue-500 hover:text-white">
           
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export default BannerCard;
