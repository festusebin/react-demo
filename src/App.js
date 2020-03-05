import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import MyCarousel from './components/carousel';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <MyNavbar />
       <MyCarousel />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
       <Footer />
      </div>
      </Router>
    );

  }
}

export default App;
