import React from "react";
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import profile from "../public/images/LogoAsset.png";

import unrealEngine from "../public/images/Experience/UnrealEngine.png";
import cplusplus from "../public/images/Experience/c++.png";
import unity from "../public/images/Experience/unity.png";
import photoshop from "../public/images/Experience/Photoshop.png";
import illustrator from "../public/images/Experience/Illustrator.png";
import xd from "../public/images/Experience/XD.png";
import maya from "../public/images/Experience/Maya.png";
import html from "../public/images/Experience/html.png";
import css from "../public/images/Experience/css.png";
import js from "../public/images/Experience/js.png";
import react from "../public/images/Experience/React.png";
import cypress from "../public/images/Experience/cypress.png";

import copyConsts from "../copyConsts.json";

function About() {
  return (
    <Container className="ContentPage">
      <div className="aboutPage">
        <div className="imageContainer">
          <img className="profileImage" src={profile} alt="Profile" />
          <div className="AboutContainer" style={{ width: "100%" }}>
            <p className="aboutMe">{copyConsts.aboutMe}</p>
          </div>
        </div>
        <div className="AboutContainer">
          <col-4>
            <div className="skillColumn">
              <Row>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">Unreal Engine!</Tooltip>
                  }
                >
                  <p>
                    <img
                      className="experienceIcon unrealEngine"
                      src={unrealEngine}
                      alt="Unreal Engine"
                    />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">C++</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={cplusplus} alt="C++" />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Unity</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={unity} alt="Unity" />
                  </p>
                </OverlayTrigger>
              </Row>
            </div>
          </col-4>
          <col-4>
            <div className="skillColumn">
              <Row>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">Adobe Photoshop</Tooltip>
                  }
                >
                  <p>
                    <img
                      className="experienceIcon"
                      src={photoshop}
                      alt="Adobe Photoshop"
                    />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">Adobe Illustrator</Tooltip>
                  }
                >
                  <p>
                    <img
                      className="experienceIcon"
                      src={illustrator}
                      alt="Adobe Illustrator"
                    />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Adobe XD</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={xd} alt="Adobe XD" />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Maya</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={maya} alt="Maya" />
                  </p>
                </OverlayTrigger>
              </Row>
            </div>
          </col-4>
          <col-4>
            <div className="skillColumn">
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">HTML</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={html} alt="HTML" />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">CSS</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={css} alt="CSS" />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Javascript</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={js} alt="Javascript" />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={react} alt="React" />
                  </p>
                </OverlayTrigger>
              </Row>
            </div>
          </col-4>
          {/* <col-4>
            <div className="skillColumn">
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Cypress</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={cypress} alt="HTML" />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Appium</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={css} alt="CSS" />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Java</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={js} alt="Javascript" />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Charles</Tooltip>}
                >
                  <p>
                    <img className="experienceIcon" src={react} alt="React" />
                  </p>
                </OverlayTrigger>
              </Row>
            </div>
          </col-4> */}
        </div>
      </div>
    </Container>
  );
}

export default About;
