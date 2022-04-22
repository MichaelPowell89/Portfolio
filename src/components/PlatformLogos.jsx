import React from "react";

function PlatformLogos (props){
    return (
        <div className="platformLogo" >
            {props.platform1}
            {props.platform2}
            {props.platform3}
            {props.platform4}
        </div>
      );
}

export default PlatformLogos;