import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (valueIncrement = 1) => {
    setCounter((currentValue) => currentValue + valueIncrement);
  };

  const decrement = (valueDecrement = 1) => {
    setCounter((currentValue) => currentValue - valueDecrement);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, increment, decrement, reset };
};
