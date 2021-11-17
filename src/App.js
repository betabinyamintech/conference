import { Link } from 'react-router-dom';
import './App.css';
import { ParentOTP } from './components/OtpPage/parentOTP';
import { TestComponent } from './TestComponent';


function App() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/ParentOTP">ParentOTP</Link>

    </div>
  );
}

export default App;
