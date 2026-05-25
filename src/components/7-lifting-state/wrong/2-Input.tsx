import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
  );
};

export default Input;
