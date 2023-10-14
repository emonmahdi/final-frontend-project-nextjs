"use client";

import Banner from "@/components/home/Banner/Banner";
import Features from "@/components/home/Features/Features";
import NavBar from "@/components/shared/NavBar";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/Navbar";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import Welcome from "@/components/ui/Welcome/Welcome";
import PublicHeader from "@/components/view/Header/PublicHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <PublicHeader />
      {/* <h1 className="text-l">This web application eLearning Platform</h1> */}
      <Banner />
      <Welcome />
      <AboutUs />
      <Testimonials />
      <Features />
      <Footer />
    </div>
  );
}
