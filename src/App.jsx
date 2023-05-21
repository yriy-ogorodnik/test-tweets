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

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/test-tweets/"}>
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
    </BrowserRouter>
  );
}

export default App;
