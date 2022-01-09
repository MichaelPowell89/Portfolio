import React, {useState} from "react";

function Content (props){
  const [isExpanded, setExpanded] = useState(false)
  //const [backgroundImage, newbackgroundImage] = useState("url('https://store-images.s-microsoft.com/image/apps.18123.14533227276590283.41248ee4-3267-47b4-aff1-815a0c15ee8a.ca262ffb-a7fa-49ea-8aab-d990cd7d8016')")

  function expand() {
    setExpanded(true);
  }

  function contract() {
    setExpanded(false);
  }

  function handleChange(value) {
    return function (){
      const backgroundImage = props.image;
      console.log(backgroundImage);
    }
  }

    return (
        <div className="term" onMouseOver={expand} style={{transform: isExpanded ? "scale(1.1)" : "scale(1.0)"}} onMouseOut={contract} onClick={handleChange()}>
            <img className="imageThumbnail" src={props.image}></img>
        </div>
      );
}

export default Content;