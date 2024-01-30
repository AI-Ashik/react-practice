import { useEffect, useState } from "react";

function WIndowWidth() {
  const [windowWidth, setWindowWIdth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWIdth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () =>{
    window.removeEventListener("resize", handleResize);

    }
  }, []);

  return (
    <>
      <h1>{windowWidth}</h1>
    </>
  );
}

export default WIndowWidth;
