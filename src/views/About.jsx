import React from "react";
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import profile from "../public/images/LogoAsset.png"

function About (){

    return (
        <Container>
            <div className="aboutPage">
                <div className="imageContainer">
                    <img className="profileImage" src={profile} />
                    <div className="AboutContainer" style={{ width: "100%" }}>
                        <p className="aboutMe">Michael Powell is currently based on Melbourne, Australia and is employed as a quality assurance analyst with 4+ years experience.
                            However, his true passion is in game design where he has had many experiences across the development of different projects including 3 AAA titles.
                            Psychology and user experience are vital to Michael's approach in design as he believes user motivation and learning through operant conditioning are essential for creating a meaningful experience.</p>
                    </div>
                </div>
                <div className="AboutContainer">
                    <col-4>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Unreal Engine!</Tooltip>}>
                                <p><img className="experienceIcon unrealEngine" src={"../images/experience/UnrealEngine.png"} alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">C++</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/C++.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Unity</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/Unity.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                    </col-4>
                    <col-4>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Adobe Photoshop</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/Photoshop.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Adobe Illustrator</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/Illustrator.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Adobe XD</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/XD.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Maya</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/Maya.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                    </col-4>
                    <col-4>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">HTML</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/html.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">CSS</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/css.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Javascript</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/js.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}>
                                <p><img className="experienceIcon" src="../images/experience/react.png" alt="" /></p>
                            </OverlayTrigger>
                        </Row>
                    </col-4>
                </div>
            </div>
        </Container>
    )
}

export default About;