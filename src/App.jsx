
import "./App.css";
import FilterSelect from "./components/StatusFilter/StatusFilter";

import { Tweet } from "./components/TweetItem/TweetItem";

function App() {
  return (
    <>
    <FilterSelect/>
      <Tweet />
    </>
  );
}

export default App;
