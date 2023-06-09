import React from "react";
import "../index.css";
import Hero from "../images/Hero.jpg";
import ReactCurvedText from 'react-curved-text';

const Home = () => {
  return (
    <div className="h-full py-6 px-6 bg-black">
      <div className="flex justify-center items-center md:mt-[10vh]">
        <div>
          <img src={Hero} alt="slimebuddy" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
      <ReactCurvedText width='360'
  height='50'
  cx='200'
  cy='25'
  rx='180'
  ry='12'
  startOffset='0'
  reversed={false}
  text='A new adventure awaits'
  textProps={{"style": {"fontSize": "30"}}}
  textPathProps={{"fill": "#e600d2"}}
  tspanProps={{"dy": "0"}}
  svgProps={{"style": {"transform": "rotate(0deg)"}}} />

      </div>
    </div>
  );
};
export default Home;
