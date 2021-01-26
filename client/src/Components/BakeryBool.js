import React, { useState } from "react";
import { Button } from "@material-ui/core";

export default function BakeryBool() {
  const [isClicked, setIsClicked] = useState(false);

  const handleMap = () => {
    setIsClicked(!isClicked);
  };

  // Micro component to test UI and button click
  // Block for TEST (mock refactor and func test)
  return (
    <div
      style={{ background: "orange", color: "white", width: 100, height: 100 }}
    >
      <Button onClick={() => handleMap()} size='small' color='secondary'>
        BOOL
      </Button>
      <button onClick={() => handleMap()}>🕵️‍♂️</button>
      {isClicked ? (
        <p style={{ background: "darkgreen", color: "white" }}>TRUE</p>
      ) : (
        <p style={{ background: "darkred", color: "white" }}>FALSE</p>
      )}
    </div>
  );
}
