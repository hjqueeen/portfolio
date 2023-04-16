import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from '../shared/pages/MainPage/MainPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/portfolio" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
