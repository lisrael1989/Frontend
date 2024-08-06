import './App.css';
import { EatIndex } from './pages/EatIndex';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import { Route, Router, Routes } from 'react-router';
import { RestDetails } from './pages/RestDetails';

export function App() {
  return (
    <div className="main-container">
      <Header />

      <>
        <Routes>
          <Route path="/" element={<EatIndex />} />
          {/* <Route path="/rest" element={<RestDetails />} /> */}
        </Routes>
      </>

      <Footer />
    </div>
  );
}
