import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import SelectPage1 from './pages/SelectPage1';
import FinalScreen from './pages/FinalScreen';
import FinalSelectedScreen from './pages/FinalSelectedScreen';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SelectPage1/*" element={<SelectPage1 />} />
        <Route path="/FinalScreen" element={<FinalScreen />} />
        <Route path="/FinalSelectedScreen" element={<FinalSelectedScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
