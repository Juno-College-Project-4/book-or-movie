import "./styles/styles.css";
import MainContainer from "./components/MainContainer";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <h1>Books vs Movies</h1>
        <MainContainer />
      </header>
      {/* <main>
        <Routes>
          <Route path="/faceoff" element={<FaceOff/>} />
        </Routes>
      </main> */}
    </>
  );
}

export default App;
