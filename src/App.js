import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Link to="/register">Register</Link><br/>
      <Link to="/login">Login</Link><br/>
      <Link to="/bookingResponse">BookingResponse</Link>
      
    </div>
  );
}

export default App;
