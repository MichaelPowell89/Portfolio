import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Content(props) {
  return (
    <SRLWrapper>
      <div className="term">
        <div className="blur-load">
          <img
            className="imageThumbnail"
            src={props.image}
            alt=""
            loading="lazy" // Add the lazy loading attribute here
          />
        </div>
      </div>
    </SRLWrapper>
  );
}

export default Content;
