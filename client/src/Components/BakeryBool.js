import React, { useState } from "react";
import { Button } from "@material-ui/core";

export default function BakeryBool() {
  const [isClicked, setIsClicked] = useState(false);

  const handleMap = () => {
    setIsClicked(!isClicked);
  };

  // Block for TEST (mock refactor and func test)
  return (
    <div
      style={{ background: "orange", color: "white", width: 100, height: 100 }}
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
