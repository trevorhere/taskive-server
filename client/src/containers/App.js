import React, { Component } from 'react';
import { Provider } from "react-redux";
import { ConfigureStore, configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar';

const store = configureStore()


const App = () => (
<Provider store={store}>
  <Router>
    <div className="onboarding">
      <Navbar/>
    </div>
  </Router>
</Provider>

)

  // callAPI = () => {
  //   fetch('/api/lists')
  //   .then(res => {return res.json();})
  //   .then(json => console.log(JSON.stringify(json)))
  // }



export default App;
