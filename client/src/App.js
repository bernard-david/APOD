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
      {/* Insert Navbar here so that it is displayed throughou the app */}
      <Navbar/>
      {/* Setup Router to have a clickable site between pages */}
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
