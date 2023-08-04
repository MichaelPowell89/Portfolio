import React, { useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Content(props) {
  useEffect(() => {
    const blurDiv = document.querySelector(".blur-load");
    const img = blurDiv.querySelector("img");

    function handleImageLoad() {
      blurDiv.classList.add("loaded");
    }

    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener("load", handleImageLoad);
    }

    return () => {
      // Clean up event listener when component unmounts
      img.removeEventListener("load", handleImageLoad);
    };
  }, []);

  return (
    <SRLWrapper>
      <div className="term">
        <div className="blur-load" style={{ backgroundImage: `url(${props.blurImage})` }}>
          <img className="imageThumbnail" src={props.image} alt="" />
        </div>
      </div>
    </SRLWrapper>
  );
}

export default Content;
