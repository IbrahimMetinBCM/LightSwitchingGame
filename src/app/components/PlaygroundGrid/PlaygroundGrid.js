import React, { useState, useEffect } from "react";
import "./PlayGround.scss";
import PlayGroundGridItem from "../PlayGroundGridItem/PlayGroundGridItem";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";

const gridDefaultState = 
[
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0,
]

export default function PlayGroundGrid()
{
  const [gridState, setGridState] = useState(gridDefaultState);
  const [topbarTitle, setTopbarTitle] = useState("Switches");
  const [gameStarted, setGameStarted] = useState(false);

  const toggleMode = (nodeID,toggleMode) =>
  { 
    let tempArray = gridState.slice();
    if(tempArray.length > nodeID) tempArray[nodeID] = toggleMode;
    if(tempArray.length > nodeID + 1) tempArray[nodeID + 1] = toggleMode;
    if(tempArray.length > nodeID - 1) tempArray[nodeID - 1] = toggleMode;
    if(tempArray.length > nodeID - 5) tempArray[nodeID - 5] = toggleMode;
    if(tempArray.length > nodeID + 5) tempArray[nodeID + 5] = toggleMode;
    setGridState(tempArray);
  }

  useEffect(() => {
    if(gameStarted === true)
    {
      setGridState([
        0,0,0,0,0,
        0,1,1,1,0,
        0,1,0,1,0,
        0,1,1,1,0,
        0,0,0,0,0,
      ]);
    }
  },[gameStarted])

  const onGridItemClick = (nodeID) =>
  {
    let tempArray = gridState.slice();
    if(tempArray[nodeID] == 0)
    {
      toggleMode(nodeID,1);
    }
    else
    {
      toggleMode(nodeID,0);
    }
  }

  return(
    <>
      <TopBar
        title={topbarTitle}
      />
        <div className="gridContainer">
          {
            gridState.map((item, i) => {
              return (
                <PlayGroundGridItem onClick={() => onGridItemClick(i)} node={item} key={i}/>
              )
            })
          }
        </div>
        <BottomBar startGame={() => {
          setGameStarted(true);
        }}/>
      </>
  ) 
}