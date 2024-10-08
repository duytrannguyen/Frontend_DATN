import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './components/css/Product.css';
import Header from './components/page/Header';
import Banner from './components/Banner';
import Footer from './components/page/Footer';
import About from './components/About_us';
import Product from './components/Product';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Pay from './components/Pay';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
