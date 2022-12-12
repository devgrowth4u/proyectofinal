//import { useEffect, useState } from 'react';
import './styles/styles.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Ticket from './pages/Ticket/Ticket';
import Contacto from './pages/Contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/Ticket"element={<Ticket />} />
        <Route path="/Contacto"element={<Contacto />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
