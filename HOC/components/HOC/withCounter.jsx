import { useState } from "react";

const withCounter = (OriginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };
    return <OriginalComponent count={count} increment={increment} />;
  };
  return NewComponent;
};

export default withCounter;
