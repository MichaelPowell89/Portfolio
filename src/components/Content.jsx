import React, { useEffect, useRef } from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Content(props) {
  const blurDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector("img");
          img.src = props.image;
          observer.unobserve(entry.target);
        }
      });
    });

    if (blurDivRef.current) {
      observer.observe(blurDivRef.current);
    }

    return () => {
      if (blurDivRef.current) {
        observer.unobserve(blurDivRef.current);
      }
    };
  }, [props.image]);

  return (
    <SRLWrapper>
      <div className="term">
        <div ref={blurDivRef} className="blur-load" style={{ backgroundImage: `url(${props.blurImage})` }}>
          <img className="imageThumbnail" src="" alt="" />
        </div>
      </div>
    </SRLWrapper>
  );
}

export default Content;
