import "./styles/styles.css";
import MainContainer from "./components/MainContainer";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <a href="/">
          <h1 className="wrapper">Books <span>vs</span> Movies</h1>
        </a>
        <MainContainer />
      </header>
      
    </>
  );
}

export default App;
