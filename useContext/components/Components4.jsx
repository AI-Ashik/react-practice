import { useContext } from "react";
import { userContext } from "./UserContext";

const Components4 = () => {
  const { user, text } = useContext(userContext);
  return (
    <div>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
    </div>
  );
};

export default Components4;
