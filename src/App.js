
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import ProductsCard from './components/ProductsCard';
import { CartPage } from './components/CartPage';

function App() {
  return (
    <BrowserRouter>

      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<ProductsCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
