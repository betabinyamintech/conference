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
      <Link to="/alternatives">alternatives</Link>
       
      {/* <TestComponent/> */}
    </div>
  );
}

export default App;
