import React from "react";
import "./BottomBar.scss";

export default function BottomBar(props)
{
  return (
    <div className="bottomBarContainer">
     <button onClick={props.startGame} className="startGameButton">
       <p>New Game</p>
     </button>
    </div>
  )
}