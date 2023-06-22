import { AppRouter } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'animate.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
