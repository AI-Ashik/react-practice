import { useState } from "react";
import Components2 from "./Components2";
import { userContext } from "./UserContext";

const Components1 = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({ id: "101", name: "Ashik" });
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState({ id: "1", name: "Arman" });
  return (
    <div>
      <userContext.Provider value={{ user, text }}>
        <Components2 />
      </userContext.Provider>
    </div>
  );
};

export default Components1;
