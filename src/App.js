import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import SelectPage1 from './pages/SelectPage1';
import FinalScreen from './pages/FinalScreen';
import PageC from './pages/PageC';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SelectPage1/*" element={<SelectPage1 />} />
        <Route path="/FinalScreen" element={<FinalScreen />} />
        <Route path="/pageC" element={<PageC />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
