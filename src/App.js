import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE {props.match.params.hatId}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats/:hatId' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;