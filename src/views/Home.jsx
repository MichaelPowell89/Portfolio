import React from "react";
import { Container, Row } from "react-bootstrap";

function Home (){
    return (
        <Container>
            <div className="homePage">
                <div className="homeContainer" >
                <a href="/gamedesign">
                   <img className="homeImage" src="./images/controller.png"/>
                   </a>
                </div>
                <div className="homeContainer">
                <a href="/webdesign">
                    <img className="homeImage" src="./images/website.png"/>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Home;