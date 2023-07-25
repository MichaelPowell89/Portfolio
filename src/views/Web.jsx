import React from "react";
import workExamples from "../workExamples";
import { Card, Container, Row } from "react-bootstrap";

const Web = () => {
  const mobile = window.innerWidth < 768;
  
  const generateCard = (index) => {
    const example = workExamples[index];
    return (
      <div style={{flex: 1}}>
        <Card key={index} className={mobile ? "" : "h-100"}>
          <Card.Body href={example.link}>
            <Card.Img
              src={example.image}
              alt={example.title}
              style={{ borderRadius: "5% 5% 0 0" }}
            />
          </Card.Body>
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
      </div>
    );
  };

  return (
    <>
      <div className="overlay" />
      <Container className="ContentPage webPage">
        <Row style={{'--bs-gutter-y': '1.5em'}}>
          {[7, 8, 9].map((index) => generateCard(index))}
        </Row>
      </Container>
    </>
  );
};

export default Web;
