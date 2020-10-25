import React from 'react';
import './App.css';
import Posts from './componens/Posts';
import MyArchiv from './componens/MyArchive';
import Navb from './componens/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navb />
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/archiv' component={MyArchiv} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
