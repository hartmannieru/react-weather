import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className="container">
      {/* <Popup /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics/>} />
      </Routes>
    </div>
  );
}

export default App;
