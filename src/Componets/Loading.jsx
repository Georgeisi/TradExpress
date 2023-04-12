import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useState } from "react";

const Loading = () => {
  const [color, setColor] = useState("purple");

  const override = {
    display: "block",
    margin: " auto",
    borderColor: "black",
  };
  return (
    <div>
      <PulseLoader
        color={color}
        loading={Loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
