import { Route, Routes } from 'react-router-dom';
import MainPage from '../modules/MainPage/MainPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default AppRouter;
