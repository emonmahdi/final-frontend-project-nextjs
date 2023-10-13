"use client";
import { Col, Input, Row } from "antd";
import bannerImg from "../../../assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-5xl font-bold ">
            Build Skills With Experts Any Time, Anywhere
          </h1>
          <p style={{ margin: "15px 0" }}>
            We are develop yourself consistently
          </p>
          <div style={{}}>
            <Input placeholder="Search..." />;
          </div>
        </div>

        <div className="w-full md:w-1/2 text-right">
          <Image src={bannerImg} className="w-2/3 h-auto" alt="banner" />
        </div>
      </div>

      {/* <Row>
        <Col span={12}>
          <h1>Improve Your Online Learning Experience Better Instantly</h1>
          <p>Online registered student. Find your desired Courses from them.</p>
        </Col>
        <Col span={12}>
          <div
            style={{
              width: "50%",
              height: "auto",
            }}
          >
            <Image src={bannerImg} alt="banner" />
          </div>
        </Col>
      </Row> */}
      {/* <div>
        <h1>Learn your choose tutorial</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          excepturi.
        </span>
      </div>
      <div>
        <h2>Images section</h2>
        <img src="" alt="" />
      </div> */}
    </div>
  );
};

export default Banner;
