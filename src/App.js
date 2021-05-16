import Header from "./Components/Header";
import CovidTracker from "./Components/CovidTracker";
import Vaccine from "./Components/Vaccine";
import Footer from "./Components/Footer";
import React, { useState, useEffect } from 'react';
import { About } from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const findSlot = (name, email, city, state, pincode) => {
    // console.log("I am adding this", name, email, city, state, pincode)
    
    const myInfo = {
      name: name,
      email: email,
      city: city,
      state: state,
      pincode: pincode
    }
    console.log(myInfo);
    return city;
    // setTodos([...todos, myTodo]);

  }
  return (
    <>
    <Router>
    <Header title="Covid19India" searchBar={false} /> 
    <Switch>
      <Route exact path="/" render={()=>{
        return(
          <>
          <div>
          <CovidTracker />
          </div>
          </>)
      }}> 
      </Route>
      <Route exact path="/about">
        <About />
      </Route> 
      <Route exact path="/vaccine">
        <Vaccine findSlot={findSlot}/>
      </Route> 
    </Switch> 
    <Footer />
    </Router>
    </>
  );
}

export default App;
