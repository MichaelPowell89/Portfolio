import React, { useState } from 'react';
import RugbyCarousel from '../components/Carousel/RugbyCarousel'
import AFLE2Carousel from '../components/Carousel/AFLE2Carousel'
import AFLE3Carousel from '../components/Carousel/AFLE3Carousel'
import TyCarousel from '../components/Carousel/TyCarousel'
import CKCarousel from '../components/Carousel/CKCarousel'
import OGICarousel from '../components/Carousel/OGICarousel'
import SlimeTimeCarousel from '../components/Carousel/SlimeTimeCarousel'
import workExamples from "../workExamples"
import { Card, Container } from 'react-bootstrap';
import SimpleReactLightbox from 'simple-react-lightbox'

const Game = (props) => {

    const [selectedTitle, newTitle] = useState(5);

    function handleChange(value) {
        return function () {
            newTitle(value);
        }
    }

    return (
        <SimpleReactLightbox>
            <div className="overlay" />
            <Container>
                <div className="ContentPage">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{workExamples[selectedTitle].title} - {workExamples[selectedTitle].ReleaseYear}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{workExamples[selectedTitle].position}</Card.Subtitle>
                            <Card.Text>{workExamples[selectedTitle].summary}</Card.Text>
                            <Card.Text>{workExamples[selectedTitle].description}</Card.Text>
                            <Card.Link href="#">{workExamples[selectedTitle].platform1}</Card.Link>
                            <Card.Link href="#">{workExamples[selectedTitle].platform2}</Card.Link>
                            <Card.Link href="#">{workExamples[selectedTitle].platform3}</Card.Link>
                            <Card.Link href="#">{workExamples[selectedTitle].platform4}</Card.Link>
                        </Card.Body>
                    </Card>
                {/* </Container>
                <Container> */}
                    <div className="scrollContent">
                        <h1 className="contentTitle">{workExamples[5].title}</h1>
                        <div className="dictionary" onClick={handleChange('5')} onMouseOver={handleChange('5')}>
                            <div>
                                <AFLE3Carousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[0].title}</h1>
                        <div className="dictionary" onClick={handleChange('0')} onMouseOver={handleChange('0')}>
                            <div>
                                <RugbyCarousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[1].title}</h1>
                        <div className="dictionary" onClick={handleChange('1')} onMouseOver={handleChange('1')}>
                            <div>
                                <AFLE2Carousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[3].title}</h1>
                        <div className="dictionary" onClick={handleChange('3')} onMouseOver={handleChange('3')}>
                            <div>
                                <CKCarousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[6].title}</h1>
                        <div className="dictionary" onClick={handleChange('6')} onMouseOver={handleChange('6')}>
                            <div>
                                <SlimeTimeCarousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[4].title}</h1>
                        <div className="dictionary" onClick={handleChange('4')} onMouseOver={handleChange('4')}>
                            <div>
                                <OGICarousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[2].title}</h1>
                        <div className="dictionary" onClick={handleChange('2')} onMouseOver={handleChange('2')}>
                            <div style={{ marginBottom: "300px" }}>
                                <TyCarousel
                                    image={props.image}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </SimpleReactLightbox>
    )
}

export default Game;
