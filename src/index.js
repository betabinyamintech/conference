import ReactDOM from 'react-dom';
import { UserProvider } from './context/user';
import Router from './components/Router'
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <UserProvider>
    <Router />
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
