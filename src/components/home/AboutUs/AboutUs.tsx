import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="md:w-1/2 p-4">
              <h1 className="text-2xl md:text-3xl font-bold">Left Column</h1>
              <p className="mt-4 text-gray-700">
                This is the content for the left column. It can contain any text
                or components.
              </p>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 p-4">
              <h1 className="text-2xl md:text-3xl font-bold">Right Column</h1>
              <p className="mt-4 text-gray-700">
                This is the content for the right column. It can also contain
                text or components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
