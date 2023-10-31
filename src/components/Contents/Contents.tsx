import { Content } from "antd/es/layout/layout";
import React from "react";
import UMBreadCrumb from "../ui/UMBreadCrumb/UMBreadCrumb";
import DashboardHeader from "../ui/DashboardHeader/DashboardHeader";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
      }}
    >
      <DashboardHeader />
      <div
        style={{
          margin: "12px",
        }}
      >
        <UMBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: `student`,
              link: `/${base}/student`,
            },
          ]}
        />
      </div>
      <div
        style={{
          margin: "20px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
