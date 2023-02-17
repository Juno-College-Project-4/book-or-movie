import './styles/styles.css';
import MainContainer from './components/MainContainer';
import FaceOff from './components/FaceOff';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h1>Books vs Movies</h1>
        <MainContainer />
      </header>
      <FaceOff />
      <main>
        <Routes>
          <Route path="./FaceOff" element={<FaceOff/>} />
        </Routes>
      </main>
      
    </>
  );
}

export default App;
