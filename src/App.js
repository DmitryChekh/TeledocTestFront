import React, { useEffect } from 'react';
import './App.css';
import { showCustomer, fetchFounders,fetchCustomers } from './redux/actions';
import {CustomerForm} from './components/Customer/CustomerForm';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Container from 'react-bootstrap/Container'
import { Navbar } from './components/Nav';
import { Founders } from './components/Founder/Founders'
import {FounderForm} from './components/Founder/FounderForm';
import { FounderUpdate } from './components/Founder/FounderUpdate';
import { Customers } from './components/Customer/Customers';
import { CustomerUpdate } from './components/Customer/CustomerUpdate';
import { useSelector, useDispatch } from 'react-redux';



function App() {
  const dispatch =useDispatch()
  useEffect(() => {
    console.log("dispatch")
    dispatch(fetchFounders())
    dispatch(fetchCustomers())
}, [])


  const founders = useSelector(state => state.founders.founders)
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
            <Customers customers={[]}></Customers>
          </Route>
          <Route path="/founder">
            <FounderForm></FounderForm>
            <Founders founders={founders} />
    
          </Route>
          <Route path="/founder_page/:id">
            <FounderUpdate/>
          </Route>
          <Route path="/customer_page/:id">
            <CustomerUpdate></CustomerUpdate>
          </Route>
        </Switch>
      </Container>
    </Router>

  );
}

export default App;
