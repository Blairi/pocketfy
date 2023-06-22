import { AppRouter } from './router/AppRouter';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
