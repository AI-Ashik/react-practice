import React from "react";

const Title = () => {
  console.log(`rendering title`);
  return <div>Use callback Hook</div>;
};

export default React.memo(Title);
