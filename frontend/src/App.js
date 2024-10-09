import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './components/css/Product.css';
import Header from './components/page/Header';
import Banner from './components/users/Banner';
import Footer from './components/page/Footer';
import About from './components/users/About_us';
import Product from './components/users/Product';
import Cart from './components/users/Cart';
import Contact from './components/users/Contact';
import Pay from './components/users/Pay';
import Login from './components/users/Login';
import ProductDetail  from './components/users/ProductDetail';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About_us" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ProductDetail" element={<ProductDetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
