//import { GHeader } from "./GHeader";

// export function HomePage(props) {
//   return (
//     <>
//       <GHeader text="Home Page Edited by Ankita"></GHeader>
//     </>
//   );

import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Image } from "react-bootstrap";
const BannerImage = require("../Assets/home-baneer-image.png");
const BannerBackground = require("../Assets/home-banner-backgroung.png");

export function HomePage() {
  return (
    <div className="slider">
      <div className="load">
        <center>
          {" "}
          <h2 style={{ color: "Black", marginTop: 80 }}>
            Welcome to Coding Contest!
          </h2>
        </center>
        <div className="content">
          <div className="principal">
            <h2
              style={{
                color: "Black",
                marginTop: "50px",
                textAlign: "center",
              }}
            >
              <strong>
                {" "}
                Get ready to showcase your coding skills and compete with others
                in exciting challenges.
              </strong>
            </h2>
          </div>
        </div>
        <div style={{ marginTop: -15, textAlign: "center" }}>
          <br />
          <br />
          <Link to="/student-register">
            <Button variant="primary"> Create Account </Button>
          </Link>
          <br /> <br />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={BannerImage}
                    alt="Card image cap"
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Step-by-step</h5>
                    <p className="card-text">
                      <p> </p>
                      Explore is a well-organized tool that helps you get the
                      most out of Us by providing structure to guide your
                      progress towards the next
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={BannerBackground}
                    alt="Card image cap"
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Monthly Contests</h5>
                    <p className="card-text">
                      <p>
                        Accept the coding challenges to push your coding limits
                        with us ,meet different challenges every month.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
