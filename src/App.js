import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import SelectPage1 from './pages/SelectPage1';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import FinalResultPage1 from './pages/FinalResultPage1';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SelectPage1/*" element={<SelectPage1 />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
        <Route path="/FinalResultPage1" element={<FinalResultPage1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
