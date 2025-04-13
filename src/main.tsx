import { createRoot } from 'react-dom/client'

// Global styles
import "./assets/css/Global.css";

// Router
import Router from './Router.tsx';

createRoot(document.getElementById('root')!).render(
  <Router />
)