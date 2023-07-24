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

const Web = (props) => {
  const [selectedTitle, newTitle] = useState(7);

  function handleChange(value) {
    return function() {
      newTitle(value);
    };
  }

  return (
    <div>
      <div className="overlay" />
      <Container className="ContentPage">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <a href={workExamples[7].link}>
              <Card.Img
                src={workExamples[7].coverImage}
                alt="Example image" // You can provide an alt attribute for accessibility
              />
            </a>
          </Card.Body>
          <Card.Body>
            <Card.Title>
              {workExamples[7].title} - {workExamples[7].ReleaseYear}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {workExamples[7].position}
            </Card.Subtitle>
            <Card.Text>{workExamples[7].description}</Card.Text>
            <Card.Link href="#">{workExamples[7].platform1}</Card.Link>
            <Card.Link href="#">{workExamples[7].platform2}</Card.Link>
            <Card.Link href="#">{workExamples[7].platform3}</Card.Link>
            <Card.Link href="#">{workExamples[7].platform4}</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <a href={workExamples[8].link}>
              <Card.Img
                src={workExamples[8].coverImage}
                alt="Example image" // You can provide an alt attribute for accessibility
              />
            </a>{" "}
          </Card.Body>
          <Card.Body>
            <Card.Title>
              {workExamples[8].title} - {workExamples[8].ReleaseYear}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {workExamples[8].position}
            </Card.Subtitle>
            <Card.Text>{workExamples[8].description}</Card.Text>
            <Card.Link href="#">{workExamples[8].platform1}</Card.Link>
            <Card.Link href="#">{workExamples[8].platform2}</Card.Link>
            <Card.Link href="#">{workExamples[8].platform3}</Card.Link>
            <Card.Link href="#">{workExamples[8].platform4}</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <a href={workExamples[9].link}>
              <Card.Img
                src={workExamples[9].coverImage}
                alt="Example image" // You can provide an alt attribute for accessibility
              />
            </a>{" "}
          </Card.Body>
          <Card.Body>
            <Card.Title>
              {workExamples[9].title} - {workExamples[9].ReleaseYear}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {workExamples[9].position}
            </Card.Subtitle>
            <Card.Text>{workExamples[9].description}</Card.Text>
            <Card.Link href="#">{workExamples[9].platform1}</Card.Link>
            <Card.Link href="#">{workExamples[9].platform2}</Card.Link>
            <Card.Link href="#">{workExamples[9].platform3}</Card.Link>
            <Card.Link href="#">{workExamples[9].platform4}</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Web;
