import React, { useEffect, useState } from "react";
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
            loading="lazy"
          />
        </div>
      </div>
    </SRLWrapper>
  );
}

export default Content;
