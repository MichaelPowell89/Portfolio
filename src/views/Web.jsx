import React, { useState, useEffect } from "react";
import workExamples from "../workExamples";
import { Card, Container, Row } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";

const Web = (props) => {
  const mobile = window.innerWidth < 992;
  
  const blurDivs = document.querySelectorAll(".blur-load");
  blurDivs.forEach((div) => {
    const img = div.querySelector("img");

    function loaded() {
      div.classList.add("loaded");
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });
  
  const generateCard = (index) => {
    const example = workExamples[index];
    return (
      <div style={mobile ? 
              {display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1} : {
        display: "flex",
        justifyContent: "center",
        padding: "2em",
        maxWidth: "50%"
        }}>
        <Card key={index} className={mobile ? "" : "h-100"} style={{maxWidth: "20%"}}>
          <Card.Body href={example.link}>
          <div className="blur-load" style={{ backgroundImage: `url(${example.blurImage})`, borderRadius: "2em 2em 0 0" }}>
          <Card.Img
              src={example.image}
              alt={example.title}
              style={{ borderRadius: "2em 2em 0 0" }}
              href={example.link}/>
              </div>
          </Card.Body>
          <Card.Body>
            <Card.Title href={example.link}>
              {example.title} - {example.ReleaseYear}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {example.position}
            </Card.Subtitle>
            <Card.Text>{example.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <>
      <div className="overlay" />
      <Container className="ContentPage">
        <div className="webComponent">
          {[7, 8, 9].map((index) => generateCard(index))}
        </div>
      </Container>
    </>
  );
};

export default Web;
