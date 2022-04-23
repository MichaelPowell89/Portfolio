import React from "react";

function Information (props){
    return (
        <div>
          <a className="title" href={props.link}>
            <span className="gameTitle">{props.title}</span>
          </a>
          <span className="releaseYear"> - {props.ReleaseYear}</span>
          {props.position}
          <p className="textDescription">{props.description}</p>
        </div>
      );
}

export default Information;