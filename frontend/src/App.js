import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './components/css/Product.css';
import './components/css/ProductDetail.css';
import './components/css/ProductManagement.css';
import Banner from './components/Banner';
import Footer from './components/page/Footer';
import About from './components/About_us';
import Product from './components/Product';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Pay from './components/Pay';
import ProductDetail from './components/ProductDetail';
import ProductManagement from './components/seller/ProductManagement';
import CategoryManagement from './components/seller/CategoryManagement';

function App() {
  return (
    <div className='app-container'>
      
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About_us" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ProductManagement" element={<ProductManagement />} />
        <Route path="/CategoryManagement" element={<CategoryManagement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
