import React from "react";
import { Container } from "react-bootstrap";
import BouncingBall from "../components/BouncingBallUpdate";
import { Link } from "react-router-dom";
import gameDesign from "../public/images/controller.png";
import website from "../public/images/website.png";

import copyConsts from "../copyConsts.json";

function Home() {
  const mobile = window.innerWidth < 992;

  return (
    <Container>
    <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      {mobile ? (
        <div className="homeContent">
          <h1 style={{ color: "#353535", fontSize: "3em", fontWeight: 500, lineHeight: "1.5em" }}>
            {copyConsts.welcomeTitle}
          </h1>
          {/* <h1 style={{ fontWeight: 500 }}>Score: {score}</h1> */}
        </div>
      ) : (
        <div className="homeContent">
          <h1 style={{ color: "#353535", fontSize: "4em", fontWeight: 500 }}>
            {copyConsts.welcomeTitle}
          </h1>
          <p style={{ color: "#353535", fontSize: "2.5em", fontWeight: 500 }}>
            {copyConsts.welcomeMessage}
          </p>
          {/* <h1 style={{ fontWeight: 500 }}>HighScore: {highScore}</h1>
          <h1 style={{ fontWeight: 500 }}>Score: {score}</h1> */}
        </div>
      )}
        <BouncingBall />
    </Container>

    // <Container
    //   style={
    //     !mobile
    //       ? {
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "space-around",
    //           alignItems: "center",
    //           height: "90vh",
    //         }
    //       : { padding: "8em 0" }
    //   }
    // >
    //   <div
    //     className="homePage"
    //     style={{ flexDirection: "column", justifyContent: "center" }}
    //   >
    //     <div style={{ flex: 0.35, lineHeight: 3 }}>
    //       <h1 style={{ color: "#353535", fontSize: "3em" }}>
    //         {copyConsts.welcomeTitle}
    //       </h1>
    //       {mobile ? (
    //         <></>
    //       ) : (
    //         <p style={{ color: "#353535", fontSize: "2em" }}>
    //           {copyConsts.welcomeMessage}
    //         </p>
    //       )}
    //     </div>
    //     {!mobile ? (
    //       <>
    //         <div style={{ display: "flex", flexDirection: "row" }}>
    //           <div className="homeContainer">
    //             <Link to="/portfolio/games" style={{ zIndex: 1 }}>
    //               <img className="homeImage" src={gameDesign} alt="" />
    //             </Link>
    //           </div>
    //           <div className="homeContainer">
    //             <Link to="/portfolio/web" style={{ zIndex: 1 }}>
    //               <img className="homeImage" src={website} />
    //             </Link>
    //           </div>
    //         </div>
    //       </>
    //     ) : (
    //       <>
    //         <div className="homeContainer">
    //           <Link to="/portfolio/games" style={{ zIndex: 1 }}>
    //             <img className="homeImage" src={gameDesign} alt="" />
    //           </Link>
    //         </div>
    //         <div className="homeContainer">
    //           <Link to="/portfolio/web" style={{ zIndex: 1 }}>
    //             <img className="homeImage" src={website} />
    //           </Link>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </Container>
  );
}

export default Home;
