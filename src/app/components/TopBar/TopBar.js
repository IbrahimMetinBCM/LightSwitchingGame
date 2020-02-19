import React from "react";
import "./TopBar.scss";

export default function TopBar(props)
{
  return (
    <div className="topBarContainer">
      <p>{props.title}</p>
    </div>
  )
}