import React from "react";
import "./PlayGroundGridItem.scss";

export default function PlayGroundGridItem(props) 
{
  return (
    <div className={(props.node == 0) ? "gridItem disabledNode" : "gridItem activeNode"} onClick={props.onClick}></div>
  )
}