import { Routes, Route } from 'react-router-dom';
import Structure from './composants/Structure.jsx';
import Accueil from './pages/Accueil.jsx';
import Services from './pages/Services.jsx';
import Realisations from './pages/Realisations.jsx';
import Apropos from './pages/Apropos.jsx';
import Contact from './pages/Contact.jsx';
import Commande from './pages/Commande.jsx';
import Introuvable from './pages/Introuvable.jsx';
import { ADMIN_PATH } from './configuration.js';
import Admin from './pages/Admin.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Structure />}>
        <Route index element={<Accueil />} />
        <Route path="services" element={<Services />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="a-propos" element={<Apropos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="commander/:id" element={<Commande />} />
        <Route path="*" element={<Introuvable />} />
      </Route>
      <Route path={ADMIN_PATH} element={<Admin />} />
    </Routes>
  );
}