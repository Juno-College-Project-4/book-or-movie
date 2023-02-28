import "./styles/styles.css";
import MainContainer from "./components/MainContainer";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <a href="/">
          <h1>Books vs Movies</h1>
        </a>
        <MainContainer />
      </header>
    </>
  );
}

export default App;
