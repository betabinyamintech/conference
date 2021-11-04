import './App.css';
import { TestComponent } from './TestComponent';
import { ConfigProvider } from 'antd';
import he_IL from 'antd/lib/locale/he_IL';

function App() {
  return (
    <ConfigProvider locale={he_IL}>
    <div>
      <TestComponent />
    </div>
    </ConfigProvider>
  );
}

export default App;
