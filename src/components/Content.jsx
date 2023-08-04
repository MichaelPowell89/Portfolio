import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Content(props) {
  const mobile = window.innerWidth < 992;
  
  const blurDivs = document.querySelectorAll(".blur-load");
  blurDivs.forEach((div) => {
    const img = div.querySelector("img");

    function loaded() {
      div.classList.add("loaded");
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });

  return (
    <SRLWrapper>
      <div className="term">
        {mobile ? (
          <img className="imageThumbnail" src={props.image} alt="" />
        ) : (
          <div
            className="blur-load"
            style={{ backgroundImage: `url(${props.blurImage})` }}
          >
            <img className="imageThumbnail" src={props.image} alt="" />
          </div>
        )}
      </div>
    </SRLWrapper>
  );
}

export default Content;
