import React from "react";
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import profile from "../public/images/LogoAsset.png"

import unrealEngine from '../public/images/Experience/UnrealEngine.png'
import cplusplus from '../public/images/Experience/c++.png'
import unity from '../public/images/Experience/unity.png'
import photoshop from '../public/images/Experience/Photoshop.png'
import illustrator from '../public/images/Experience/Illustrator.png'
import xd from '../public/images/Experience/XD.png'
import maya from '../public/images/Experience/Maya.png'
import html from '../public/images/Experience/html.png'
import css from '../public/images/Experience/css.png'
import js from '../public/images/Experience/js.png'
import react from '../public/images/Experience/React.png'

function About (){

    return (
        <Container>
            <div className="aboutPage">
                <div className="imageContainer">
                    <img className="profileImage" src={profile} />
                    <div className="AboutContainer" style={{ width: "100%" }}>
                        <p className="aboutMe">When I have a controller in my hand, I’m happy. Within 4 years in the industry, I am honored to have worked on 3 AAA releases.
                        Regardless of the task, I bring the same work ethic wherever I go. Whether I am testing the latest build or researching and documenting different game mechanics from competitive titles,
                        my goal is to provide the best experience to the user. With the rapid pace that technology and games are growing, I strive to keep learning and growing my skills across different areas. 
                        However, my true passion is understanding and predicting player behaviour through different design practices and my education in psychology.</p>
                    </div>
                </div>
                <div className="AboutContainer">
                    <col-4>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Unreal Engine!</Tooltip>}>
                                <p><img className="experienceIcon unrealEngine" src={unrealEngine} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">C++</Tooltip>}>
                                <p><img className="experienceIcon" src={cplusplus} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Unity</Tooltip>}>
                                <p><img className="experienceIcon" src={unity} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                    </col-4>
                    <col-4>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Adobe Photoshop</Tooltip>}>
                                <p><img className="experienceIcon" src={photoshop} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Adobe Illustrator</Tooltip>}>
                                <p><img className="experienceIcon" src={illustrator} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Adobe XD</Tooltip>}>
                                <p><img className="experienceIcon" src={xd} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Maya</Tooltip>}>
                                <p><img className="experienceIcon" src={maya} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                    </col-4>
                    <col-4>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">HTML</Tooltip>}>
                                <p><img className="experienceIcon" src={html} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">CSS</Tooltip>}>
                                <p><img className="experienceIcon" src={css} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Javascript</Tooltip>}>
                                <p><img className="experienceIcon" src={js} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}>
                                <p><img className="experienceIcon" src={react} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                    </col-4>
                </div>
            </div>
        </Container>
    )
}

export default About;