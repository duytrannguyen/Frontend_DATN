// import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './components/css/Product.css';
// import Header from './components/page/Header';
// import Banner from './components/Banner';
// import Footer from './components/page/Footer';
// import About from './components/About_us';
// import Product from './components/Product';
// import Cart from './components/Cart';
// import Contact from './components/Contact';
// import Pay from './components/Pay';
import Headerss from './seller/Header';
import Sidebar from './seller/sidebar';
import Dashboard from './seller/main';
// import OrderManagement from './seller/Order';

// function App() {
//   return (
//     <div className='app-container'>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Banner />} />
//         <Route path="/About_us" element={<About />} />
//         <Route path="/Product" element={<Product />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Pay" element={<Pay />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
const App = () => {
  return (
    <div>
      <Headerss />
      <Sidebar />
      <Dashboard />
      {/* Các component khác của ứng dụng */}
    </div>
  );
}

export default App;
