//import { useEffect, useState } from 'react';
import './styles/styles.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contacto from './pages/Contacto/Contacto';
import Cards from "./pages/Cards/Cards";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/Contacto"element={<Contacto />} />
        <Route path="/Cards"element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
