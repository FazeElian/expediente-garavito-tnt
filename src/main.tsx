import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Global styles
import "./assets/css/Global.css";

createRoot(document.getElementById('root')!).render(
  <App />
)
