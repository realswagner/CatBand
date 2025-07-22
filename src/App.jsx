import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StagePage from './components/StagePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/stage" element={<StagePage />} />
    </Routes>
  );
}

export default App;
