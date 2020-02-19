import React from "react";
import "./PlayGroundGridItem.scss";

export default function PlayGroundGridItem(props) 
{
  return (
    <div className="gridItem">
      <p>
        {props.node}
      </p>
    </div>
  )
}