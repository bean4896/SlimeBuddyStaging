import React from "react";
import "../index.css";
import Hero from "../images/Hero.jpg";
import ReactCurvedText from "react-curved-text";

const Home = () => {
  return (
    <div className="h-full py-6 px-6 bg-black">
      <div className="flex justify-center items-center md:mt-[10vh]">
        <div>
          <img src={Hero} alt="slimebuddy" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <ReactCurvedText
          width="320"
          height="40"
          cx="160"
          cy="20"
          rx="160"
          ry="20"
          startOffset="20"
          reversed={false}
          text="A new adventure awaits"
          textProps={{ style: { fontSize: "29" } }}
          textPathProps={{ fill: "#e600d2" }}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
      </div>
    </div>
  );
};
export default Home;
