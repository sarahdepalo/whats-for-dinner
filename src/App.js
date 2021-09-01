import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import IntroContainer from './components/introContainer/IntroContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="wrapper">
          <IntroContainer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
