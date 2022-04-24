import React, {useState} from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Content (props){
  // const [isExpanded, setExpanded] = useState(false)

  // function expand() {
  //   setExpanded(true);
  // }

  // function contract() {
  //   setExpanded(false);
  // }

    return (
      <SRLWrapper>
        <div className="term" >
            <img className="imageThumbnail" src={props.image} alt=""/>
        </div>
      </SRLWrapper>
      );
}

export default Content;

//onMouseOver={expand} onMouseOut={contract}
// style={{transform: isExpanded ? "scale(1.1)" : "scale(1.0)"}}