import React from 'react'
import logoImage from "./logo.png";

const imgStyle = {
    position: "relative",
    height: 30,
    marginRight: 20,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  
function Logo() {
    return <img src={logoImage} alt="logo" style={imgStyle} />;
}

export default Logo