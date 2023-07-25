import React, { useState } from "react";
import RugbyCarousel from "../components/Carousel/RugbyCarousel";
import AFLE2Carousel from "../components/Carousel/AFLE2Carousel";
import AFLE3Carousel from "../components/Carousel/AFLE3Carousel";
import TyCarousel from "../components/Carousel/TyCarousel";
import CKCarousel from "../components/Carousel/CKCarousel";
import OGICarousel from "../components/Carousel/OGICarousel";
import SlimeTimeCarousel from "../components/Carousel/SlimeTimeCarousel";
import workExamples from "../workExamples";
import { Card, Container } from "react-bootstrap";
import SimpleReactLightbox from "simple-react-lightbox";

const Game = (props) => {
  const [selectedTitle, newTitle] = useState(5);

  const mobile = window.innerWidth < 768;

  function handleChange(value) {
    return function() {
      newTitle(value);
    };
  }

  const DropdownArrow = ({ isOpen }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="solid"
        strokeLinejoin="solid"
        className={`dropdown-arrow ${isOpen ? "open" : "closed"}`}
      >
        <polyline points="5 8 12 16 19 8" />
      </svg>
    );
  };

  const [openAccordion, setOpenAccordion] = useState(null);

const toggleAccordion = (titleIndex) => {
    if (openAccordion === titleIndex) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(titleIndex);
      newTitle(titleIndex);
    }
  };

  const renderAccordionSection = (titleIndex, CarouselComponent) => {
    return (
      <>
            {mobile ? (
              <div>
                <h1 className="contentTitle mobileContentTitle">
                  {workExamples[titleIndex].title}
                  <button
                    onClick={() => toggleAccordion(titleIndex)}
                  className="accordion">
                    <DropdownArrow isOpen={openAccordion === titleIndex} />
                  </button>
                </h1>
                {openAccordion === titleIndex && (
                  <div className="dictionary">
                    <CarouselComponent
                      image={props.image}
                      mobileResolution={mobile}
                    />
                  </div>
                )}
              </div>
            ) : (
              <>
                <h1 className="contentTitle">{workExamples[titleIndex].title}</h1>
                <div
                  className="dictionary"
                  onClick={handleChange(titleIndex)}
                  onMouseOver={handleChange(titleIndex)}
                >
                  <CarouselComponent
                    image={props.image}
                    mobileResolution={mobile}
                  />
                </div>
              </>
            )}
      </>
    );
  };

  return (
    <SimpleReactLightbox>
      <div className="overlay" />
      <Container>
        <div className="ContentPage">
        <Card style={{ width: "18rem" }}>
             <Card.Body className="gameCard">
               <Card.Title>
                 {workExamples[selectedTitle].title} -{" "}
                 {workExamples[selectedTitle].ReleaseYear}
               </Card.Title>
               <Card.Subtitle className="mb-2 text-muted">
                 {workExamples[selectedTitle].position}
               </Card.Subtitle>
               <Card.Text>{workExamples[selectedTitle].summary}</Card.Text>
               <Card.Text>{workExamples[selectedTitle].description}</Card.Text>
               <Card.Link href="#">
                 {workExamples[selectedTitle].platform1}
               </Card.Link>
               <Card.Link href="#">
                 {workExamples[selectedTitle].platform2}
               </Card.Link>
               <Card.Link href="#">
                 {workExamples[selectedTitle].platform3}
               </Card.Link>
               <Card.Link href="#">
                 {workExamples[selectedTitle].platform4}
               </Card.Link>
             </Card.Body>
        </Card>
          <div className="scrollContent">
            {renderAccordionSection(5, AFLE3Carousel)}
            {renderAccordionSection(0, RugbyCarousel)}
            {renderAccordionSection(1, AFLE2Carousel)}
            {renderAccordionSection(3, CKCarousel)}
            {renderAccordionSection(6, SlimeTimeCarousel)}
            {renderAccordionSection(4, OGICarousel)}
            {renderAccordionSection(2, TyCarousel)}
          </div>
        </div>
      </Container>
    </SimpleReactLightbox>
  );
};

export default Game;
