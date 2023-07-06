import React from "react";

function Tile(props) {
  console.log("bonjour la props", props);
  return (
    <div className="tile">
      <img />
      <h2>{props.title} </h2>
      <p>{props.paragraphe} </p>
    </div>
  );
}

export default Tile;
