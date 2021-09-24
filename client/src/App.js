import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <NasaPhoto path="nasaphoto"/>
      </Router>
    </div>
  );
}

export default App;
