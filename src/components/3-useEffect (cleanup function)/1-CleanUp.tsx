import { useEffect } from "react";

const CleanUp = () => {
  useEffect(() => {
    console.log("1 : Mounting ");

    return () => {
      console.log("Cleanup jalan");
    };
  }, []);

  return (
    <div>
      <h1>MATERI 3 - useEffect (cleanup function)</h1>
    </div>
  );
};

export default CleanUp;
