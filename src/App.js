import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Movie from './Pages/Movie/Movie'
import MovieDetails from './Pages/Movie_Details/Movie_Details'
import Error from './Pages/Error/Error'

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movie} />
        <Route path='/movieDetails/:id' component={MovieDetails} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
