import React, {useState} from "react";

function Content (props){
  const [isExpanded, setExpanded] = useState(false)

  function expand() {
    setExpanded(true);
  }

  function contract() {
    setExpanded(false);
  }

  function handleChange(value) {
    return function (){
      const backgroundImage = props.image;
      console.log("Content:" + backgroundImage);
    }
  }

    return (
        <div className="term" onMouseOver={expand} style={{transform: isExpanded ? "scale(1.1)" : "scale(1.0)"}} onMouseOut={contract} onClick={handleChange()}>
            <img className="imageThumbnail" src={props.image} alt=""></img>
        </div>
      );
}

export default Content;