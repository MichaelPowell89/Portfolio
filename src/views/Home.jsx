import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import gameDesign from "../public/images/controller.png"
import website from "../public/images/website.png"

function Home (){
    return (
        <Container>
            <div className="homePage">
                <div className="homeContainer" >
                <Link to="/portfolio/games" style={{zIndex: 1}}> 
                   <img className="homeImage" src={gameDesign} alt=""/>
                   </Link>
                </div>
                <div className="homeContainer">
                <a href="/portfolio/webdesign">
                    <img className="homeImage" src={website}/>
                </a>
                </div>
            </div>
        </Container>
    )
}

export default Home;