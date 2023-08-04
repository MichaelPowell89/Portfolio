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
import CardComponent from "../components/CardComponent";

const Game = (props) => {
  const [selectedTitle, newTitle] = useState(5);

  const mobile = window.innerWidth < 992;
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    console.log(activeSection);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            setTimeout(() => {
              setActiveSection(sectionId);
            }, 500); 
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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
                <h2 className="contentTitle mobileContentTitle">
                  {workExamples[titleIndex].title}
                  <button
                    onClick={() => toggleAccordion(titleIndex)}
                  className="accordion">
                    <DropdownArrow isOpen={openAccordion === titleIndex} />
                  </button>
                </h2>
                {openAccordion === titleIndex && (
                  <div className="dictionary">
                    <CarouselComponent
                      image={props.image}
                      blurImage={props.blurImage}
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
                    blurImage={props.blurImage}
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
      <Container className="ContentPage" style={{alignItems: "flex-start"}}>
        <CardComponent 
          Title={workExamples[selectedTitle].title}
          Subtitle={workExamples[selectedTitle].ReleaseYear}
          Position={workExamples[selectedTitle].position}
          Summary={workExamples[selectedTitle].summary}
          Description={workExamples[selectedTitle].description}
          Platform1={workExamples[selectedTitle].platform1}
          Platform2={workExamples[selectedTitle].platform2}
          Platform3={workExamples[selectedTitle].platform3}
          Platform4={workExamples[selectedTitle].platform4}
        />
          <div className="scrollContent">
          {activeSelection == "game" ? <>
            {renderAccordionSection(5, AFLE3Carousel)}
            {renderAccordionSection(0, RugbyCarousel)}
            {renderAccordionSection(1, AFLE2Carousel)}
            {renderAccordionSection(3, CKCarousel)}
            {renderAccordionSection(6, SlimeTimeCarousel)}
            {renderAccordionSection(4, OGICarousel)}
            {renderAccordionSection(2, TyCarousel)} </>: 
          <></> }
          </div>
      </Container>
    </SimpleReactLightbox>
  );
};

export default Game;
