import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import NasaPhoto from './components/NasaPhoto';
import Navbar from './components/Navbar';
import AllFavorites from './views/AllFavorites';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path="/"/>
        <NasaPhoto path="/nasaimage"/>
        <AllFavorites path="/favorites"/>
      </Router>
    </div>
  );
}

export default App;
