import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import Signup from './landing_page/signup/Signup';
import Signin from './landing_page/signup/Signin';
import Logout from './landing_page/signup/Logout';
import ProtectedRoute from './landing_page/signup/ProtectedRoute';
import Dashboard from './landing_page/Dashboard/dashboard';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/signin" element={<Signin />} />
       <Route path="/logout" element={<Logout />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound/>} />
      <Route path='/dashboard' element=
      {
        <ProtectedRoute><Dashboard /></ProtectedRoute>
        }
        />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
