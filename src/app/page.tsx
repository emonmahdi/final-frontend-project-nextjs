import Banner from "@/components/home/Banner/Banner";
import NavBar from "@/components/shared/NavBar";
import Navbar from "@/components/ui/Navbar/Navbar";
import PublicHeader from "@/components/view/Header/PublicHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <PublicHeader />
      {/* <h1 className="text-l">This web application eLearning Platform</h1> */}
      <Banner />
    </div>
  );
}
