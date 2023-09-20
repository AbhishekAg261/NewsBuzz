import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/Navbar";
import NewsPage from "./Components/NewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Home from "./Components/Home";

const App = () => {
  const pageSize = 5;
  const apiKey = "817e28e3429a4c5b92d66df21671c58c";
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Routes>
        <Route exact path="/" element={<Home apiKey={apiKey} />}></Route>
        <Route
          exact
          path="/general"
          element={
            <NewsPage
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          exact
          path="/business"
          element={
            <NewsPage
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        ></Route>
        <Route
          exact
          path="/entertainment"
          element={
            <NewsPage
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          exact
          path="/general"
          element={
            <NewsPage
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          exact
          path="/health"
          element={
            <NewsPage
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        ></Route>
        <Route
          exact
          path="/science"
          element={
            <NewsPage
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        ></Route>
        <Route
          exact
          path="/sports"
          element={
            <NewsPage
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        ></Route>
        <Route
          exact
          path="/technology"
          element={
            <NewsPage
              apiKey={apiKey}
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
