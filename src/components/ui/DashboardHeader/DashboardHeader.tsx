import { Button, Dropdown, Layout, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import type { MenuProps } from "antd";
import { useAppDispatch } from "@/redux/hooks";
import { signOut } from "firebase/auth";
import auth from "@/firebase/firebase.auth";
import { setUser } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
const { Header } = Layout;

const DashboardHeader = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={handleLogout} type="text" danger>
          Log Out
        </Button>
      ),
    },
  ];

  return (
    <Header style={{ background: "#3CAA9F" }}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }} arrow>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </Header>
  );
};

export default DashboardHeader;
