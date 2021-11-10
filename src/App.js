import { Link } from 'react-router-dom';
import './App.css';
import { TestComponent } from './TestComponent';

function App() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      
    </div>
  );
}

export default App;
