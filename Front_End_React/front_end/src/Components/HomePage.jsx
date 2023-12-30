// import { GHeader } from "./GHeader";

// export function HomePage(props) {
//   return (
//     <>
//       <GHeader text="Home Page Edited by Ankita"></GHeader>
//     </>
//   );
// }
//import React from "react";
//import { Button, Navbar } from "react-bootstrap";
// import BannerBackground from "../Assets/home-banner-backgroung.png";
// import BannerImage from "../Assets/home-baneer-image.png";
// import { FiArrowRight } from "react-icon/fi";

// export function HomePage(props) {
//   return (
//     <div className="home-container">
//       <div className="home-banner-container">
//         <div className="home-bannerImage-container">
//           {<img src={BannerBackground} alt="" />}
//         </div>
//         <div className="home-text-section">
//           <h1 className="Primary-heading">A New Way to Learn</h1>
//           <p className="primary-text">
//             We are here to help you to enhance your skills, expand your
//             knowledge and prepare for technical interviews
//           </p>
//           <button>Register-here</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Image } from "react-bootstrap";
import BannerBackground from "../Assets/home-banner-backgroung.png";
//import BannerImage from "../Assets/home-baneer-image.png";

// Define the HomePage component
// export function HomePage(props) {
//   return (
//     <div className="row landing">
//       <Container className="text-center">
//         <div className="colmd-12 text-center">
//           <h1 className="Primary-heading">Welcome to Coding Contest!</h1>

//           <div className="home-bannerImage-container">
//             {<img src={BannerBackground} alt="" />}
//           </div>
//           <p>
//             Get ready to showcase your coding skills and compete with others in
//             exciting challenges.
//           </p>
//           <p>
//             <link to="/login">
//               <Button variant="primary"> Create Account </Button>
//             </link>
//           </p>
//           <div className="home-bannerImage-container">
//             {<img src="home-baneer-image.png" alt="" />}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

export function HomePage(props) {
  return (
    <div className="row landing">
      <Container>
        <div className="home-bannerImage-container">
          <div className="col-md-12 text-center">
            <h2 style={{ color: "Black", fontSize: "100px" }}>
              Welcome to Coding Contest!
            </h2>
            <h1 style={{ color: "Black", marginTop: "50px" }}>
              Get ready to showcase your coding skills and compete with others
              in exciting challenges.{" "}
            </h1>
            {<img src={BannerBackground} alt="" />}
            <Link to="/student-register">
              <Button variant="primary"> Create Account </Button>
            </Link>

            <div className="front">
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcoding&psig=AOvVaw3C-HO5OicVhHd-QtoJCKZ6&ust=1704023819007000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDSjcmNt4MDFQAAAAAdAAAAABAE" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
