import { AppRouter } from './router/AppRouter';
import { BrowserRouter, Link } from 'react-router-dom';
import 'animate.css';

export default function App() {
  return (
    <BrowserRouter>
      <h1>Testing deploy</h1>
      <Link to="/home" className="underline">Home</Link>
      <AppRouter />
    </BrowserRouter>
  )
}
