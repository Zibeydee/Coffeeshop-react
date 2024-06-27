import './App.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';
import About from './pages/About';
import Basket from './pages/Basket';
import Contact from './pages/Contact';
import Home from './pages/Home'
import Menu from './pages/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
