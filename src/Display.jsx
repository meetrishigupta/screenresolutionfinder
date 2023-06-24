import React, { useEffect, useState } from "react";
import styles from "./display.module.css";
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
      if(window.innerWidth === 1280){
        alert("Your screen is ready for YP Client")
      }
      window.removeEventListener("resize", handleheight);
    };
   
  });



  return (
    <>
            <h1>Your Screen Resolution is</h1>
      <div className={styles.wrapper}>
<div className={styles.wrapper2}>
   <p>Width: {width}</p>
      <p>Height: {height}</p>
</div>
     

      </div>
    </>
  );
}

export default Display;
