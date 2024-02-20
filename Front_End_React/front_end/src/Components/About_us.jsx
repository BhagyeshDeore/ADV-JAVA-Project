import React from "react";
import { Card } from "react-bootstrap";
//import NavbarComp from "../NavbarComp/NavbarComp";
//import FooterComp from "../FooterComp/FooterComp";
import { HNavbar } from "./HNavbar";
//import "./AboutUs.css";
import Anku from "../Assets/Anku.png";
import Vashu from "../Assets/Vashu.png";
import Bhagu from "../Assets/Bhagu.png";
//import images from "./Images/Anku.jpeg";
//import Bhagu from "./Images/Bhagu.jpeg";
//import Vashu from "./Images/Vashu.jpeg";
//import Anku from "./src/Images/Anku.jpeg";

export default function AboutUs() {
  return (
    <>
      <div>
        <HNavbar />
        <div className="container">
          <h2>ABOUT US</h2>
          <hr />
          <div className="container flex align-items-center">
            <div className="text-container">
              <p style={{ fontSize: "1.2em", textAlign: "left" }}>
                At Parikshak, we believe in the power of coding to transform
                lives and drive innovation. Our platform is designed to be the
                ultimate playground for aspiring and seasoned developers alike,
                offering a unique and immersive experience in the world of
                coding challenges.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <h2>OUR COMITMMENT</h2>
          <hr />
          <div className="container flex align-items-center">
            <div className="text-container">
              <p style={{ fontSize: "1.2em", textAlign: "left" }}>
                At Parikshak, we are committed to maintaining a platform that is
                user-friendly, inclusive, and continually evolving. We listen to
                our community's feedback and strive to enhance the platform
                based on your needs. Our team is dedicated to providing a
                seamless and rewarding experience as you embark on your coding
                journey with us. Join CodeMasters today and unlock the world of
                possibilities that coding has to offer. Whether you're a coding
                enthusiast, a student, or a seasoned professional, there's
                always room to level up your skills and be a part of the
                CodeMasters community.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <h2>Our Vision</h2>
          <hr />
          <div className="container flex align-items-center">
            <div className="text-container">
              <p style={{ fontSize: "1.2em", textAlign: "left" }}>
                Diverse Challenges: CodeMasters hosts a wide range of coding
                challenges catering to various skill levels and programming
                languages. Whether you're a beginner looking to sharpen your
                skills or an experienced developer seeking new challenges, we
                have something for everyone. Real-world Applications: Our
                challenges are crafted to simulate real-world scenarios,
                providing a practical learning experience. You won't just be
                solving problems; you'll be building solutions that mirror the
                challenges faced by professionals in the tech industry.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <h2>OUR Mission</h2>
          <hr />
          <div className="container flex align-items-center">
            <div className="text-container">
              <p style={{ fontSize: "1.2em", textAlign: "left" }}>
                Our mission at Parikshak is to empower individuals with the
                skills and confidence to excel in the rapidly evolving field of
                technology. We strive to create a global community of passionate
                coders who embrace challenges, learn continuously, and push the
                boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="container" style={{ marginBottom: "30px" }}>
          <div className="row justify-content-center">
            <div className="col-md-3 mt-4">
              <Card>
                <Card.Img
                  variant="top"
                  src=""
                  alt="Viraj"
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>Viraj Tandel</Card.Title>
                </Card.Body>
              </Card>
            </div>

            <div className="col-6">
              <p style={{ textAlign: "left", valign: "right" }}>
                {" "}
                <br />
                <br /> <br />
                <b>
                  <h3
                    className="mt-4"
                    style={{ fontSize: "1em", textAlign: "center" }}
                  >
                    <b>Role: Co-Founder and CEO</b>{" "}
                  </h3>{" "}
                </b>
                Viraj Tandel, our Co-Founder and CEO, is the driving force
                behind the company's strategic direction. With a background in a
                relevant field or education, Viraj combines leadership and
                innovation to steer the company towards excellence. we are
                supporting to everyone
              </p>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-6">
              <p
                className="justify-content"
                style={{ textAlign: "left", valign: "left" }}
              >
                {" "}
                <br />
                <br /> <br />
                <b>
                  <h3
                    className="mt-4"
                    style={{ fontSize: "1em", textAlign: "center" }}
                  >
                    <b>Role: Co-Founder and Director of Operations</b>
                  </h3>{" "}
                </b>
                Bhagyesh Deore, our Director of Operations, ensures flawless
                execution in every event. A graduate of educational institution
                Bhagyesh's attention to detail and commitment to operational
                excellence elevate the quality of our services.we are suporting
                to everyone
              </p>
            </div>

            <div className="col-md-3 mt-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={Bhagu}
                  alt="Viraj"
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>Bhagyesh Deore</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-md-3 mt-4">
              <Card>
                <Card.Img variant="top" src={Vashu} />
                <Card.Body>
                  <Card.Title>Vaishnavi gawraskar</Card.Title>
                </Card.Body>
              </Card>
            </div>

            <div className="col-6">
              <p style={{ textAlign: "left", valign: "middle" }}>
                {" "}
                <br />
                <br /> <br />
                <b>
                  <h3
                    className="mt-4"
                    style={{ fontSize: "1em", textAlign: "center" }}
                  >
                    <b>Role: Co-Founder and Creative Director</b>
                  </h3>{" "}
                </b>
                Vaishnavi gawraskar, our Creative Director, infuses artistic
                flair into every event. With a background in [creative field or
                education], Vaishnavi's creativity knows no bounds. From
                conceptualization to design, Kuldeep ensures that each event is
                a captivating experience.we are suporting to everyone
              </p>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-6">
              <p
                className="justify-content"
                style={{ textAlign: "left", valign: "middle" }}
              >
                {" "}
                <br />
                <br /> <br />
                <b>
                  <h3
                    className="mt-4"
                    style={{ fontSize: "1em", textAlign: "center" }}
                  >
                    <b>Role: Co-Founder and Marketing Strategist</b>
                  </h3>{" "}
                </b>
                Rushikesh Jagdale, our Marketing Strategist, is the driving
                force behind promoting our brand and events. Leveraging
                expertise in Rushikesh ensures that our events gain the
                recognition they deserve, contributing to our success in the
                market.we are suporting to everyone
              </p>
            </div>

            <div className="col-md-3 mt-4">
              <Card>
                <Card.Img variant="top" src="" className="img-fluid" />
                <Card.Body>
                  <Card.Title> Rushikesh Jagdale</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-md-3 mt-4">
              <Card>
                <Card.Img variant="top" src={Anku} />
                <Card.Body>
                  <Card.Title>Ankita Pareek</Card.Title>
                </Card.Body>
              </Card>
            </div>

            <div className="col-6">
              <p style={{ textAlign: "left", valign: "middle" }}>
                {" "}
                <br />
                <br /> <br />
                <b>
                  <h3
                    className="mt-4"
                    style={{ fontSize: "1em", textAlign: "center" }}
                  >
                    <b>Role: Co-Founder and Technology Advisor</b>
                  </h3>{" "}
                </b>
                Ankita Pareek, our Technology Advisor, brings innovation to the
                forefront of our events. Holding a degree in [technology-related
                field], Ankita ensures that our events seamlessly integrate
                technology, providing a modern and engaging experience. we are
                suporting to everyone
              </p>
            </div>
          </div>
        </div>

        <br />
      </div>
    </>
  );
}
