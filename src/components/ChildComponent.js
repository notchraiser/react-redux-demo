import React, { useState } from "react";

const ChildComponent = ({ ParentCallback }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          const newcount = count + 1;
          setCount(newcount);
          ParentCallback(newcount);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
};

export default ChildComponent;
