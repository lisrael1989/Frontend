import './App.css';
import { EatIndex } from './pages/EatIndex';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import { Route, Router, Routes } from 'react-router';
import { RestDetails } from './pages/RestDetails';
import { OrderPage } from './pages/OrderPage';

export function App() {
  return (
    <div className="main-container">
      <Header />

      <>
        <Routes>
          <Route path="/" element={<EatIndex />} />
          <Route path="/rest/:restId" element={<RestDetails />} />
          <Route path='/payment' element={<OrderPage />} />
        </Routes>
      </>

      <Footer />
    </div>
  );
}
