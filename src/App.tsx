import { lazy } from 'react';
import { Route, Routes} from 'react-router-dom';
import { ReQiew } from './pages';

import './App.scss';

const AspectScores = lazy(() => import('./pages/AspectScores'));
// const Benchmark = lazy(() => import('./pages/Benchmark'));
// const TimeSeries = lazy(() => import('./pages/TimeSeries'));
// const DriverAnalisys = lazy(() => import('./pages/AspectDetails'));
// const AspectDetails = lazy(() => import('./pages/AspectDetails'));

function App() {
  return (
      <Routes>
        <Route path="/" element={<ReQiew />} >
          <Route path="aspect-scores" element={<AspectScores />} />
          <Route path="benchmark" element={<AspectScores />} />
          <Route path="time-series" element={<AspectScores />} />
          <Route path="driver-analysis" element={<AspectScores />} />
          <Route path="aspect-details" element={<AspectScores />} />
          {/* <Route path="*" element={<BadPathPage />} />  */}
        </Route>
      </Routes>
  )
};

export default App
