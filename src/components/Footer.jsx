import React from "react";

function Footer (){
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Michael Powell ⓒ {year}</p>
      </footer>
    );
}

export default Footer;