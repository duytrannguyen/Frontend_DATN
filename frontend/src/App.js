import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './CSS/Product.css';
import Header from './components/page/Header';
import Banner from './components/Banner';
import Footer from './components/page/Footer';
import About from './components/About_us';
import Product from './components/Product';


function App() {
  return (
    <div className='app-container'>
   <Header/>
   <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="/About_us" element={<About />} />
      <Route path="/Product" element={<Product />} />
   </Routes>
    <Footer/>
    </div>
  );
}

export default App;
