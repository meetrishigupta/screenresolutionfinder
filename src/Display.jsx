import React, { useEffect, useState } from "react";
import "./display.module.css";
function Display() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handlewidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlewidth);

    return () => {
      window.removeEventListener("resize", handlewidth);
    };
  });

  useEffect(() => {
    const handleheight = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleheight);
    return () => {
      window.removeEventListener("resize", handleheight);
    };
  });

  return (
    <>
      <div>
        <h1>Your Screen Resolution</h1>
        <h3>Width: {width}</h3>
        <h3>Height: {height}</h3>
      </div>
    </>
  );
}

export default Display;
