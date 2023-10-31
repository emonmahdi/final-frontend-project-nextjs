"use client";
import { Button, Drawer, Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut } from "firebase/auth";
import { setUser } from "@/redux/features/user/userSlice";

const { Header } = Layout;

const Navbar = ({
  items,
}: {
  items: {
    key: string;
    label: string;
    href: string;
  }[];
}) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // sticky menu
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout className="layout">
      <Header
        className={`flex justify-between place-items-center fixed top-0 left-0 w-full p-4 ${
          isSticky ? "bg-[#3CAA9F] shadow-lg" : ""
        } z-10`}
      >
        <Content>
          <Link href="/">
            <Title
              level={3}
              style={{
                display: "inline-block",
                color: "white",
                marginBottom: 0,
              }}
            >
              {" "}
              {isSticky ? (
                <span style={{ color: "#000", fontWeight: "bold" }}>H</span>
              ) : (
                <span style={{ color: "#3CAA9F", fontWeight: "bold" }}>H</span>
              )}
              <span style={{ color: "#fff" }}>oteliya</span>
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden bg-transparent"
          disabledOverflow
          mode="horizontal"
          selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
        >
          {items?.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link
                  href={item.href}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>

        {!user.email ? (
          <>
            <Link href="/login">
              {!isSticky ? (
                <button
                  className="hover:bg-black border-solid border-2 border-[#3CAA9F] hover:border-solid hover:border-2 hover:border-[#3CAA9F]"
                  style={{
                    border: "none",
                    background: "#3CAA9F",
                    color: "#fff",
                    padding: "10px 18px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>
              ) : (
                <button
                  className="bg-black border-solid border-2 border-[#3CAA9F] hover:border-solid hover:border-2 hover:border-[#000]"
                  style={{
                    border: "none",
                    background: "#3CAA9F",
                    color: "#fff",
                    padding: "10px 18px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>
              )}
            </Link>
            <Link
              style={{
                marginLeft: "10px",
              }}
              href="/signup"
            >
              {!isSticky ? (
                <button
                  className="hover:bg-black border-solid border-2 border-[#3CAA9F] hover:border-solid hover:border-2 hover:border-[#3CAA9F]"
                  style={{
                    border: "none",
                    background: "#3CAA9F",
                    color: "#fff",
                    padding: "10px 18px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </button>
              ) : (
                <button
                  className="bg-black border-solid border-2 border-[#3CAA9F] hover:border-solid hover:border-2 hover:border-[#000]"
                  style={{
                    border: "none",
                    background: "#3CAA9F",
                    color: "#fff",
                    padding: "10px 18px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </button>
              )}
            </Link>
          </>
        ) : (
          <>
            <Button type="text">
              <Link
                href="/profile"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Dashboard
              </Link>
            </Button>
            <button
              onClick={handleLogout}
              style={{
                background: "#FF34AC",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Log Out
            </button>
            {/* <Button o danger>
              Log Out
            </Button> */}
          </>
        )}

        <Button onClick={showDrawer} type="primary" className="lg:hidden">
          <MenuOutlined />
        </Button>
        <Drawer
          className="lg:hidden mx-3"
          title="Beyond Hotel"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu
            disabledOverflow
            theme="light"
            mode="vertical"
            selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
          >
            {items?.map((item) => {
              return (
                <Menu.Item key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
