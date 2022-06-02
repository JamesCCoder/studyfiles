import { useEffect, useState } from "react";

const useCounter = (valid) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (valid === true) {
        setNumber((pre) => {
          return pre + 1;
        });
      } else {
        setNumber((pre) => {
          return pre - 1;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [valid]);

  return number;
};

export default useCounter;
