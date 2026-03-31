import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
// import "./App.css";

function CounterApp() {

  // count : 이전 또는 현재 값 / setCount() : count 값 변경 함수, 반드시 이걸 거쳐야 함.
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count + 2)}>+2</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount((count) => count < 10 ? count + 1 : 10)}>+(최대 10까지)</button>
      {/* <button onClick={() => setCount((count) => Math.min(count + 1, 10)}>+(최대 10까지)</button> */}

      {/* 
      // Too many re-renders.
      <button onClick={setCount(0)}>reset</button> 
      */}

      {/* <button
        className="counter"
        // JS 함수 호출 X -> 함수 정의 O
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
    </>
  );
}

export default CounterApp;
