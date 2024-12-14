import { Card } from './Card';
import Gallery from './Gallery';
import Hero from './Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logo from './Logo';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Hero />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="card" element={<Card />}>
            <Route path="message" element={<h1>form submitted</h1>} />
          </Route>
        </Routes>
        <Logo/>
      </BrowserRouter>
    </div>
  );
}
