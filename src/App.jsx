// import "./App.css";
// import FilterSelect from "./components/StatusFilter/StatusFilter";

import { TweetList } from "./components/TweetList/TweetList";

// function App() {
//   return (
//     <>
//     <FilterSelect/>

//      <TweetList/>

//     </>
//   );
// }

// export default App;
// ____________________________

import { Routes, Route, Link, HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter basename={import.meta.env.DEV ? "/" : "/test-tweets/"}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Hello World</h1>
              <Link to="about">About Us</Link>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <TweetList />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
