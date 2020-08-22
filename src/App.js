import React from 'react';
import './App.css';
import { showCustomer } from './redux/actions';
import CustomerForm from './components/CustomerForm';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Container from 'react-bootstrap/Container'
import { Navbar } from './components/Nav';
import { Founders } from './components/Founders'
import {FounderForm} from './components/FounderForm';
import { FounderUpdate } from './components/FounderUpdate';

function App() {

  return (

    <Router>
      <Container className="p-5">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/customer">
            <CustomerForm ></CustomerForm>
          </Route>
          <Route path="/founder">
            <FounderForm></FounderForm>
            <Founders founders={[]} />
          </Route>
        </Switch>
      </Container>
    </Router>

  );
}

export default App;
