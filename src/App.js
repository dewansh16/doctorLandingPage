import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
