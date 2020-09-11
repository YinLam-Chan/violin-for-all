import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Tutorials from './components/pages/Tutorials';
import SheetMusic from './components/pages/SheetMusic';
import Forum from './components/pages/Forum';
import Message from './components/pages/Message';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/tutorials' exact component={Tutorials} />
        <Route path='/sheetMusic' exact component={SheetMusic} />
        <Route path='/forum' exact component={Forum} />
        <Route path='/message' exact component={Message} />
      </Switch>
    </Router>
      
  );
}

export default App;
