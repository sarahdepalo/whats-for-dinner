import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import IntroContainer from './components/introContainer/IntroContainer';
import Generator from './components/generatorContainer/Generator';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="wrapper">
          <IntroContainer/>
          <Generator/>
        </div>
      </Router>
    </div>
  );
}

export default App;
