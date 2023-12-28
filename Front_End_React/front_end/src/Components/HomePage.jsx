// import { GHeader } from "./GHeader";

// export function HomePage(props) {
//   return (
//     <>
//       <GHeader text="Home Page Edited by Ankita"></GHeader>
//     </>
//   );
// }
import React from "react";
//import { Button, Navbar } from "react-bootstrap";
import BannerBackground from "../Assets/home-banner-backgroung.png";
//import BannerImage from "../Assets/home-baneer-image.png";
//import { FiArrowRight } from "react-icon/fi";

export function HomePage(props) {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {<img src={BannerBackground} alt="" />}
        </div>
        <div className="home-text-section">
          <h1 className="Primary-heading">A New Way to Learn</h1>
          <p className="primary-text">
            We are here to help you to enhance your skills, expand your
            knowledge and prepare for technical interviews
          </p>
          <button>Register-here</button>
        </div>
      </div>
    </div>
  );
}
