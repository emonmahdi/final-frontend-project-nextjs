import { Row } from "antd";

import img from "./../assets/error.png";
import Image from "next/image";
import MyButton from "@/components/ui/Button/Button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          height: "100vh",
        }}
      >
        <Image src={img} width="400" height="400" alt="404 page " />
        <br />
        <div>
          <Link href="/">
            <MyButton>Back To Home</MyButton>
          </Link>
        </div>
      </Row>
    </>
  );
};

export default NotFoundPage;
