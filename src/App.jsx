import { useState } from "react";
import "./App.css";
import MyButton from "./components/UI/Button/MyButton";
import { Tweet } from "./components/TweetItem/TweetItem";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Tweet/>
    </>
  );
}

export default App;
