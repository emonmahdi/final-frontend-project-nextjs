"use client";
import { Row } from "antd";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          height: "100vh",
        }}
      >
        <h1>Something went wrong!</h1>
      </Row>
    </div>
  );
};

export default ErrorPage;
