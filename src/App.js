import { Link } from 'react-router-dom';
import './App.css';
import { TestComponent } from './TestComponent';

function App() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <br/>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/bookingMenu">BookingMenu</Link>
          </div>
  );
}

export default App;
