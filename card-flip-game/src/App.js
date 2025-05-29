import logo from './logo.svg';
import './App.css';
import './styles.css';
import Board from './components/board';
import Level2 from './components/level2';
import Level3 from './components/level3';
import { Routes,Route,Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1>Flip the Cards!</h1>
            <nav>
        <Link to="/level1">Start to play</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/level1" replace />} />
        <Route path="/level1" element={<Board />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="*" element={<div></div>} />
      </Routes>
    </div>
  );
}

export default App;
