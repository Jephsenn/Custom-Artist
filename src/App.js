import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation name="Teresa"/>
      <Switch>
        <Route path="/home" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <About />} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
