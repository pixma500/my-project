import React from 'react';
import './App.css';
import Posts from './componens/Posts';
import MyArchiv from './componens/MyArchive';
import Navb from './componens/Navbar';

import {BrowserRouter as Router,Route} from "react-router-dom";


function App() {
  return (
    
            <Router>
              <Navb/>
      <div className="App">
        <Route path="/" exact render={()=> <Posts/>}/>
        <Route path="/archiv" exact render={()=> <MyArchiv/>}/>
     
      </div>
    </Router>
    
    

   
  );
}

export default App;
