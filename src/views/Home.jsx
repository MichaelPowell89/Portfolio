import React, { useState } from 'react';
import Information from '../components/Information'
import PlatformLogos from '../components/PlatformLogos'
import RugbyCarousel from '../components/Carousel/RugbyCarousel'
import AFLCarousel from '../components/Carousel/AFLCarousel'
import TyCarousel from '../components/Carousel/TyCarousel'
import CKCarousel from '../components/Carousel/CKCarousel'
import OGICarousel from '../components/Carousel/OGICarousel'
import workExamples from "../workExamples"
import Content from '../components/Content'
import AFL from '../AFL';

const Home = (props) => {
    const [selectedTitle, newTitle] = useState(0);
    const [background, newBackground] = useState("url('https://store-images.s-microsoft.com/image/apps.18123.14533227276590283.41248ee4-3267-47b4-aff1-815a0c15ee8a.ca262ffb-a7fa-49ea-8aab-d990cd7d8016')");

    const ChangeBackground = (value) => {
        //newBackground(props.backgroundImage);
        console.log("Home: ");

    }

    function handleChange(value)
    {
        return function() {
            newTitle(value);
            ChangeBackground();
            //newBackground(props.image);
            const title = props.image;
            console.log("title = " + title);
        }
    }
    
    return (
        <div>
            <div className="backgroundImage" style={{backgroundImage: background}}/>
            <div className="overlay"/>
            <div className="pageContainer">
                <div className= "PageContent">
                    <Information 
                            title = {workExamples[selectedTitle].title}
                            ReleaseYear = {workExamples[selectedTitle].ReleaseYear}
                            link = {workExamples[selectedTitle].link}
                            position={workExamples[selectedTitle].position}
                            description={workExamples[selectedTitle].description}
                        />
                </div>
                <div>
                    <PlatformLogos 
                            platform1={workExamples[selectedTitle].platform1}
                            platform2={workExamples[selectedTitle].platform2}
                            platform3={workExamples[selectedTitle].platform3}
                            platform4={workExamples[selectedTitle].platform4}
                        />
                </div>
                <div className = "Container">
                    <h1 className="contentTitle">{workExamples[0].title}</h1>
                    <div className="dictionary" onClick={handleChange('0')}>
                        <div>
                            <RugbyCarousel 
                                image={props.image}
                            />
                        </div>
                    </div>

                    <h1 className="contentTitle">{workExamples[1].title}</h1>
                    <div className="dictionary" onClick={handleChange('1')}>
                        <div>
                            <AFLCarousel 
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

                    <h1 className="contentTitle">{workExamples[4].title}</h1>
                    <div className="dictionary" onClick={handleChange('4')}>
                        <div style={{marginBottom: "300px"}}>
                            <OGICarousel 
                                ChangeBackground={props.image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;