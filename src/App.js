import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Loginc from './components/Loginc'
import Signup from './components/Signup'
import Contact from './components/Contact';
import TodoList from './components/Task/TodoList'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() {

  const [detail, setDetail] = useState([]);

  const setKeys = (details) => {
    console.log(details)
    setDetail(details);
  }

  return (
    <>
      <Router>
        <Header details={ detail} />
        <Switch>
          <Route path="/" exact render={(props) => (
            <Loginc {...props}  setKeys={setKeys}/>
          )} />

        <Route path="/signup" render={(props) => (
          <Signup {...props} setKeys={setKeys}/>
          )} />
          
          <Route path="/home" render={(props) => (
            <TodoList {...props} details={ detail}/>
          )} />

          <Route path="/contact" render={(props) => (
            <Contact {...props} details={ detail}/>
          )} />


        </Switch>
      </Router>
      
    </>
  );
}

export default App;
