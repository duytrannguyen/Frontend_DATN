// <<<<<<< khangdn
// // import { Routes, Route } from 'react-router-dom';
// import './App.scss';
// import './components/css/Product.css';
// // import Header from './components/page/Header';
// // import Banner from './components/Banner';
// // import Footer from './components/page/Footer';
// // import About from './components/About_us';
// // import Product from './components/Product';
// // import Cart from './components/Cart';
// // import Contact from './components/Contact';
// // import Pay from './components/Pay';

// import OrderManagement from './seller/Order';
// =======
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./components/css/Product.css";
import "./components/css/ProductDetail.css";
import "./components/css/ProductManagement.css";
import Header from "./components/page/Header";
import Banner from "./components/Banner";
import Footer from "./components/page/Footer";
import About from "./components/About_us";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Pay from "./components/Pay";
import Order from "./seller/Order";
import ProductDetail from "./components/ProductDetail";
import ProductManagement from "./components/seller/ProductManagement";
import CategoryManagement from "./components/seller/CategoryManagement";
import Headerss from "./seller/Header";
import Sidebar from "./seller/sidebar";
import Dashboard from "./seller/main";
// >>>>>>> dev

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
    <>
      <div>
        <Headerss />
        <Sidebar />
        <Dashboard />
      </div>
      <div className="app-container">
        <Header />
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
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
