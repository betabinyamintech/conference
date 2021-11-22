import { tsCallSignatureDeclaration } from '@babel/types';
import { Link } from 'react-router-dom';
import './App.css';
import { TestComponent } from './TestComponent';


function App() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/loginOtp">loginOtp</Link>
      <Link to="/bookingMenu">BookingMenu</Link>
      <Link to="/home">home</Link>
      <Link to="/MeetingRoomsTable">MeetingRoomsTable</Link>
    
  </div>);
}

export default App;
