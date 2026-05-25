import { memo } from "react";

const Button = memo(({ onClick }: any) => {
  console.log("Button Render");
  return <button onClick={onClick}>Click Me</button>;
});

export default Button;
