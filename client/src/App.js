import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import NasaPhoto from './views/NasaPhoto';
import Navbar from './components/Navbar';
import RandomPhoto from './views/RandomPhoto';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path="/"/>
        <NasaPhoto path="/nasaimage"/>
        <RandomPhoto path="/randomimage"/>
      </Router>
    </div>
  );
}

export default App;
