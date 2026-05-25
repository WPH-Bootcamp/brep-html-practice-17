import { useState, useMemo } from "react";
import Child from "./2-Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent render");

  const data = useMemo(() => {
    return { name: "Ucup" };
  }, []);

  //   const data = { name: "Ucup" };

  return (
    <div>
      <Child data={data} />

      <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
    </div>
  );
};

export default Parent;
