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

const Game = (props) => {

    const [selectedTitle, newTitle] = useState(5);
    // const [background, newBackground] = useState("url('https://store-images.s-microsoft.com/image/apps.18123.14533227276590283.41248ee4-3267-47b4-aff1-815a0c15ee8a.ca262ffb-a7fa-49ea-8aab-d990cd7d8016')");
    const [background, newBackground] = useState("./images/Games/AFLE3/TitleScreen.png");


    const ChangeBackground = (value) => {
        // newBackground(Content.backgroundImage);
        // console.log("Content.backgroundImage: " + Content.backgroundImage);
        //const backgroundImageTest = props.backgroundImage;
        //console.log(backgroundImageTest);
    }

    function handleChange(value) {
        return function () {
            newTitle(value);
            //newBackground();
            console.log("Background: " + props.back)
            console.log("Background: " + background)
        }
    }

    return (
        <div>
            {/* <div className="backgroundImage" style={{ backgroundImage: background }} /> */}
            {/* <img className="backgroundImage" src={background} /> */}
            <div className="overlay" />
            <Container>
                <Container className="ContentPage">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{workExamples[selectedTitle].title} - {workExamples[selectedTitle].ReleaseYear}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{workExamples[selectedTitle].position}</Card.Subtitle>
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
                        <div className="dictionary" onClick={handleChange('5')}>
                            <div>
                                <AFLE3Carousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[0].title}</h1>
                        <div className="dictionary" onClick={handleChange('0')}>
                            <div>
                                <RugbyCarousel
                                    image={props.image}
                                    backgroundImage = {props.backgroundImage}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[1].title}</h1>
                        <div className="dictionary" onClick={handleChange('1')}>
                            <div>
                                <AFLE2Carousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[2].title}</h1>
                        <div className="dictionary" onClick={handleChange('2')}>
                            <div>
                                <TyCarousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[3].title}</h1>
                        <div className="dictionary" onClick={handleChange('3')}>
                            <div>
                                <CKCarousel
                                    image={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[6].title}</h1>
                        <div className="dictionary" onClick={handleChange('6')}>
                            <div>
                                <SlimeTimeCarousel
                                    ChangeBackground={props.image}
                                />
                            </div>
                        </div>

                        <h1 className="contentTitle">{workExamples[4].title}</h1>
                        <div className="dictionary" onClick={handleChange('4')}>
                            <div style={{ marginBottom: "300px" }}>
                                <OGICarousel
                                    ChangeBackground={props.image}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Game;

// What are the 7 primitive JavaScript types?
// 1. Undefined
// 2. Null
// 3. Strings
// 4. Boolean
// 5. numbers
// 6. symbols
// 7. bigint

// Everything else in JavaScript is an OBJECT.
// Yes, even arrays are objects.
// Technically, functions are objects too (though there's some debate around this.)
