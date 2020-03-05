import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import MyCarousel from './components/carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MyNavbar />
       
       <MyCarousel />
      </div>
    );

  }
}

export default App;
