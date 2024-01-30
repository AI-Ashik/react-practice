import { useCallback, useMemo, useState } from "react";
import Button from "../components/Button";
import ShowCount from "../components/ShowCount";
import Title from "../components/Title";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increamentBy1 = useCallback(() => {
    setCount1((prevState) => prevState + 1);
  }, []);

  const increamentBy5 = useCallback(() => {
    setCount2((prevState) => prevState + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 1;
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <Title />
      <ShowCount count={count1} title="counter 1" />
      <span>{isEvenOrOdd ? "even" : "odd"}</span>
      <Button handleClick={increamentBy1} children="increment by 1" />
      <hr />
      <ShowCount count={count2} title="counter 2" />
      <Button handleClick={increamentBy5} children="increment by 5" />
    </>
  );
}

export default App;
