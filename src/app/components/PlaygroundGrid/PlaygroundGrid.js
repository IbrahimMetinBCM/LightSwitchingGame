import React, { useState } from "react";
import "./PlayGround.scss";
import PlayGroundGridItem from "../PlayGroundGridItem/PlayGroundGridItem";

const gridDefaultState = [
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0,
]

export default function PlayGroundGrid()
{
  const [gridState, setGridState] = useState(gridDefaultState);

  return(
    <div className="gridContainer">
      {
        gridState.map((item, i) => {
          console.log(item);
          return (
            <PlayGroundGridItem node={item} key={i}/>
          )
        })
      }
    </div>
  ) 
}