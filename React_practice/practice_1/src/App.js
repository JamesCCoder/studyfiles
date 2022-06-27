import React, { useState } from "react";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Input from "./components/Input";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValue = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const [status, setStatus] = useState({
    num: 0,
    res: 0,
    sign: "",
  });

  const resetHandler = () => {
    setStatus({
      ...status,
      num: 0,
      res: 0,
      sign: "",
    });
  };
  const invertHandler = () => {
    setStatus({
      ...status,
      num: status.num ? status.num * -1 : 0,
      res: status.res ? status.res * -1 : 0,
      sign: "",
    });
  };
  const percentHandler = () => {
    let num = status.num ? parseFloat(status.num) : 0;
    let res = status.res ? parseFloat(status.res) : 0;
    setStatus({
      ...status,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };
  const calcuHandler = (e) => {
    e.preventDefault();
    let value = e.target.innerHTML;
    setStatus({
      ...status,
      num: 0,
      res: status.num && !status.res ? status.num : status.res,
      sign: value,
    });
  };
  const numHandler = (e) => {
    e.preventDefault();
    let value = e.target.innerHTML;
    if (status.num.toString().length < 9) {
      setStatus({
        ...status,
        num:
          status.num === 0 && value === "0"
            ? "0"
            : status.num % 1 === 0
            ? Number(status.num + value)
            : status.num + value,
        res: !status.sign ? 0 : status.res,
      });
    }
  };
  const commaHandler = (e) => {
    e.preventDefault();
    let value = e.target.innerHTML;
    setStatus({
      ...status,
      num: !status.num.toString().includes(".")
        ? status.num + value
        : status.num,
    });
  };
  const equalHandler = () => {
    if (status.num && status.sign) {
      const math = (a, b, sign) => {
        return sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "*"
          ? a * b
          : a / b;
      };
      setStatus({
        ...status,
        num: 0,
        res:
          status.sign === "/" && status.num === "0"
            ? "wrong 0"
            : math(Number(status.res), Number(status.num), status.sign),
        sign: "",
      });
    }
  };
  return (
    <Wrapper>
      <Input value={status.num ? status.num : status.res} />
      <ButtonBox>
        {btnValue.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equal" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetHandler
                  : btn === "+-"
                  ? invertHandler
                  : btn === "%"
                  ? percentHandler
                  : btn === "."
                  ? commaHandler
                  : btn === "="
                  ? equalHandler
                  : btn === "+" || btn === "-" || btn === "*" || btn === "/"
                  ? calcuHandler
                  : numHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
