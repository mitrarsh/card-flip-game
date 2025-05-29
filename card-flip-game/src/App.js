import logo from './logo.svg';
import './App.css';
import './styles.css';
import Board from './components/board';
import { Routes,Route,Navigate} from 'react-router-dom';
import Level2 from './components/level2';


function App() {
  return (
    <div className="App">
      <h1>Flip the Cards!</h1>
      <Routes>
        <Route path="/level1" element={<Board/>} />
        <Route path="/level2" element={<Level2 />} />
      </Routes>
    </div>
  );
}

export default App;
