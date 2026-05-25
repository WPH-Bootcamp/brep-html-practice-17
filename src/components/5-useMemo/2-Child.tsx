import { memo } from "react";

const Child = memo(({ data }: any) => {
  console.log("Child Render");

  return <p>{data.name}</p>;
});

export default Child;
