import React from "react";
import workExamples from "../workExamples";
import { Card, Container } from "react-bootstrap";

const Web = () => {
  const generateCard = (index) => {
    const example = workExamples[index];
    return (
      <Card key={index}>
        {/* <Card.Body>
          <a href={example.link}>
            <Card.Img
              src={example.image}
              alt={example.title}
            />
          </a>
        </Card.Body> */}
        <Card.Body>
          <Card.Title>
            {example.title} - {example.ReleaseYear}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {example.position}
          </Card.Subtitle>
          <Card.Text>{example.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <div className="overlay" />
      <Container className="ContentPage webPage">
        {[7, 8, 9].map((index) => generateCard(index))}
      </Container>
    </>
  );
};

export default Web;
