import * as React from "react";

// import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage';

class App extends React.Component{
  render(){
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />}/>
          </Routes>
        </Router>
      </div>
    );
  }
}






export default App;
