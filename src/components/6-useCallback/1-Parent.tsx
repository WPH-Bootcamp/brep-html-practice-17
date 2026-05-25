import { useCallback, useState } from "react";
import Button from "./2-Button";

const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Render");

  const handleClick = useCallback(() => {
    console.log("Clicked.");
  }, []);

  //   const handleClick = () => console.log("Clicked.");

  return (
    <div>
      <Button onClick={handleClick} />

      <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
    </div>
  );
};

export default Parent;
