import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Contact,
  About,
  Todo,
} from './views';
import './App.css';
// component utama yang terdapat router untuk berpindah pindah component


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <ul className="list">
           <li><a><Link to="/">ToDo</Link></a></li>
           <li><a><Link to="/contact">Contact</Link></a></li>
           <li><a><Link to="/about">About</Link></a></li>
        </ul>
      </header>

      <Switch>
        <Route exact path="/">
          <Todo/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}
export default App;
