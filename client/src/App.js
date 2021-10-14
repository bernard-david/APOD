import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import NasaPhoto from './views/NasaPhoto';
import Navbar from './components/Navbar';
import RandomPhoto from './views/RandomPhoto';
import OnePhoto from './views/OnePhoto';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path="/"/>
        <NasaPhoto path="/nasaimage"/>
        <RandomPhoto path="/randomimage"/>
        <OnePhoto path="/nasaimage/:_id"/>
      </Router>
    </div>
  );
}

export default App;
