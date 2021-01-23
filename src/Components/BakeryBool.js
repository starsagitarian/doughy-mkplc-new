import React, { useState } from "react";
import { Button } from "@material-ui/core";

export default function BakeryBool() {
  const [isClicked, setIsClicked] = useState(false);

  const handleMap = () => {
    setIsClicked(!isClicked);
  };

  // Block for TEST (mock refactor and func test)
  return (
    <div style={{ background: "blue", width: 100, height: 100 }}>
      <Button onClick={() => handleMap()} size='small' color='secondary'>
        BOOL
      </Button>
      <button onClick={() => handleMap()}>BOOL</button>
      {isClicked ? (
        <p style={{ background: "green" }}>OMG ... I am TRUE ! ;-) </p>
      ) : (
        <p style={{ background: "red" }}>I am FALSE :(</p>
      )}
    </div>
  );
}
