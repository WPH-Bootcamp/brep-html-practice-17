import { useRef } from "react";

const Counter = () => {
  const countRef = useRef<number>(0);

  const handleClick = () => {
    countRef.current += 1;

    console.log(countRef.current);
  };

  return (
    <div>
      <h1>MATERI 4 - useRef</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
