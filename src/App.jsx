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

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TweetsPage from "./page/Tweets/TweetsPage";
import Home from "./page/Home/Home";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout/>}
      >
        <Route
          index
          element={<Home/>}
        />
        <Route
          path="tweets"
          element={<TweetsPage/>}
        />
        <Route
          path="*"
          element={<div>NotFound</div>}
        />
      </Route>
    </Routes>
  );
}

export default App;
