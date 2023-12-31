/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Contents from "@/components/Contents/Contents";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const items = [{ key: "1", label: "Home", href: "/" }];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user?.email) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    <p>Loading....</p>;
  }

  // if (!user?.email) {
  //   router.push("/login");
  // }

  return (
    <>
      <Layout hasSider>
        <Sidebar />
        <Contents>
          <div
            style={{
              padding: "10px 20px",
            }}
          >
            {children}
          </div>
        </Contents>
      </Layout>
    </>
  );
};

export default DashboardLayout;
