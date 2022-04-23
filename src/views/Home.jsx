import React from "react";
import { Container, Row } from "react-bootstrap";
import gameDesign from "../public/images/controller.png"
import website from "../public/images/website.png"

function Home (){
    return (
        <Container>
            <div className="homePage">
                <div className="homeContainer" >
                <a href="/gamedesign">
                   <img className="homeImage" src={gameDesign}/>
                   </a>
                </div>
                {/* <div className="homeContainer">
                <a href="/webdesign">
                    <img className="homeImage" src={website}/>
                </a>
                </div> */}
            </div>
        </Container>
    )
}

export default Home;