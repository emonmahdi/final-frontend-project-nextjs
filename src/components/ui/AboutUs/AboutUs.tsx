import Image from "next/image";
import aboutImg from "../../../assets/home-img/about-img.jpg";
import { Button } from "antd";
import MyButton from "../Button/Button";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            <div className="bg-white rounded-lg p-4 w-full text-center sm:block hidden">
              <Image
                style={{
                  height: "400px",
                  width: "400px",
                  lineHeight: "400px",
                  borderRadius: "50%",
                  border: "6px solid #3CAA9F",
                  padding: "10px",
                }}
                src={aboutImg}
                alt="img"
                className=""
              />
            </div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2 text-[#3CAA9F]">
                The Hoteliya Luxury hotels
              </h2>

              <div className="py-2">
                <h2 className="mb-4 text-3xl">
                  Find The Best Hotel For Accomodation.
                </h2>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr{" "}
                </p>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr{" "}
                </p>
              </div>
              <div style={{ marginTop: "10px" }}>
                <MyButton>About More</MyButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
