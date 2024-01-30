import React from "react";

const Input = ({ placeholder, type }, ref) => {
  return (
    <div>
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
};

const forwardedRef = React.forwardRef(Input);

export default forwardedRef;
