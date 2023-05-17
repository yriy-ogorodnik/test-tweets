import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import MyButton from "./components/UI/Button/MyButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton children="Follow" />
    </>
  );
}

export default App;
