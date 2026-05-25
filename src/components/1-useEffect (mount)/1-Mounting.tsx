import { useEffect } from "react";

const Mounting = () => {
  useEffect(() => {
    console.log("Mounting");
  }, []);

  return (
    <div>
      <h1>MATERI 1 - useEffect Mount</h1>
    </div>
  );
};

export default Mounting;
