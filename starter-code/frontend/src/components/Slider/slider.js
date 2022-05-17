import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";

const images = [image1, image2, image3, image4]

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 300,
  infinite: true,
  indicators: true,
  scale: 0.1,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%", height: "38rem" }}
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
