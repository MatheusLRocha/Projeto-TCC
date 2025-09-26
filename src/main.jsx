import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Basal from './pages/Basal.jsx';
import Imc from './pages/Imc.jsx';
import Dieta from './pages/Dieta.jsx';
import Casa from './pages/Casa.jsx';
import Academia from './pages/Academia.jsx';
import Suplementos from './pages/Suplementos.jsx';
import Criadores from './pages/Criadores.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Login from './pages/Login.jsx';
import CriadorCard from './pages/CriadorCard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Login />},
      {path: "/cadastro", element: <Cadastro />},
      {path: "/inicio", element: <Inicio />},
      {path: "/basal", element: <Basal />},
      {path: "/imc", element: <Imc />},
      {path: "/dieta", element: <Dieta />},
      {path: "/casa", element: <Casa />},
      {path: "/academia", element: <Academia />},
      {path: "/suplementos", element: <Suplementos />},
      {path: "/criadores", element: <Criadores />},
      {path: "/criadores/:id", element: <CriadorCard />}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
