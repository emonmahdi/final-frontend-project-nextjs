"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";

import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import Link from "next/link";
import Title from "antd/es/typography/Title";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.USER;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "hidden",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="text-center my-6">
        <Link href="/">
          <Title
            level={3}
            style={{
              display: "inline-block",
              color: "white",
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            {" "}
            <span style={{ color: "#3CAA9F", fontWeight: "bold" }}>H</span>
            <span style={{ color: "#fff" }}>oteliya</span>
          </Title>
        </Link>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
