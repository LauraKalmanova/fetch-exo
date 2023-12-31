import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Recettes from './page/Recettes';
import Categories from './page/Categories';
import Cuisine from './page/Cuisine';
import Ingredients from './page/Ingredients';
import MealDetails from './page/MealDetails';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/meal/details/:id" element={<MealDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
