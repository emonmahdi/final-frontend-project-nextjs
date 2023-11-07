"use client";
import { Button, Col, Input, Row } from "antd";
import "./Banner.css";
import MyButton from "@/components/ui/Button/Button";

const Banner = () => {
  return (
    <div className="hoteliya-banner-section">
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="title-tag">Welcome to Hoteliya</div>
          <h1 className="main-title">Enjoy Your Vacation.</h1>
          <p className="sub-title">
            Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisuen
            the aucan ligula. mus nellentesque habitant forminy morbine odio
            elementum sceisuen the aucan ligula mus nellentesque morbine .
          </p>
          <MyButton>Room & Suites</MyButton>
        </Col>
        <Col sm={12} md={11} lg={8} xs={{ span: 22, offset: 0 }}></Col>
      </Row>
    </div>
  );
};

export default Banner;
