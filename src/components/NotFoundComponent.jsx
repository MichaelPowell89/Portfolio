import React from "react";
import { Container } from "react-bootstrap";

function NotFoundComponent() {

  return (
    <>
        <Container className="notFoundContainer">
            <div className="notFoundProp">
                <h1 className="notFoundText">Ooops...</h1>
                <h2 className="notFoundText">It appears this link is broken.</h2>
            </div>
        </Container>
    </>
  );
}

export default NotFoundComponent;
