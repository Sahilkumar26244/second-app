import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    console.log(count);
    setCount(count + 1);
    console.log(count);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const doubleCount = () => {
    setCount(count * 2);
  };

  return (
    <div>
      <h3>Counter App : {count}</h3>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={doubleCount}>Double</button>
    </div>
  );
};

export default Counter;
