import { useState } from "react";

import { Mounting, Loading } from "./components/1-useEffect (mount)";
import { Loader } from "./components/2-useEffect (dependency)";
import { CleanUp } from "./components/3-useEffect (cleanup function)";
import { Counter, InputFocus } from "./components/4-useRef";
import { ParentMemo } from "./components/5-useMemo";
import { ParentCallback } from "./components/6-useCallback";
import { DisplayWrong, InputWrong } from "./components/7-lifting-state/wrong";
import { DisplayRight, InputRight } from "./components/7-lifting-state/right";

const App = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  return (
    <div style={{ height: "2000px" }}>
      <h1>Belajar Hooks Lanjutan</h1>
      <Mounting />
      <Loading />

      <Loader />

      {show && <CleanUp />}
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Close" : "Open"}
      </button>

      <Counter />
      <InputFocus />

      <ParentMemo />

      <ParentCallback />

      <InputWrong />
      <DisplayWrong />

      <DisplayRight value={text} />
      <InputRight value={text} onChange={setText} />
    </div>
  );
};

export default App;
