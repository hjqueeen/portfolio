import { BrowserRouter } from 'react-router-dom';
import './App.scss';

// Components
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
