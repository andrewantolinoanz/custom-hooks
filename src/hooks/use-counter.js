import { useState, useEffect } from "react";

// const useCounter = (increment = true) => {
const useCounter = (countFn) => {
  // const useCounter = (increment = true) => { // alternative way to implement counter logic is commented
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // if (increment) {
      // setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => countFn(prevCounter));
      // } else {
      // setCounter((prevCounter) => prevCounter - 1);
      // }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // }, [increment]);

  return counter;
};

export default useCounter;
