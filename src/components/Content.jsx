import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Content (props){
    return (
      <SRLWrapper>
        <div className="term" >
            <img className="imageThumbnail" src={props.image} alt=""/>
        </div>
      </SRLWrapper>
      );
}

export default Content;