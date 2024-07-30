import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "../pages/MainPage.tsx";
import InvoicesPage from "../pages/InvoicesPage.tsx";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/invoices" element={<InvoicesPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
