import { useEffect, useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handldeInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const forrmattedTime = now.toLocaleTimeString();
      setDateTime(`Date : ${formattedDate} - Time : ${forrmattedTime}`);
    }, 10);

    return () => {
      interval;
    };
  }, []);

  return (
    <div>
      <section>
        <header>
          <h1>Todo List</h1>
          <h2>{dateTime}</h2>
        </header>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              autoComplete="off"
              value={inputValue}
              onChange={handldeInputChange}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
        <section>
          <ul>
            {task.map((currTask, index) => {
              return <li key={index}>{currTask}</li>;
            })}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default App;
