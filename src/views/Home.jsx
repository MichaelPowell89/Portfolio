import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import gameDesign from "../public/images/controller.png";
import website from "../public/images/website.png";

import copyConsts from "../copyConsts.json";

function Home() {
  const mobile = window.innerWidth < 768;

  return (
    <Container
      style={
        !mobile
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "90vh",
            }
          : { padding: "8em 0" }
      }
    >
      <div
        className="homePage"
        style={{ flexDirection: "column", justifyContent: "center" }}
      >
        <div style={{ flex: 0.35, lineHeight: 3 }}>
          <h1 style={{ color: "white", fontSize: "3em" }}>
            {copyConsts.welcomeTitle}
          </h1>
          {mobile ? (
            <></>
          ) : (
            <p style={{ color: "white", fontSize: "2em" }}>
              {copyConsts.welcomeMessage}
            </p>
          )}
        </div>
        {!mobile ? (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="homeContainer">
                <Link to="/portfolio/games" style={{ zIndex: 1 }}>
                  <img className="homeImage" src={gameDesign} alt="" />
                </Link>
              </div>
              <div className="homeContainer">
                <Link to="/portfolio/web" style={{ zIndex: 1 }}>
                  <img className="homeImage" src={website} />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="homeContainer">
              <Link to="/portfolio/games" style={{ zIndex: 1 }}>
                <img className="homeImage" src={gameDesign} alt="" />
              </Link>
            </div>
            <div className="homeContainer">
              <Link to="/portfolio/web" style={{ zIndex: 1 }}>
                <img className="homeImage" src={website} />
              </Link>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default Home;
