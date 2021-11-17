import { tsCallSignatureDeclaration } from '@babel/types';
import { Link } from 'react-router-dom';
import './App.css';
import { ParentOTP } from './components/OtpPage/parentOTP';
import { TestComponent } from './TestComponent';


function App() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/ParentOTP">ParentOTP</Link>
      <Link to="/bookingMenu">BookingMenu</Link>
      <Link to="/home">home</Link>
  </div>);
}

export default App;
