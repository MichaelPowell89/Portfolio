import React from "react";
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import profile from "../public/images/LogoAsset.png";

import unrealEngine from "../public/images/Experience/UnrealEngine.svg";
import cplusplus from "../public/images/Experience/c.svg";
import unity from "../public/images/Experience/unity.svg";
import photoshop from "../public/images/Experience/Photoshop.svg";
import illustrator from "../public/images/Experience/Illustrator.svg";
import xd from "../public/images/Experience/XD.svg";
import maya from "../public/images/Experience/Maya.svg";
import html from "../public/images/Experience/html.svg";
import css from "../public/images/Experience/css.svg";
import js from "../public/images/Experience/js.svg";
import react from "../public/images/Experience/React.svg";
import cypress from "../public/images/Experience/cypress.svg";
import java from "../public/images/Experience/java.svg";
import charles from "../public/images/Experience/charles.svg";

import AppiumSVG from "../public/images/Experience/SVG/AppiumSVG.jsx";
import UnrealEngineSVG from "../public/images/Experience/SVG/UnrealEngineSVG.jsx";
import CProgrammingSVG from "../public/images/Experience/SVG/CProgrammingSVG.jsx";
import AdobeXDSVG from "../public/images/Experience/SVG/AdobeXDSVG.jsx";
import CSSSVG from "../public/images/Experience/SVG/CSSSVG.jsx";
import HTMLSVG from "../public/images/Experience/SVG/HTMLSVG.jsx";
import PhotoshopSVG from "../public/images/Experience/SVG/PhotoshopSVG.jsx";
import IllustratorSVG from "../public/images/Experience/SVG/IllustratorSVG.jsx";
import JavaSVG from "../public/images/Experience/SVG/JavaSVG";
import UnitySVG from "../public/images/Experience/SVG/UnitySVG";
import BlenderSVG from "../public/images/Experience/SVG/BlenderSVG";
import JavascriptSVG from "../public/images/Experience/SVG/JavascriptSVG";
import ReactSVG from "../public/images/Experience/SVG/ReactSVG";

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
                    <UnrealEngineSVG />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">C++</Tooltip>}
                >
                  <p>
                    <CProgrammingSVG />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Unity</Tooltip>}
                >
                  <p>
                  <UnitySVG/>
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
                    <PhotoshopSVG />
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
                    <IllustratorSVG />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Adobe XD</Tooltip>}
                >
                  <p>
                    <AdobeXDSVG />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Blender</Tooltip>}
                >
                  <p>
                  <BlenderSVG/>
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
                    <HTMLSVG />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">CSS</Tooltip>}
                >
                  <p>
                    <CSSSVG />
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Javascript</Tooltip>}
                >
                  <p>
                    <JavascriptSVG/>
                  </p>
                </OverlayTrigger>
              </Row>
              <Row>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}
                >
                  <p>
                    <ReactSVG/>
                  </p>
                </OverlayTrigger>
              </Row>
            </div>
          </col-4>
        </div>
      </div>
    </Container>
  );
}

export default About;
