import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Recettes from './page/Recettes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/recettes" element={<Recettes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
