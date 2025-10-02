import { useEffect, useState } from "react";

function UseEffDemo() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  function impcall() {
    console.log("it is important function");
  }
  function casualCall() {
    console.log("this is casual content");
  }
  useEffect(() => {
    casualCall();
  }, []);

  useEffect(() => {
    impcall();
  }, [counter, counter3]); // inside [] you can keep no square bracket for call every time, pass empty for one time call, pass single state change or two state change.
  return (
    <div>
      <h3>useEffect Hook</h3>
      <button onClick={() => setCounter(counter + 1)}>1st Counter {counter}</button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        2nd Counter {counter2}
      </button>
      <button onClick={() => setCounter3(counter3 + 1)}>
        3rd Counter {counter3}
      </button>
    </div>
  );
}
export default UseEffDemo;
