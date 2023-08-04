import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Content(props) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (props.activeSection == "game") setDisplay(true)
  }, []);

  return (
    <SRLWrapper>
      <div className="term">
        <div className="blur-load">
        {display ?
          <img
            className="imageThumbnail"
            src={props.image}
            alt=""
            loading="lazy"
          /> :
        <></>}
        </div>
      </div>
    </SRLWrapper>
  );
}

export default Content;
