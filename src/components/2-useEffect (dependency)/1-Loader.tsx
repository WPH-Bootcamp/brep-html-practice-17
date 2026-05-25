import { useEffect, useState } from "react";

const Loader = () => {
  const [count, setCount] = useState(0);

  // 1. Tanpa Dependecy Array -> akan terus looping (infinity loop)
  //   useEffect(() => {
  //     setCount(count + 1);
  //     console.log("Hello");
  //   }, );

  // 2. Dependency kosong [] -> akan berjalan hanya 1 kali saja (best practice)
  //   useEffect(() => {
  //     setCount(count + 1);
  //     console.log("Hello");
  //   }, []);
  //   console.log(count);

  // 3. Dengan dependency [state]
  useEffect(() => {
    console.log("Hello");
  }, [count]);

  return (
    <div>
      <h1>Materi 2 - useEffect (Dependecy)</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Loader;
