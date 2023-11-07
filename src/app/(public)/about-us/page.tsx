import Footer from "@/components/ui/Footer/Footer";
import React from "react";

import "./about-us.css";
import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <div
        className="about-us-section"
        style={{
          padding: "60px 0",
        }}
      >
        <div className="section-top-title-about">
          <h2>About US</h2>
          <ul>
            <li>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Home
              </Link>{" "}
            </li>
            <li style={{ textDecoration: "underline", fontWeight: "bold" }}>
              About US
            </li>
          </ul>
        </div>
        {/* why choose us */}
        <div className="container px-12 py-12">
          <h2>Why Choose Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ut
            error in iure magni hic nostrum, non incidunt consequatur similique
            nemo iusto voluptatem quidem dolorem itaque officiis veniam
            exercitationem numquam?. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Autem corrupti, omnis blanditiis minus vero
            similique ipsum. Facilis nemo quam itaque tenetur fugiat similique
            officia optio unde minima vitae? Laudantium quis animi eius ratione
            magnam, facere nisi, ex natus similique recusandae eveniet, vel
            provident alias distinctio sint sit. Itaque, eum eaque.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
